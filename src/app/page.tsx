"use client";
import { useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { ArrowRight, Bot, FileText,ImageIcon, Sparkles, Zap } from "lucide-react";
import HomeNavbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />

      {/* Hero Section with Gemini Effect */}
      <section
        ref={ref}
        className="relative h-screen min-h-[800px] w-full overflow-hidden"
      >
        <GoogleGeminiEffect
          pathLengths={pathLengths}
          title="AI Content Crafter"
          description="Transform your ideas into brilliant content with the power of AI"
          className="pt-20"
        />
        <div className="absolute bottom-20 left-0 right-0 flex justify-center z-10">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg transition-all duration-300"
            >
              Start Creating Now <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Features for Content Creation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline your content workflow and create
              better content, faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              {
                title: "Lightning Fast",
                description:
                  "Generate high-quality content in seconds, not hours.",
                icon: <Zap className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "AI-Powered",
                description:
                  "Utilizing state-of-the-art language models for the best results.",
                icon: <Sparkles className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Multi-Format",
                description:
                  "Create blog posts, social media content, and more all in one place.",
                icon: <FileText className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Image Generation",
                description:
                  "Turn text prompts into beautiful visuals with our AI models.",
                icon: <ImageIcon className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Personalized Results",
                description:
                  "Customize tone, style, and format to match your brand.",
                icon: <Bot className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Seamless Workflow",
                description: "Edit, save, and export your content with ease.",
                icon: <ArrowRight className="h-8 w-8 text-purple-500" />,
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-purple-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your content creation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Content Type",
                description:
                  "Choose from blog posts, social media, emails, and more.",
              },
              {
                step: "2",
                title: "Describe Your Needs",
                description:
                  "Provide basic details or let our AI guide you through the process.",
              },
              {
                step: "3",
                title: "Generate & Refine",
                description:
                  "Get instant results and easily customize to match your vision.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-lg border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-purple-500-foreground text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of creators, marketers, and businesses using AI
              Content Crafter today.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Get Started Now <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src={"/favicon.png"} alt="logo" width={30} height={30} />
              <span className="font-bold text-xl mx-2">Content Crafter AI</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Content Crafter AI . All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
