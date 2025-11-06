"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo - Now clickable with link to homepage */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="flex items-center"
              onClick={() => setActiveLink("Home")}
            >
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/logo.png"
                  alt="GrowTrack Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-gray-900 font-bold text-xl">GrowTrack</span>
            </a>
          </div>

          {/* Desktop Navigation - Show on xl screens and above */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeLink === item.name
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* CTA Button - Made slightly larger with increased padding */}
            <a
              href="#ready-to-build-better-habits"
              onClick={() => setActiveLink("Ready to build")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              Download Now
            </a>
          </div>

          {/* Show hamburger menu for tablet and mobile (768px and below) */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === item.name
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a
                href="#ready-to-build-better-habits"
                onClick={() => {
                  setActiveLink("Ready to build");
                  setIsOpen(false); // Added this line to close the menu
                }}
                className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium text-center"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
