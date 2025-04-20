"use client";
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import { GradientEffect } from '@/components/ui/gradient-effect';
import { tools } from '@/constants/ai_tools';

function Dashboard() {

  return (
    <div className="relative min-h-screen">
      {/* Hero section with animated effect */}
      <section className="relative rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border shadow-sm mb-8 md:mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <GradientEffect />
        </div>
        <div className="relative p-6 md:p-12 z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">AI Content Crafter Dashboard</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 md:mb-4">
              Explore our suite of AI-powered tools to create amazing content
            </p>
          </div>
        </div>
      </section>

      {/* 3D Pins Grid for Tools */}
      <div className="py-10 md:py-16 lg:py-20 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 lg:mb-16 text-center">AI Content Generation Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-28 px-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="h-[26rem] w-full flex items-center justify-center">
                <PinContainer
                  title={tool.title}
                  href={tool.href}
                  containerClassName="h-[320px] w-[320px] md:h-[360px] md:w-[360px] lg:h-[380px] lg:w-[380px]"
                >
                  <div
                    className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-full max-w-[24rem] max-h-[24rem]"
                    style={{ background: `radial-gradient(circle at center, ${tool.overlayColor} 0%, transparent 70%)` }}
                  >
                    <div
                      className={`absolute inset-0 opacity-50 bg-gradient-to-br ${tool.color} dark:opacity-50 opacity-70`}
                      style={{ mixBlendMode: 'overlay' }}
                    />

                    <div className="flex flex-col items-center justify-center text-center h-full z-10">
                      <div className="w-36 h-14 md:w-60 md:h-20 rounded-full bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 hover:scale-110 relative z-20">
                        <div className={`w-14 h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                          <Icon className="h-7 md:h-8 w-7 md:w-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold dark:text-white text-black mb-3 drop-shadow-md">{tool.title}</h3>
                      <p className="text-black dark:text-white/80 text-sm md:text-base max-w-[220px] md:max-w-[260px] font-medium drop-shadow-md">{tool.description}</p>
                    </div>
                  </div>
                </PinContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
