
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
    const productCategories = [
      {
        category: "Window Profiles",
        products: [
          {
            title: 'Sliding Window Profiles',
            description: 'Our profiles for sliding windows offer a sleek, modern solution. They are designed for effortless operation and are ideal for spaces with limited clearance, creating a seamless connection between inside and out.',
            image: '/images/sliding-window-2.jpg'
          },
          {
            title: 'Casement Window Profiles',
            description: 'A timeless and elegant choice. Our profiles for casement windows are designed to be hinged on one side and open outward, allowing for excellent ventilation and easy cleaning.',
            image: '/images/casement-window-2.jpg'
          },
          {
            title: 'Combination Window Profiles',
            description: 'Our combination profiles provide a flexible solution, enabling fabricators to create custom window openings by merging various styles, such as casement with fixed windows, in a single installation.',
            image: '/images/combination-window-2.jpg'
          },
        ]
      },
    ];

    const seriesData = [
      { 
        title: "Sliding System - 62 Series - Profiles",
        image: "/images/tech-drawing-1.jpg",
        hint: "technical drawing profiles"
      },
      { 
        title: "Sliding System - 62 Series - Assembly",
        image: "/images/tech-drawing-2.jpg",
        hint: "technical drawing assembly"
      },
      { 
        title: "Casement System - 62 Series - Profiles & Assembly",
        image: "/images/tech-drawing-3.jpg",
        hint: "technical drawing casement"
      },
      { 
        title: "Glazing Options",
        image: "/images/tech-drawing-4.jpg",
        hint: "glazing options"
      },
      { 
        title: "Aluminium Systems",
        image: "/images/tech-drawing-5.jpg",
        hint: "aluminium systems"
      },
      { 
        title: "Auxiliary Systems",
        image: "/images/tech-drawing-6.jpg",
        hint: "auxiliary systems"
      },
    ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="products" className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold">Our uPVC Profile Range</h1>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Explore our comprehensive collection of uPVC profiles for windows and doors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.find(c => c.category === 'Window Profiles')?.products.map((product, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={600}
                          height={400}
                          data-ai-hint={product.title}
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
          </div>
        </section>

        <section id="series" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Technical Specifications & Profiles</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Detailed drawings and specifications for our uPVC systems and profiles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seriesData.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      data-ai-hint={item.hint}
                      className="w-full object-contain"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
