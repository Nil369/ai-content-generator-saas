"use client"
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  PenTool,
  FileText,
  Settings,
  BarChart3,
  CreditCard,
  Clock,
  MessageSquare,
  X,
  ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: PenTool, label: "Content Writer", href: "/dashboard/content-writer" },
  { icon: ImageIcon, label: "Image Generator", href: "/dashboard/image-generator" },
  { icon: MessageSquare, label: "Chat Assistant", href: "/dashboard/chat-assistant" },
  { icon: Clock, label: "History", href: "/dashboard/history" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

interface SideNavProps {
  onClose?: () => void;
  isOpen?: boolean;
}

export function SideNav({ onClose, isOpen }: SideNavProps) {
  const pathname = usePathname();

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 w-64 bg-background border-r p-4 flex flex-col gap-4 z-40 shadow-lg lg:shadow-none",
      "transition-transform duration-300 ease-in-out",
      "lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex items-center justify-between px-2 py-2 md:py-4">
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
          <span className="font-bold text-lg sm:text-xl">AI Crafter</span> */}
          <Image src="/logo.png" alt="logo" width={200} height={200}/>
        </div>
        
        {/* Close button - only shown on mobile */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden" 
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-thin">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group relative text-sm",
                isActive ? "text-primary bg-primary/10" : "hover:bg-muted"
              )}
              onClick={() => {
                if (onClose && window.innerWidth < 1024) {
                  onClose();
                }
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <item.icon className="w-4 h-4 min-w-4" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t pt-4 mt-auto">
        <div className="flex items-center gap-3 px-3">
          <UserButton afterSignOutUrl="/" />
          <span className="text-sm truncate">Account</span>
        </div>
      </div>
    </div>
  );
} 