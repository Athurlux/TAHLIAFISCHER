"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Lease & Adopt', href: '/adopt' },
  { name: 'How to Help', href: '/how-to-help' },
  { name: 'Our Story', href: '/story' },
  { name: 'Contact', href: '/contact' },
];

const DONATE_URL = "https://www.paypal.com/donate?hosted_button_id=TZQD9JSHGSF6Q";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold tracking-tight text-primary">All Seated in a Barn</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
              <Heart className="mr-2 h-4 w-4" /> Donate
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background p-4 flex flex-col space-y-4 animate-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
              <Heart className="mr-2 h-4 w-4" /> Donate Now
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
