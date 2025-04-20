"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { globeConfig, sampleArcs } from "@/constants/globe_config";
import HomeNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

function ContactPage() {
  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-screen p-14 md:p-20 gap-16 overflow-hidden">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 text-center md:text-left">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-black dark:text-white">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-black dark:text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-black dark:text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                className="mt-1 min-h-[30vh] md:min-h-[15vw]"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Globe */}
        <div className="w-full md:w-1/2 relative h-[15rem] md:h-[35rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4 px-2"
          >
            <h2 className="hidden md:block text-xl md:text-3xl font-bold text-black dark:text-white">
              Wherever you are in the world, your message matters.
            </h2>
            <p className="hidden md:block text-sm md:text-lg text-neutral-700 dark:text-neutral-200 mt-2 max-w-md mx-auto">
              Reach out — we&apos;re just one form away from turning ideas into conversations. 🌍
            </p>
          </motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none" />
          <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ContactPage;
