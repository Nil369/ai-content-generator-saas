"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Sparkles, FileDown, Copy, RefreshCcw, HelpCircle, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  
  const styles = [
    { name: "Photorealistic", icon: "🏞️" },
    { name: "3D Render", icon: "🧊" },
    { name: "Illustration", icon: "🎨" },
    { name: "Pixel Art", icon: "👾" },
    { name: "Cartoon", icon: "✏️" },
    { name: "Watercolor", icon: "💦" },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setGenerating(true);
    setGeneratedImage("");
    
    // Simulate generation (replace with actual API call)
    setTimeout(() => {
      // Using a placeholder image for demonstration
      setGeneratedImage("https://placehold.co/600x400/2563eb/FFFFFF/png?text=AI+Generated+Image");
      setGenerating(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Image Generator</h1>
        <p className="text-muted-foreground">Transform your ideas into stunning visuals</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input section */}
        <div className="col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-primary" />
                Prompt
              </CardTitle>
              <CardDescription>
                Describe the image you want to generate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="A futuristic city with flying cars and neon lights..."
                className="min-h-[150px] resize-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Tips
              </Button>
              <Button 
                onClick={handleGenerate} 
                disabled={!prompt.trim() || generating}
                className="gap-2"
              >
                {generating ? (
                  <>
                    <RefreshCcw className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <ImageIcon className="h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Style</CardTitle>
              <CardDescription>
                Choose a style for your image
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((style) => (
                  <Button 
                    key={style.name}
                    variant="outline" 
                    className="justify-start h-auto py-3"
                  >
                    <span className="mr-2 text-xl">{style.icon}</span>
                    <span>{style.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Output section */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Generated Image</CardTitle>
            <CardDescription>
              Your AI-created visualization
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="relative w-full min-h-[400px] rounded-md overflow-hidden border flex items-center justify-center bg-muted/30">
              {generating ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2
                    }}
                  >
                    <Sparkles className="h-16 w-16 text-primary/50" />
                  </motion.div>
                  <p className="text-muted-foreground mt-6">Creating your image...</p>
                </div>
              ) : generatedImage ? (
                <Image 
                  src={generatedImage} 
                  alt="Generated Image"
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground mb-2">Your image will appear here</p>
                  <p className="text-sm text-muted-foreground">Enter a prompt and click Generate</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={!generatedImage}>
                <FileDown className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm" disabled={!generatedImage}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <Button variant="outline" size="sm" disabled={!generatedImage || generating}>
              <RefreshCcw className="h-4 w-4 mr-2" />
              Regenerate
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 