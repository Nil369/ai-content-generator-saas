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
import {navItems} from "@/constants/navItems"

function HomeNavbar() {
  
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
                <Link href="/dashboard">
                  <NavbarButton variant="primary">Dashboard</NavbarButton>
                </Link>

                <div className="ml-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            ) : (
              // Logged out state
              <>
              <Link href="/sign-in">
                <NavbarButton variant="secondary" >
                  Login
                </NavbarButton>
              </Link>
                
                <Link href="/sign-up">
                <NavbarButton variant="secondary">
                  SignUp
                </NavbarButton>
              </Link>
                
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
