"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { BUSINESS_INFO, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar with logo and phone - WHITE background */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt={BUSINESS_INFO.name}
              width={150}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Phone CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold text-white font-bold rounded hover:bg-brand-gold-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      {/* Navigation bar - YELLOW/GOLD background */}
      <nav className="bg-brand-gold">
        <div className="container-custom">
          <div className="flex items-center justify-center py-1">
            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="nav-link flex items-center gap-1"
                    onMouseEnter={() =>
                      item.submenu && setOpenSubmenu(item.label)
                    }
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.submenu && openSubmenu === item.label && (
                    <div
                      className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-2 z-50 border border-brand-gold-light"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-green hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
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

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-black/10 max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-1 text-sm text-gray-700"
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
      </nav>
    </header>
  );
}
