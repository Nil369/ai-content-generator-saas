"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ThemeToggle } from "./layout/ThemeToggle";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";

function HomeNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Pricing",
      link: "/#pricing",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="relative w-full mt-5">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {isLoaded && isSignedIn ? (
              // Logged in state
              <>
                <NavbarButton variant="secondary" href="/dashboard">Dashboard</NavbarButton>
                <div className="ml-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            ) : (
              // Logged out state
              <>
                <NavbarButton variant="secondary" href="/sign-in">Login</NavbarButton>
                <NavbarButton variant="primary" href="/sign-up">SignUp</NavbarButton>
              </>
            )}
            <NavbarButton variant="secondary" as="div">
              <ThemeToggle />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {isLoaded && isSignedIn ? (
                // Logged in state - mobile
                <>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                    href="/dashboard"
                  >
                    Dashboard
                  </NavbarButton>
                  <div className="flex justify-center my-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                // Logged out state - mobile
                <>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                    href="/sign-in"
                  >
                    Login
                  </NavbarButton>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                    href="/sign-up"
                  >
                    SignUp
                  </NavbarButton>
                </>
              )}
              <ThemeToggle />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;
