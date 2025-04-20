"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomeNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, FileText, Code, Server, Smartphone, Globe } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "Frontend Development", icon: <Code className="h-6 w-6 text-purple-500" /> },
    { name: "Backend Development", icon: <Server className="h-6 w-6 text-purple-500" /> },
    { name: "Mobile App Development", icon: <Smartphone className="h-6 w-6 text-purple-500" /> },
    { name: "UI/UX Design", icon: <FileText className="h-6 w-6 text-purple-500" /> },
  ];

  const socialLinks = [
    { icon: <GithubIcon className="h-6 w-6" />, href: "https://github.com/Nil369" },
    { icon: <LinkedinIcon className="h-6 w-6" />, href: "https://www.linkedin.com/in/akash-halder-nil/" },
    { icon: <Globe className="h-6 w-6" />, href: "https://akash-halder-portfolio.vercel.app/" },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <HomeNavbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Akash Halder</h1>
              <h2 className="text-2xl md:text-3xl text-purple-500 font-semibold mb-6">Full Stack Developer</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A passionate and experienced Full Stack Developer with expertise in creating modern web applications.
                Skilled in React, Next.js, Node.js, and various web technologies to build solutions that solve real-world problems.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-purple-500/20 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black/20 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src="/akash.jpg" 
                      height={400}
                      width={400}
                      className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Akash Halder"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-purple-500"></span>
          </h2>
          <div className="text-lg space-y-6 text-muted-foreground">
            <p>
              I am a full-stack developer with a passion for creating powerful, responsive, and user-friendly web applications.
              With several years of experience in web development, I've worked on a variety of projects from small business websites
              to complex enterprise applications.
            </p>
            <p>
              My journey in tech started with a deep curiosity about how websites work. This led me to pursue Computer Science
              and dive deep into programming languages and frameworks.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
              and sharing my knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 inline-block relative">
            Skills & Expertise
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-purple-500"></span>
          </h2>
          
          {/* Main skills with icons */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-purple-500">Core Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="bg-gradient-to-br from-muted/30 to-muted/10 dark:from-black/40 dark:to-black/20 border border-black/5 dark:border-white/10 rounded-lg py-4 px-2 h-full flex flex-col items-center text-center transition-transform transform hover:scale-105">
                  <div className="mb-3 p-3 rounded-full bg-purple-500/10 dark:bg-purple-500/20">
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-1">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Technical skills grid */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-purple-500">Technologies & Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {[
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "TypeScript", level: 85 },
                { name: "JavaScript", level: 90 },
                { name: "MongoDB", level: 75 },
                { name: "Express", level: 80 },
                { name: "Redux", level: 75 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Firebase", level: 70 },
                { name: "GraphQL", level: 65 },
                { name: "PostgreSQL", level: 70 }
              ].map((tech, i) => (
                <div key={i} className="group">
                  <div
                    className="p-5 h-full flex flex-col justify-between bg-muted/10 dark:bg-black/20 rounded-lg hover:bg-purple-500/5 dark:hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <div className="text-center mb-3">
                      <span className="font-medium text-base">{tech.name}</span>
                    </div>
                    <div className="w-full bg-muted/30 dark:bg-white/10 rounded-full h-2 mt-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-500 ease-out group-hover:opacity-80"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 inline-block relative">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-purple-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black/20 dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mb-2">
                  Content Crafter AI
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm dark:text-neutral-300 mb-4">
                  An AI-powered content generation platform that helps users create high-quality blog posts, social media content, and more.
                </CardItem>
                <CardItem translateZ="100" className="w-full mb-4">
                  <Image
                    src="/content-type.png"
                    height={400}
                    width={700}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Content Crafter AI"
                  />
                </CardItem>
                <CardItem translateZ="50" className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard">View Project</Link>
                  </Button>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black/20 dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mb-2">
                  Personal Portfolio
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm dark:text-neutral-300 mb-4">
                  A personal portfolio website showcasing my skills, projects, and experience as a full-stack developer.
                </CardItem>
                <CardItem translateZ="100" className="w-full mb-4">
                  <Image
                    src="/generate-refine.webp"
                    height={400}
                    width={700}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Portfolio Website"
                  />
                </CardItem>
                <CardItem translateZ="50" className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://akash-halder-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 