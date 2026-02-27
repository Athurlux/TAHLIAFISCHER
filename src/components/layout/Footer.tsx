import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-bold">All Seated in a Barn</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Equine rescue, sanctuary, and community rehabilitation based in California. Together, we can make a difference in the lives of these magnificent animals.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-60">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/adopt" className="hover:text-primary transition-colors">Lease & Adopt</Link></li>
              <li><Link href="/how-to-help" className="hover:text-primary transition-colors">Community Programs</Link></li>
              <li><Link href="/story" className="hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-60">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>California, USA</li>
              <li>info@tahliafischer.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-60">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Mail className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/10 text-center text-xs opacity-50">
          <p>© {new Date().getFullYear()} All Seated in a Barn. All rights reserved. 501(c)(3) Non-profit Organization.</p>
        </div>
      </div>
    </footer>
  );
}
