import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import InquiryModal from "./InquiryModal";

/**
 * Navigation Component
 * Design System: Modern Minimalist + Corporate Precision
 * Sticky header with responsive mobile menu
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="src="/__manus__/storage/logo.png"" alt="FCAPS Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                isActive(item.href)
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white" 
            style={{backgroundColor: '#de1717'}}
            onClick={() => setInquiryOpen(true)}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-white font-semibold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                setInquiryOpen(true);
                setIsOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
      
      {/* Inquiry Modal */}
      <InquiryModal 
        open={inquiryOpen} 
        onOpenChange={setInquiryOpen}
        serviceType="General Inquiry"
      />
    </nav>
  );
}
