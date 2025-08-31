
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image 
                src="https://picsum.photos/1200/800"
                alt="Modern home with large uPVC windows"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="modern home"
                className="brightness-75"
            />
            <div className="relative z-20 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Quality uPVC Windows & Doors
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
                Noaah specializes in the fabrication of high-quality uPVC products, offering durability, style, and energy efficiency.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/products">View Products</Link>
                </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
