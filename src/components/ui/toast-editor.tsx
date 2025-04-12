"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';

// Dynamically import the Toast UI Editor to avoid SSR issues
const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <div className="h-96 w-full border rounded-md bg-muted animate-pulse"></div>
});

interface ToastEditorProps {
  initialValue?: string;
  height?: string;
  placeholder?: string;
  onChange?: (content: string) => void;
  onSave?: (content: string) => void;
  toolbarItems?: string[][];
}

export function ToastEditor({
  initialValue = '',
  height = '500px',
  placeholder = 'Start writing...',
  onChange,
  onSave,
  toolbarItems,
}: ToastEditorProps) {
  const [mounted, setMounted] = useState(false);
  const editorRef = useRef<any>(null);

  // Save content shortcut (Ctrl+S / Cmd+S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        if (onSave && editorRef.current) {
          const content = editorRef.current.getInstance().getMarkdown();
          onSave(content);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSave]);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // Default toolbar items if not provided
  const defaultToolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ];

  // Handle editor content change
  const handleChange = () => {
    if (onChange && editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      onChange(content);
    }
  };

  if (!mounted) {
    return <div className="h-96 w-full border rounded-md bg-muted animate-pulse"></div>;
  }

  return (
    <div className="toast-ui-editor-container">
      <Editor
        ref={editorRef}
        initialValue={initialValue}
        previewStyle="vertical"
        height={height}
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        hideModeSwitch={false}
        toolbarItems={toolbarItems || defaultToolbarItems}
        placeholder={placeholder}
        onChange={handleChange}
        theme={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
      />
    </div>
  );
}

// Example of a component using the ToastEditor with content saving
export function ContentEditor() {
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSave = async (contentToSave: string) => {
    setIsSaving(true);
    
    try {
      // Mock API call for saving content
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Content saved:', contentToSave);
      
      // Here you would make an actual API call to save the content
      // await apiClient.saveContent(contentToSave);
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Editor</h2>
        <button
          onClick={() => handleSave(content)}
          disabled={isSaving}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 disabled:opacity-70"
        >
          {isSaving ? (
            <>
              <div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"></div>
              Saving...
            </>
          ) : (
            <>Save</>
          )}
        </button>
      </div>
      <ToastEditor 
        initialValue="# Hello, Toast UI Editor!"
        onChange={handleChange}
        onSave={handleSave}
        placeholder="Write your content here..."
      />
    </div>
  );
} 