import React from "react";
import {
    FileText,
    Image as ImageIcon,
    MessageSquare,
    FileOutput,
    PenTool,
    Video
} from 'lucide-react';

interface Tools {
    title: string,
    description?: string,
    icon: React.ElementType,
    href: string,
    color: string,
    overlayColor: string
}


export const tools: Tools[] = [
    {
        title: "Content Writer",
        description: "Create blog posts, articles, and marketing copy with AI assistance",
        icon: PenTool,
        href: "/dashboard/content-writer",
        color: "from-purple-500 to-indigo-600",
        overlayColor: "rgba(124, 58, 237, 0.2)" // purple-ish
    },
    {
        title: "Image Generator",
        description: "Create custom images and graphics using AI models",
        icon: ImageIcon,
        href: "/dashboard/image-generator",
        color: "from-blue-500 to-cyan-600",
        overlayColor: "rgba(59, 130, 246, 0.2)" // blue-ish
    },
    {
        title: "Chat Assistant",
        description: "Get answers and assistance through conversational AI",
        icon: MessageSquare,
        href: "/dashboard/chat-assistant",
        color: "from-green-500 to-emerald-600",
        overlayColor: "rgba(16, 185, 129, 0.2)" // green-ish
    },
    {
        title: "PDF Assistant",
        description: "An pdf assitant RAG application.",
        icon: FileOutput,
        href: "/dashboard/pdf-assistant",
        color: "from-red-500 to-rose-600",
        overlayColor: "rgba(239, 68, 68, 0.2)" // red-ish
    },
    {
        title: "AI LMS",
        description: "Create AI Generated courses",
        icon: Video,
        href: "/dashboard/ai-lms",
        color: "from-amber-500 to-orange-600",
        overlayColor: "rgba(245, 158, 11, 0.2)" // amber-ish
    }
]