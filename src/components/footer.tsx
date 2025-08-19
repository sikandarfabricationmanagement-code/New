"use client";

import Link from 'next/link';
import { Ship } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This check is to prevent a hydration mismatch.
    // The server will render the initial state, and the client will update it after mounting.
    if (currentYear !== new Date().getFullYear()) {
      setCurrentYear(new Date().getFullYear());
    }
  }, [currentYear]);

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Ship className="h-6 w-6" />
          Noaah Tech
        </Link>
        <p className="text-sm text-muted-foreground text-center">
          &copy; {currentYear} Noaah Tech. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
