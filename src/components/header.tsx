import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ship } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Ship className="h-6 w-6" />
          Noaah Tech
        </Link>
        <nav className="hidden md:flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#products">Products</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        <Button asChild>
          <Link href="#contact">Inquire Now</Link>
        </Button>
      </div>
    </header>
  );
}
