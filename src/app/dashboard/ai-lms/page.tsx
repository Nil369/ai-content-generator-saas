"use client";
import React from 'react';
import { Video } from 'lucide-react';

export default function VideoCreator() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-center">
        <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
          <Video className="h-12 w-12 text-white" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-center">Video Creator</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Generate course content with video with AI-powered tools. Transform your ideas into engaging 
        learning experience without enrolling into any other course.
      </p>

      <strong className="block text-lg font-semibold mb-2 text-center">Features:</strong>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto dark:text-black">
        <li className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg shadow-md text-center">
          Generate AI Course content, code examples
        </li>
        <li className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg shadow-md text-center">
          Videos through Youtube
        </li>
        <li className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg shadow-md text-center">
          Well Structured course
        </li>
        <li className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg shadow-md text-center">
          Flash cards
        </li>
        <li className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg shadow-md text-center">
          Quiz
        </li>
        <li className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg shadow-md text-center">
          Test
        </li>
      </ul>

      
      <div className="bg-muted p-6 rounded-lg border max-w-2xl mx-auto mt-8">
        <h2 className="font-semibold text-xl mb-4">Coming Soon</h2>
        <p className="text-muted-foreground">
          This feature is currently in development and will be available soon. Check back later!
        </p>
      </div>
    </div>
  );
} 