"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full border-b border-gray-800 bg-[#0A0B0D]/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.d373024f.png"
              alt="Kaito Logo"
              width={32}
              height={32}
              className="h-[20px] w-[100px]"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {["Portal", "API", "Pricing", "Yaps", "Careers", "EthCC"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden sm:block text-sm text-cyancolor hover:text-cyan-400 transition-colors"
          >
            Sign in
          </Link>
          <Button
            className="hidden sm:block py-1"
            onClick={() => {
              // Add your onClick handler logic here
            }}
          >
            Contact Sales
          </Button>
          <div
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t z-50 h-screen border-gray-800 bg-[#0A0B0D] absolute w-full">
          <nav className="px-4 sm:px-6 lg:px-8 py-4">
            {[
              "Portal",
              "API",
              "Pricing",
              "Yaps",
              "Careers",
              "EthCC",
              "Sign in",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="block py-2 text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
