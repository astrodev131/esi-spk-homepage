"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Home/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <header
      className="fixed  top-0 w-full  border-b border-gray-800 bg-[#0A0B0D]/80 backdrop-blur-[32px] z-50"
      style={{ boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.15)" }}
    >
      <div className="max-w-[1540px] px-[50px] mt-1 mx-auto flex h-[71px] items-center justify-between">
        <div className="flex items-center gap-[46px]">
          <Link href="/" className="flex h-[20px] min:w-[100px] items-center">
            <Image
              src="/logo.d373024f.png"
              alt="Kaito Logo"
              width={100}
              height={20}
              className="h-[20px] min:w-[100px]"
            />
          </Link>
          <nav className="hidden lg:flex align-middle items-center gap-[26px]">
            {["Portal", "API", "Pricing", "Yaps", "Careers", "EthCC"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-lg text-[#cfcfcf] h-[70px] font-semibold hover:text-white transition-colors duration-500 flex items-center
    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-cyancolor before:transition-all before:duration-[1500ms] before:ease-in-out
    hover:before:w-full
    ${selectedItem === item ? "border-b-2 border-cyancolor text-white" : ""}
  `}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex flex-col">
                    <div className="group">
                      <div className="block group-hover:opacity-0 group-hover:mb-7 duration-500">
                        {item}
                      </div>
                      <div className="opacity-0 absolute group-hover:opacity-100 group-hover:bottom-6 bottom-0 group-hover:block transition-all duration-500 ease-in-out">
                        {item}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex justify-end items-center gap-2 max-w-[228px]">
          <Link
            href="#"
            className="hidden lg:block text-lg text-cyancolor hover:text-cyan-400 transition-colors"
          >
            <div className="cursor-pointer h-8 px-4 py-[11px] text-lg  rounded justify-center items-center inline-flex">
              <div className="font-semibold leading-tight text-center text-teal-300">
                Sign In
              </div>
            </div>
          </Link>
          <Button
            className="hidden lg:block max-w-[135px] h-[32px]"
            onClick={() => {}}
          >
            <div
              data-sentry-element="Flex"
              data-sentry-source-file="Button.tsx"
              className="css-gmuwbf px-4 font-semibold tracking-wide"
            >
              Contact Sales
            </div>
          </Button>
          <div
            className="lg:hidden"
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

      {mobileMenuOpen && (
        <div className="md:hidden border-t  z-50 h-screen border-gray-800 bg-[#0A0B0D] absolute w-full">
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
                className="block py-2 text-lg text-[#cfcfcf] hover:text-white transition-colors"
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
