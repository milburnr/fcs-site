"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { BUSINESS_INFO, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "shadow-lg backdrop-blur-md bg-white/95" 
          : "shadow-sm bg-white"
      }`}
    >
      {/* Top bar with logo and phone */}
      <div className={`border-b transition-all duration-300 ${
        scrolled ? "border-gray-200/50" : "border-gray-100"
      }`}>
        <div className="container-custom flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.jpg"
              alt={BUSINESS_INFO.name}
              width={150}
              height={70}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Phone CTA - Premium button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 overflow-hidden font-bold rounded-full transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, #daa520 0%, #b8860b 100%)',
              boxShadow: '0 4px 15px rgba(218, 165, 32, 0.3)',
            }}
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Phone className="w-4 h-4 text-white relative z-10" />
            <span className="text-white relative z-10">{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Navigation bar - Premium gradient */}
      <nav 
        className="relative overflow-visible"
        style={{
          background: 'linear-gradient(135deg, #daa520 0%, #cd9b1d 50%, #b8860b 100%)',
        }}
      >
        {/* Subtle top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        <div className="container-custom">
          <div className="flex items-center justify-center py-1">
            {/* Desktop Navigation - centered with CSS-only dropdowns */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-4 py-2 text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:text-white"
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/20 transition-all duration-300" />
                    {/* Underline effect */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    <span className="relative z-10">{item.label}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>

                  {/* CSS-only Dropdown - uses group-hover */}
                  {item.submenu && (
                    <div
                      className="absolute top-full left-0 w-72 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    >
                      <div 
                        className="bg-white rounded-xl overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200"
                        style={{
                          boxShadow: '0 10px 40px rgba(0,0,0,0.15), 0 2px 10px rgba(0,0,0,0.1)',
                          border: '1px solid rgba(218, 165, 32, 0.2)',
                        }}
                      >
                        {/* Top accent */}
                        <div className="h-1 bg-gradient-to-r from-brand-green via-brand-gold to-brand-green" />
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="group/item relative flex items-center px-5 py-3 text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-green-dark hover:text-white"
                            >
                              {/* Left accent bar on hover */}
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-brand-gold group-hover/item:h-1/2 transition-all duration-300 rounded-r" />
                              <span className="relative z-10 font-medium">{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white rounded-lg hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation - Premium */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mb-1">
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 border-l-2 border-white/30 pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-white/80 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Bottom highlight */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </nav>
    </header>
  );
}
