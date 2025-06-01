import type { Metadata } from "next";
import { Reddit_Sans, Reddit_Mono } from "next/font/google";
import "./globals.css";
import "../styles/theme-colors.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/toast-provider";
import { dark, shadesOfPurple } from "@clerk/themes";

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
});

const reditMono = Reddit_Mono({
  variable: "--font-reddit-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Content Crafter AI",
  description: "Fueling Brands with Words That Work.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const theme = useTheme()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${redditSans.variable} ${reditMono.variable} antialiased theme-purple`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        // disableTransitionOnChange
        // storageKey="ai-content-crafter-theme"
        >
          <ClerkProvider
            appearance={
              {
                baseTheme: undefined,

                signIn: {
                  baseTheme: dark,
                },

                signUp: {
                  baseTheme: dark,
                },

                userProfile: {
                  baseTheme: undefined,
                },
                userButton: {
                  baseTheme: undefined,
                },
              }}
          >
            {children}
            <ToastProvider />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
