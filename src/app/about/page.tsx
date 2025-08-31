
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="about" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">About Noaah uPVC</h1>
                        <p className="mt-4 text-muted-foreground">
                            We are a premier uPVC fabrication company, dedicated to crafting top-tier windows and doors. Our experienced team uses state-of-the-art technology and the finest materials to deliver products that enhance the beauty and security of your spaces.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Our commitment to quality and customer satisfaction has made us a trusted name in the industry. We believe in building lasting relationships with our clients through exceptional products and service.
                        </p>
                         <p className="mt-4 text-muted-foreground">
                            At Noaah, we follow a meticulous fabrication process, ensuring every product meets our high standards. From profile cutting and welding to hardware installation and glazing, each step is performed with precision and care. We aim to deliver not just products, but complete solutions that bring comfort and style to your life.
                        </p>
                    </div>
                    <div>
                        <Image 
                            src="https://picsum.photos/600/400?random=11"
                            alt="uPVC window fabrication"
                            width={600}
                            height={400}
                            data-ai-hint="window factory"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
