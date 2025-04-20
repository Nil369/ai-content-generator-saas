"use client";
import { useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import {
  ArrowRight,
  Bot,
  FileText,
  ImageIcon,
  Sparkles,
  Zap,
} from "lucide-react";
import HomeNavbar from "@/components/Navbar";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <HomeNavbar />

      {/* Hero Section with Gemini Effect */}
      <section
        ref={ref}
        className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col justify-between"
      >
        {/* Gemini Effect */}
        <div className="flex-grow">
          <GoogleGeminiEffect
            pathLengths={pathLengths}
            title="AI Content Crafter"
            description="Transform your ideas into brilliant content with AI"
            className="pt-20"
          />
        </div>

        {/* Get Started Button - Always at the bottom */}
        <div className="w-full flex justify-center pb-64 md:pb-12 mt-auto">
          <Link href="/dashboard">
            <HoverBorderGradient
              containerClassName="rounded-full shadow-lg transition-transform transform hover:scale-105"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 sm:space-x-4 px-3 md:px-6 py-2 md:py-3"
            >
              <span className="text-xs md:text-lg lg:text-2xl font-semibold">
                Get Started
              </span>
              <ArrowRight size={20} />
            </HoverBorderGradient>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Content Creation
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your content creation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {[
              {
                step: "1",
                title: "Select Your Content Type",
                description:"Choose from blog posts, social media, emails, and more.",
                img:"/content-type.png"
              },
              {
                step: "2",
                title: "Describe Your Needs",
                description:"Provide basic details or let our AI guide you through the process.",
                img:"/needs.png"
              },
              {
                step: "3",
                title: "Generate & Refine",
                description:"Get instant results and easily customize to match your vision.",
                img:"/generate-refine.webp"
              },
            ].map((item, i) => (
              <CardContainer className="inter-var w-full" key={i}>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full md:w-full lg:w-full h-auto rounded-xl p-4 md:p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    <span className="text-purple-500">Step {item.step}: </span>{item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.img}
                      height="1000"
                      width="1000"
                      className="h-40 md:h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Join thousands of creators, marketers, and businesses using AI
              Content Crafter today.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 hover:bg-purple-700">
                Get Started Now <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
