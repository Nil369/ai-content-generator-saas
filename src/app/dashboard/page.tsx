"use client";
import React from 'react';
import { 
  FileText, 
  Image as ImageIcon, 
  MessageSquare, 
  FileOutput, 
  PenTool,
  Video
} from 'lucide-react';
import { PinContainer } from '@/components/ui/3d-pin';
import { GradientEffect } from '@/components/ui/gradient-effect';

function Dashboard() {
  // Define the main AI content generation tools only
  const tools = [
    {
      title: "Content Writer",
      description: "Create blog posts, articles, and marketing copy with AI assistance",
      icon: <PenTool className="h-6 w-6 text-white" />,
      href: "/dashboard/content-writer",
      color: "from-purple-500 to-indigo-600",
      overlayColor: "rgba(124, 58, 237, 0.2)" // purple-ish
    },
    {
      title: "Image Generator",
      description: "Create custom images and graphics using AI models",
      icon: <ImageIcon className="h-6 w-6 text-white" />,
      href: "/dashboard/image-generator",
      color: "from-blue-500 to-cyan-600",
      overlayColor: "rgba(59, 130, 246, 0.2)" // blue-ish
    },
    {
      title: "Chat Assistant",
      description: "Get answers and assistance through conversational AI",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      href: "/dashboard/chat-assistant",
      color: "from-green-500 to-emerald-600",
      overlayColor: "rgba(16, 185, 129, 0.2)" // green-ish
    },
    {
      title: "PDF Generator",
      description: "Create professional PDF documents with AI formatting",
      icon: <FileOutput className="h-6 w-6 text-white" />,
      href: "/dashboard/pdf-generator",
      color: "from-red-500 to-rose-600",
      overlayColor: "rgba(239, 68, 68, 0.2)" // red-ish
    },
    {
      title: "Video Creator",
      description: "Generate videos and animations with AI-powered tools",
      icon: <Video className="h-6 w-6 text-white" />,
      href: "/dashboard/video-creator",
      color: "from-amber-500 to-orange-600",
      overlayColor: "rgba(245, 158, 11, 0.2)" // amber-ish
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero section with animated effect */}
      <section className="relative rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border shadow-sm mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <GradientEffect />
        </div>
        <div className="relative p-12 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">AI Content Crafter Dashboard</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Explore our suite of AI-powered tools to create amazing content
            </p>
          </div>
        </div>
      </section>

      {/* 3D Pins Grid for Tools */}
      <div className="py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">AI Content Generation Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-32">
          {tools.map((tool, index) => (
            <div key={index} className="h-[20rem] w-full flex items-center justify-center ">
              <PinContainer
                title={tool.title}
                href={tool.href}
                containerClassName="h-[300px] w-[300px]"
              >
                <div 
                  className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
                  style={{ background: `radial-gradient(circle at center, ${tool.overlayColor} 0%, transparent 70%)` }}
                >
                  <div 
                    className={`absolute inset-0 opacity-50 bg-gradient-to-br ${tool.color}`}
                    style={{ mixBlendMode: 'overlay' }}
                  />
                  
                  <div className="flex flex-col items-center justify-center text-center h-full z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-500 hover:scale-110 relative z-20">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                        {tool.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                    <p className="text-white/80 text-sm max-w-[200px]">{tool.description}</p>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
