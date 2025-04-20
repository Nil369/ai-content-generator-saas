// app/not-found.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 bg-white dark:bg-black transition-colors">
      <div className="relative w-full h-80 mb-6">
        <Image
          src="/not-found.png"
          alt="404 - Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">
        Oops! Page not found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <Link href="/">
        <Button variant="default" size="lg">Go back to homepage</Button>
      </Link>
    </main>
  );
}
