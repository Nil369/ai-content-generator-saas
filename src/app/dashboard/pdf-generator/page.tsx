"use client";
import React from 'react';
import { FileOutput } from 'lucide-react';

export default function PDFGenerator() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-center">
        <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mb-4">
          <FileOutput className="h-12 w-12 text-white" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-center">PDF Generator</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Create professional PDF documents with AI formatting and styling. This feature will allow you to generate reports, 
        documents, and other PDF materials with intelligent layout and design.
      </p>
      
      <div className="bg-muted p-6 rounded-lg border max-w-2xl mx-auto mt-8">
        <h2 className="font-semibold text-xl mb-4">Coming Soon</h2>
        <p className="text-muted-foreground">
          This feature is currently in development and will be available soon. Check back later!
        </p>
      </div>
    </div>
  );
} 