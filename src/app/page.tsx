
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckSquare, Factory, ShieldCheck, ThermometerSun, Wind, Waves, VolumeX, Leaf, Building, GanttChartSquare, PackageCheck, Mail, MapPin, Phone } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry-form';


export default function Home() {

  const features = [
    {
      icon: <Wind className="h-10 w-10 text-primary" />,
      title: 'Durable & Weather-Resistant',
      description: 'Our uPVC profiles are built to withstand harsh weather conditions, from scorching sun to heavy rain, ensuring longevity and performance without fading, warping, or cracking.',
    },
    {
      icon: <ThermometerSun className="h-10 w-10 text-primary" />,
      title: 'Energy Efficient',
      description: 'Excellent thermal insulation properties help maintain a consistent indoor temperature, reducing your reliance on heating and cooling systems and lowering energy costs.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Enhanced Security',
      description: 'Fitted with multi-point locking systems and reinforced frames, our products provide superior security for your peace of mind, protecting your home and family.',
    },
    {
      icon: <VolumeX className="h-10 w-10 text-primary" />,
      title: 'Sound Insulation',
      description: 'The multi-chambered design of our uPVC profiles, combined with double or triple glazing, significantly reduces outside noise, creating a quieter and more peaceful indoor environment.',
    },
    {
        icon: <Waves className="h-10 w-10 text-primary" />,
        title: 'Water Resistance',
        description: 'Engineered with advanced drainage systems, our uPVC windows and doors offer excellent protection against water leakage, keeping your home dry even during heavy downpours.',
    },
    {
        icon: <Leaf className="h-10 w-10 text-primary" />,
        title: 'Eco-Friendly Material',
        description: 'uPVC is a recyclable material that requires less energy to produce than other options. Choosing our products is a step towards a more sustainable and environmentally friendly home.',
    }
  ];

  const products = [
    {
      title: 'uPVC Casement Windows',
      description: 'Classic, elegant, and versatile windows that open outwards. Available in various styles and finishes to suit any home. They offer excellent ventilation and an unobstructed view.',
      image: 'https://picsum.photos/600/400?random=1',
      hint: 'casement window'
    },
    {
      title: 'uPVC Sliding Doors',
      description: 'Smooth operation and space-saving design, perfect for patios and balconies. Our sliding doors glide effortlessly and provide a seamless transition between indoors and outdoors.',
      image: 'https://picsum.photos/600/400?random=2',
      hint: 'sliding door'
    },
    {
      title: 'uPVC Tilt & Turn Windows',
      description: 'Dual-functionality for secure ventilation and easy cleaning. Tilt them for gentle airflow or turn them for full opening. An ideal solution for modern homes.',
      image: 'https://picsum.photos/600/400?random=3',
      hint: 'tilt turn window'
    },
    {
      title: 'uPVC French Doors',
      description: 'Add a touch of class and open up your space with timeless elegance. Our French doors are perfect for creating a grand entrance to your garden or patio.',
      image: 'https://picsum.photos/600/400?random=4',
      hint: 'french doors'
    },
    {
      title: 'uPVC Ventilators',
      description: 'Perfect for bathrooms and kitchens, providing essential ventilation while maintaining security. They are designed to prevent moisture buildup and keep your spaces fresh.',
      image: 'https://picsum.photos/600/400?random=5',
      hint: 'bathroom window'
    },
    {
      title: 'uPVC Fixed Windows',
      description: 'Also known as picture windows, these are stationary and do not open. They are perfect for areas where you want to maximize natural light and enjoy an unobstructed view.',
      image: 'https://picsum.photos/600/400?random=6',
      hint: 'picture window'
    },
  ];

  const certificates = [
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: 'ISO 9001:2015 Certified',
        description: 'This certification demonstrates our commitment to quality management systems and our ability to consistently provide products and services that meet customer and regulatory requirements.',
        image: 'https://picsum.photos/400/200?random=11',
        hint: 'certificate document'
    },
    {
        icon: <CheckSquare className="h-10 w-10 text-primary" />,
        title: 'Green Building Council Member',
        description: 'As a member, we are dedicated to sustainable practices and promoting the development of environmentally-friendly buildings. Our uPVC products contribute to green building standards.',
        image: 'https://picsum.photos/400/200?random=12',
        hint: 'eco award'
    },
    {
        icon: <Factory className="h-10 w-10 text-primary" />,
        title: 'National Fenestration Rating Council (NFRC)',
        description: 'Our products are rated and certified by the NFRC for energy performance, giving you reliable information about energy efficiency, including U-factor and Solar Heat Gain Coefficient.',
        image: 'https://picsum.photos/400/200?random=13',
        hint: 'quality seal'
    }
  ];

  const infrastructurePoints = [
    {
        icon: <Building className="h-10 w-10 text-primary" />,
        title: 'State-of-the-Art Facility',
        description: 'Our expansive manufacturing unit is equipped with the latest European machinery, ensuring precision, efficiency, and high-quality output for all our uPVC products.',
        image: 'https://picsum.photos/600/400?random=14',
        hint: 'upvc factory'
    },
    {
        icon: <GanttChartSquare className="h-10 w-10 text-primary" />,
        title: 'Automated Production Line',
        description: 'We utilize a fully automated production line, from cutting and welding to cleaning and glazing. This minimizes human error and guarantees consistent quality across all batches.',
        image: 'https://picsum.photos/600/400?random=15',
        hint: 'window machine'
    },
    {
        icon: <PackageCheck className="h-10 w-10 text-primary" />,
        title: 'Rigorous Quality Control',
        description: 'A dedicated quality control department conducts stringent checks at every stage of the manufacturing process, ensuring that every product leaving our facility meets international standards.',
        image: 'https://picsum.photos/600/400?random=16',
        hint: 'window inspection'
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image 
                src="https://picsum.photos/1200/800?random=10"
                alt="Modern home with large uPVC windows"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="uPVC windows"
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
                    <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/products">View Products</Link>
                </Button>
                </div>
            </div>
        </section>

        {/* About Section */}
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
                         <p className="mt-4 text-muted-foreground">
                            At Noaah, we follow a meticulous fabrication process, ensuring every product meets our high standards. From profile cutting and welding to hardware installation and glazing, each step is performed with precision and care. We aim to deliver not just products, but complete solutions that bring comfort and style to your life.
                        </p>
                    </div>
                    <div>
                        <Image 
                            src="https://picsum.photos/600/400?random=11"
                            alt="uPVC Door"
                            width={600}
                            height={400}
                            data-ai-hint="uPVC door"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Product Range</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Explore our comprehensive collection of uPVC windows and doors, designed to meet your every need.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 3).map((product, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <CardContent className="p-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={400}
                            data-ai-hint={product.hint}
                            className="w-full h-56 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="mt-2 text-muted-foreground">{product.description}</p>
                          </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our uPVC Products?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Experience the perfect blend of aesthetics, durability, and performance with our advanced uPVC solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(0,3).map((feature, index) => (
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
             <div className="text-center mt-12">
              <Button asChild>
                <Link href="/features">Explore All Features</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                <p className="mt-3 text-muted-foreground">
                    Have a question or need a quote? We're here to help.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
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
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
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
