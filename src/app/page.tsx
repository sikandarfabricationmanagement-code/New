import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Mail, MapPin, Phone, Award, Building, ShieldCheck, ThermometerSun, Wind } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InquiryForm } from '@/components/inquiry-form';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Wind className="h-10 w-10 text-primary" />,
      title: 'Durable & Weather-Resistant',
      description: 'Our uPVC profiles are built to withstand harsh weather conditions, ensuring longevity and performance.',
    },
    {
      icon: <ThermometerSun className="h-10 w-10 text-primary" />,
      title: 'Energy Efficient',
      description: 'Excellent thermal insulation properties help maintain indoor temperature, reducing energy costs.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Enhanced Security',
      description: 'Fitted with multi-point locking systems, our products provide superior security for your peace of mind.',
    },
  ];

  const products = [
    {
      title: 'uPVC Casement Windows',
      description: 'Classic, elegant, and versatile windows.',
      image: 'https://picsum.photos/600/401',
      hint: 'modern window'
    },
    {
      title: 'uPVC Sliding Doors',
      description: 'Smooth operation and space-saving design.',
      image: 'https://picsum.photos/601/400',
      hint: 'patio door'
    },
    {
      title: 'uPVC Tilt & Turn Windows',
      description: 'Dual-functionality for ventilation and cleaning.',
      image: 'https://picsum.photos/600/402',
      hint: 'open window'
    },
    {
      title: 'uPVC French Doors',
      description: 'Add a touch of class and open up your space.',
      image: 'https://picsum.photos/602/400',
      hint: 'glass doors'
    },
    {
      title: 'uPVC Ventilators',
      description: 'Perfect for bathrooms and kitchens.',
      image: 'https://picsum.photos/601/401',
      hint: 'small window'
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
              Quality uPVC Windows & Doors
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Noaah specializes in the fabrication of high-quality uPVC products, offering durability, style, and energy efficiency.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">About Noaah uPVC</h2>
                        <p className="mt-4 text-muted-foreground">
                            We are a premier uPVC fabrication company, dedicated to crafting top-tier windows and doors. Our experienced team uses state-of-the-art technology and the finest materials to deliver products that enhance the beauty and security of your spaces.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Our commitment to quality and customer satisfaction has made us a trusted name in the industry. We believe in building lasting relationships with our clients through exceptional products and service.
                        </p>
                    </div>
                    <div>
                        <Image 
                            src="https://picsum.photos/600/400"
                            alt="Modern house with uPVC windows"
                            width={600}
                            height={400}
                            data-ai-hint="modern house"
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
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our uPVC Products?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Experience the perfect blend of aesthetics, durability, and performance.
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
              <h2 className="text-3xl md:text-4xl font-bold">Our Product Range</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Explore our comprehensive collection of uPVC windows and doors.
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
                    <h2 className="text-3xl md:text-4xl font-bold">Quality Assurance</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                        We adhere to the highest industry standards for quality and safety.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Card className="max-w-md text-center shadow-md">
                         <CardHeader className="items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <Award className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Certified Excellence</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Our products are certified and tested to meet international standards for performance and durability.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Infrastructure Section */}
        <section id="infrastructure" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Fabrication Unit</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                        Equipped with modern machinery for precision engineering.
                    </p>
                </div>
                 <div className="flex justify-center">
                    <Card className="max-w-md text-center shadow-md">
                         <CardHeader className="items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <Building className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="mt-4">State-of-the-Art Facility</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Our advanced fabrication unit ensures every product is crafted with precision and care.</p>
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
                    Have a question or need a quote? We're here to help.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">Speak to our uPVC experts today.</p>
                      <a href="tel:+1(555)123-4567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">Send us your requirements and we'll get back to you.</p>
                      <a href="mailto:sales@noaahupvc.com" className="text-primary hover:underline">sales@noaahupvc.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office & Showroom</h3>
                      <p className="text-muted-foreground">Visit us to see our products.</p>
                      <p className="text-primary">123 Fabrication Way, Industrial Park, 12345</p>
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
