import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, MessageSquare, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
  // Mock history data
  const historyItems = [
    {
      id: 1,
      title: "Blog post about AI technology",
      type: "content",
      date: "2 hours ago",
      prompt: "Write a blog post about the latest AI technology trends"
    },
    {
      id: 2,
      title: "Header image for website",
      type: "image",
      date: "Yesterday",
      prompt: "Create a futuristic header image with blue and purple gradient"
    },
    {
      id: 3,
      title: "Marketing email copy",
      type: "content",
      date: "2 days ago",
      prompt: "Generate an engaging marketing email for our new AI product"
    },
    {
      id: 4,
      title: "Social media post images",
      type: "image",
      date: "3 days ago",
      prompt: "Generate a set of social media images with abstract shapes"
    },
    {
      id: 5,
      title: "Product description",
      type: "content",
      date: "5 days ago",
      prompt: "Write a compelling product description for our AI tool"
    },
    {
      id: 6,
      title: "Chat about content strategy",
      type: "chat",
      date: "1 week ago",
      prompt: "Help me create a content strategy for my business"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">History</h1>
        <p className="text-muted-foreground">View and manage your content generation history</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search history..." 
            className="w-full pl-10 pr-4"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {historyItems.map(item => (
          <Card key={item.id} className="hover:bg-accent/10 cursor-pointer transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.type === 'content' && <FileText size={18} className="text-primary" />}
                    {item.type === 'image' && <Image size={18} className="text-indigo-500" />}
                    {item.type === 'chat' && <MessageSquare size={18} className="text-purple-500" />}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-xs">{item.date}</CardDescription>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {item.type === 'content' && 'Content'}
                  {item.type === 'image' && 'Image'}
                  {item.type === 'chat' && 'Chat'}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground truncate">{item.prompt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 