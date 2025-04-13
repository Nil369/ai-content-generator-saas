"use client";
import React, { useState, useEffect } from 'react';
import { SideNav } from '@/components/layout/SideNav'
import { UserButton } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import {Search, Sidebar, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { APP_ROUTES } from '@/constants/navigation';
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

// Theme options with their color values
const THEME_COLORS = {
  zinc: {
    light: "light",
    dark: "dark",
    primary: "hsl(240 3.7% 44.1%)" // zinc
  },
  slate: {
    light: "light",
    dark: "dark", 
    primary: "hsl(215.4 16.3% 46.9%)" // slate
  },
  stone: {
    light: "light",
    dark: "dark",
    primary: "hsl(25 5.3% 44.7%)" // stone
  },
  gray: {
    light: "light",
    dark: "dark",
    primary: "hsl(220 8.9% 46.1%)" // gray
  },
  neutral: {
    light: "light",
    dark: "dark",
    primary: "hsl(0 0% 45.1%)" // neutral
  },
  red: {
    light: "light",
    dark: "dark",
    primary: "hsl(0 84.2% 60.2%)" // red
  },
  rose: {
    light: "light",
    dark: "dark",
    primary: "hsl(346.8 77.2% 49.8%)" // rose
  },
  blue: {
    light: "light",
    dark: "dark",
    primary: "hsl(217.2 91.2% 59.8%)" // blue
  },
  green: {
    light: "light",
    dark: "dark",
    primary: "hsl(142.1 76.2% 36.3%)" // green
  },
  purple: {
    light: "light",
    dark: "dark",
    primary: "hsl(250 95.2% 51.6%)" // violet/purple
  },
};

// Get the theme color from localStorage or default to "purple"
function getStoredThemeColor() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme-color') || 'purple';
  }
  return 'purple';
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();
  const [themeColor, setThemeColor] = useState(getStoredThemeColor()); // Set default theme color to purple
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const pathname = usePathname();

  // Initialize theme color from localStorage on mount
  useEffect(() => {
    const savedColor = localStorage.getItem('theme-color') || 'purple';
    setThemeColor(savedColor);
    
    // Apply the theme class immediately
    document.documentElement.classList.forEach(className => {
      if (className.match(/^theme-/)) {
        document.documentElement.classList.remove(className);
      }
    });
    document.documentElement.classList.add(`theme-${savedColor}`);
  }, []);

  // Set the theme color on the document root when it changes
  useEffect(() => {
    document.documentElement.classList.forEach(className => {
      if (className.match(/^theme-/)) {
        document.documentElement.classList.remove(className);
      }
    });
    document.documentElement.classList.add(`theme-${themeColor}`);
    
    // Update the theme color on the dashboard container as well
    const dashboardContainer = document.querySelector('.min-h-screen');
    if (dashboardContainer) {
      dashboardContainer.classList.forEach(className => {
        if (className.match(/^theme-/)) {
          dashboardContainer.classList.remove(className);
        }
      });
      dashboardContainer.classList.add(`theme-${themeColor}`);
    }
    
    // Save the theme color to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-color', themeColor);
    }
  }, [themeColor]);

  // Handle mounting state for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect to close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      
      if (
        sidebar && 
        !sidebar.contains(event.target as Node) && 
        menuButton && 
        !menuButton.contains(event.target as Node) &&
        window.innerWidth < 1024 &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Set page title based on current route
  useEffect(() => {
    const currentRoute = APP_ROUTES.find((route: { href: string; label: string }) => route.href === pathname);
    if (currentRoute) {
      setPageTitle(currentRoute.label);
    } else {
      setPageTitle("AI Content Crafter");
    }
  }, [pathname]);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <div className={`flex min-h-screen bg-muted/30 theme-${themeColor}`} data-theme-color={themeColor} data-theme-value={themeColor}>
      {/* Sidebar */}
      <div id="sidebar" className={`z-40 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <SideNav 
          onClose={() => setIsSidebarOpen(false)} 
          isOpen={isSidebarOpen} 
        />
      </div>

      {/* Mobile overlay when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen w-full lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 sm:px-6 backdrop-blur">
          <div className="flex items-center gap-2">
            <Button
              id="menu-button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? 
                <ChevronLeft className="h-5 w-5" /> : 
                <Sidebar className="h-5 w-5" />
              }
            </Button>
            <h1 className="text-lg font-bold sm:text-xl">{pageTitle}</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8 bg-background"
              />
            </div>
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6">
          <Suspense
            fallback={
              <div className="grid gap-4">
                <Card className="p-4">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-32 w-full mt-4" />
                </Card>
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}
