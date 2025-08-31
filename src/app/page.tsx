import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Cpu, Lightbulb, Mail, MapPin, Phone, ShieldCheck, Award, Building } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InquiryForm } from '@/components/inquiry-form';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Robust Security',
      description: 'Enterprise-grade security protocols to protect your data and ensure privacy at all levels of operation.',
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: 'High Performance',
      description: 'Optimized infrastructure for lightning-fast processing, delivering a seamless and responsive user experience.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches to solve complex problems and drive your business forward.',
    },
  ];

  const products = [
    {
      title: 'Quantum Processor',
      description: 'Next-gen computing power.',
      image: 'https://placehold.co/600x400.png',
      hint: 'circuit board'
    },
    {
      title: 'Aura Data Cloud',
      description: 'Secure and scalable data storage.',
      image: 'https://placehold.co/600x400.png',
      hint: 'cloud network'
    },
    {
      title: 'Synapse AI',
      description: 'Advanced machine learning platform.',
      image: 'https://placehold.co/600x400.png',
      hint: 'abstract shapes'
    },
    {
      title: 'Nexus Connect',
      description: 'Seamless API integration tool.',
      image: 'https://placehold.co/600x400.png',
      hint: 'data visualization'
    },
    {
      title: 'Visionary OS',
      description: 'An intuitive operating system.',
      image: 'https://placehold.co/600x400.png',
      hint: 'software interface'
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
              Engineering the Future of Technology
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Noaah Tech provides innovative and reliable solutions to navigate the complexities of the digital world.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">About Noaah Tech</h2>
                        <p className="mt-4 text-muted-foreground">
                            We are a technology company dedicated to creating innovative solutions for a new era. Our team of experts is passionate about pushing the boundaries of what's possible and delivering products that make a difference.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            From high-performance computing to secure data clouds, we are committed to excellence in every aspect of our work.
                        </p>
                    </div>
                    <div>
                        <Image 
                            src="https://picsum.photos/600/400"
                            alt="About Us"
                            width={600}
                            height={400}
                            data-ai-hint="team collaboration"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>


        {/* Feature Blocks Section */}
        <section id="features" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Noaah Tech?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                We are committed to excellence, innovation, and customer success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section id="products" className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Flagship Products</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Discover our suite of products designed for performance and reliability.
              </p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={400}
                            data-ai-hint={product.hint}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="mt-2 text-muted-foreground">{product.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
        
        {/* Certificates Section */}
        <section id="certificates" className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Certifications</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                        We adhere to the highest industry standards.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Card className="max-w-md text-center shadow-md">
                         <CardHeader className="items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <Award className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="mt-4">ISO 9001:2015 Certified</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Our commitment to quality management is recognized with this international standard.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Infrastructure Section */}
        <section id="infrastructure" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Infrastructure</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                        State-of-the-art facilities to power our innovations.
                    </p>
                </div>
                 <div className="flex justify-center">
                    <Card className="max-w-md text-center shadow-md">
                         <CardHeader className="items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <Building className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="mt-4">World-Class Data Centers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Secure, reliable, and scalable data centers ensuring 99.99% uptime for all our services.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Contact and Inquiry Section */}
        <section id="contact" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                  <p className="mt-3 text-muted-foreground">
                    We're here to help. Reach out to us for any inquiries or to start a project.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">Our support team is available 24/7.</p>
                      <a href="tel:+1(555)123-4567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">We aim to respond to all emails within one business day.</p>
                      <a href="mailto:contact@noaahtech.com" className="text-primary hover:underline">contact@noaahtech.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office</h3>
                      <p className="text-muted-foreground">Visit us at our headquarters.</p>
                      <p className="text-primary">123 Innovation Drive, Tech City, 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <InquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
