import {
  Home,
  PenTool,
  Image,
  FileText,
  Settings,
  BarChart3,
  CreditCard,
  Clock,
  MessageSquare
} from "lucide-react";

// Define the route type
export interface AppRoute {
  icon: any;
  label: string;
  href: string;
  description?: string;
}

// Export the routes that match the SideNav menuItems
export const APP_ROUTES: AppRoute[] = [
  { 
    icon: Home, 
    label: "Dashboard", 
    href: "/dashboard",
    description: "Overview of your AI content generation activities"
  },
  { 
    icon: PenTool, 
    label: "Content Writer", 
    href: "/dashboard/content-writer",
    description: "Generate blog posts, articles, and other written content"
  },
  { 
    icon: Image, 
    label: "Image Generator", 
    href: "/dashboard/image-generator",
    description: "Create custom images using AI"
  },
  { 
    icon: MessageSquare, 
    label: "Chat Assistant", 
    href: "/dashboard/chat-assistant",
    description: "Get help from our AI assistant"
  },
  { 
    icon: Clock, 
    label: "History", 
    href: "/dashboard/history",
    description: "View your generation history"
  },
  { 
    icon: CreditCard, 
    label: "Billing", 
    href: "/dashboard/billing",
    description: "Manage your subscription and payment methods"
  },
  { 
    icon: BarChart3, 
    label: "Analytics", 
    href: "/dashboard/analytics",
    description: "View usage statistics and analytics"
  },
  { 
    icon: Settings, 
    label: "Settings", 
    href: "/dashboard/settings",
    description: "Configure your account settings"
  },
]; 