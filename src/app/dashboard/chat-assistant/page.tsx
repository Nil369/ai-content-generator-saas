"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, User, Bot, Trash, Download } from "lucide-react";
import toast from 'react-hot-toast';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

export default function ChatAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi there! I\'m your AI content assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getSimulatedResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getSimulatedResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('blog') || input.includes('article')) {
      return "I'd be happy to help you with a blog post or article! What topic would you like to write about? I can help with outline creation, content suggestions, or even draft some sections for you.";
    } else if (input.includes('social') || input.includes('post')) {
      return "Social media content is my specialty! Would you like help with a specific platform like Instagram, Twitter, or LinkedIn? I can suggest engaging captions, hashtags, and content ideas.";
    } else if (input.includes('email') || input.includes('newsletter')) {
      return "Email marketing is highly effective! I can help you craft compelling subject lines, design email templates, or create engaging newsletter content that converts.";
    } else {
      return "I'm here to help with your content creation needs. I can assist with blog posts, social media content, email copy, product descriptions, and much more. What specific type of content can I help you with today?";
    }
  };

  const handleClearChat = () => {
    setMessages([{
      id: 'welcome',
      role: 'assistant',
      content: 'Hi there! I\'m your AI content assistant. How can I help you today?',
      timestamp: new Date()
    }]);
    toast.success('Chat history cleared');
  };

  const handleExportChat = () => {
    // Create chat export
    const chatExport = messages
      .map(msg => `[${msg.role.toUpperCase()}]: ${msg.content}`)
      .join('\n\n');
      
    // Create download file
    const element = document.createElement('a');
    const file = new Blob([chatExport], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `chat-export-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success('Chat exported successfully');
  };

  // Handle Enter key press for sending messages
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 h-[calc(100vh-10rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Chat Assistant</h1>
        <p className="text-muted-foreground">Get help with your content creation tasks</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100%-5rem)]">
        {/* Chat topic suggestions */}
        <div className="hidden lg:block lg:col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Suggested Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Help me write a blog post",
                "Create social media content",
                "Draft an email campaign",
                "Generate product descriptions",
                "Create an SEO-friendly article"
              ].map((topic, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className="w-full justify-start text-sm font-normal h-auto py-2"
                  onClick={() => setInputValue(topic)}
                >
                  {topic}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
        
        {/* Chat window */}
        <Card className="lg:col-span-3 flex flex-col h-full">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Chat</CardTitle>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8"
                  onClick={handleClearChat}
                >
                  <Trash className="h-4 w-4 mr-1" />
                  Clear
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8"
                  onClick={handleExportChat}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-y-auto px-4 pb-0">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`
                      flex gap-3 max-w-[80%] rounded-lg p-3
                      ${message.role === 'user' 
                        ? 'bg-primary text-primary-foreground ml-4' 
                        : 'bg-muted mr-4'
                      }
                    `}
                  >
                    <div className="w-6 h-6 flex-shrink-0">
                      {message.role === 'user' ? (
                        <User className="h-6 w-6" />
                      ) : (
                        <Bot className="h-6 w-6" />
                      )}
                    </div>
                    <div className="text-sm">{message.content}</div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-4 max-w-[80%] mr-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-muted-foreground animate-pulse" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="mt-auto pt-4 pb-4">
            <div className="flex items-end gap-2 w-full">
              <Textarea
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[80px] resize-none"
              />
              <Button 
                className="shrink-0 h-10"
                disabled={!inputValue.trim() || isLoading}
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 