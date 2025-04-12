import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ActivitySquare, FileText, Image, MessageSquare, Plus, Settings, Zap } from 'lucide-react'
import Link from 'next/link'
import { GradientEffect } from '@/components/ui/gradient-effect'

// Set default theme color to blue
const DEFAULT_THEME_COLOR = 'blue';

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero section with animated effect */}
      <section className="relative rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border shadow-sm">
        <div className="absolute inset-0 overflow-hidden">
          <GradientEffect />
        </div>
        <div className="relative p-12 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to AI Content Crafter</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your creative companion for generating high-quality content with AI
            </p>
            <Link href="/content-writer">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Plus size={18} />
                Create New Content
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick access tools grid */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Quick Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <Link href="/content-writer">
            <div className="group relative h-48 overflow-hidden rounded-xl border bg-background p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="absolute bottom-0 right-0 top-0 w-1/2 bg-gradient-to-br from-primary/5 to-primary/30 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Content Writer</h3>
                  <p className="text-muted-foreground">Write blogs, articles, and more with AI assistance</p>
                </div>
                <div className="flex items-center text-sm text-primary">
                  <span>Get started</span>
                  <Zap className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/image-generator">
            <div className="group relative h-48 overflow-hidden rounded-xl border bg-background p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="absolute bottom-0 right-0 top-0 w-1/2 bg-gradient-to-br from-indigo-500/5 to-indigo-500/30 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500">
                    <Image size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Image Generator</h3>
                  <p className="text-muted-foreground">Create stunning images with AI models</p>
                </div>
                <div className="flex items-center text-sm text-indigo-500">
                  <span>Get started</span>
                  <Zap className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/chat-assistant">
            <div className="group relative h-48 overflow-hidden rounded-xl border bg-background p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="absolute bottom-0 right-0 top-0 w-1/2 bg-gradient-to-br from-purple-500/5 to-purple-500/30 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Chat Assistant</h3>
                  <p className="text-muted-foreground">Get answers and assistance through conversational AI</p>
                </div>
                <div className="flex items-center text-sm text-purple-500">
                  <span>Get started</span>
                  <Zap className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent activity */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <Link href="/analytics" className="text-primary hover:underline text-sm flex items-center gap-1">
            <span>View all</span>
            <ActivitySquare size={14} />
          </Link>
        </div>
        
        <div className="rounded-xl border bg-card text-card-foreground">
          <div className="p-6">
            <div className="flex flex-col space-y-4">
              {/* Activity items */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {i === 0 && <FileText size={16} className="text-primary" />}
                    {i === 1 && <Image size={16} className="text-indigo-500" />}
                    {i === 2 && <MessageSquare size={16} className="text-purple-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">
                      {i === 0 && "Blog post about AI technology"}
                      {i === 1 && "Generated header image"}
                      {i === 2 && "Chat session about marketing strategy"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {i === 0 && "Created 2 hours ago"}
                      {i === 1 && "Created yesterday"}
                      {i === 2 && "Created 3 days ago"}
                    </p>
                  </div>
                  <button className="w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center">
                    <Settings size={14} className="text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
