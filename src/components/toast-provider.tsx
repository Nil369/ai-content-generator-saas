"use client";

import { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

export function ToastProvider() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Default options for specific types
        success: {
          duration: 3000,
          style: {
            background: isDark ? "#1e293b" : "#ffffff",
            color: isDark ? "#ffffff" : "#1e293b",
            border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
          },
        },
        error: {
          duration: 4000,
          style: {
            background: isDark ? "#1e293b" : "#ffffff",
            color: isDark ? "#ffffff" : "#1e293b",
            border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
          },
        },
        // Default options
        style: {
          background: isDark ? "#1e293b" : "#ffffff",
          color: isDark ? "#ffffff" : "#1e293b",
          border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
          borderRadius: "0.375rem",
          padding: "0.75rem 1rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
      }}
    />
  );
} 