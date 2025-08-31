
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
    const productCategories = [
      {
        category: "Windows",
        products: [
          {
            title: 'Sliding Windows',
            description: 'Sliding windows offer a sleek and modern solution for maximizing natural light and airflow. These windows glide horizontally along a track, making them effortless to operate and ideal for spaces with limited clearance. With a contemporary aesthetic and smooth functionality, sliding windows are a great addition to any home seeking a seamless connection between indoor and outdoor living.',
            image: '/images/sliding-window-2.jpg'
          },
          {
            title: 'Casement Windows',
            description: 'Casement windows are a timeless and elegant choice for your home. These windows are hinged on one side and open outward with a smooth crank mechanism, allowing for excellent ventilation and easy cleaning. Their classic design adds a touch of sophistication to any space, while the energy-efficient features help keep your home comfortable year-round.',
            image: '/images/casement-window-2.jpg'
          },
          {
            title: 'Combination Windows',
            description: 'These windows provide a flexible solution, enabling homeowners and builders to customize window openings to suit their unique requirements. They merge various window styles, such as casement with fixed windows or double-hung with picture windows, resulting in a single installation that enhances both adaptability and visual appeal.',
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
              <h1 className="text-3xl md:text-4xl font-bold">Our Product Range</h1>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Explore our comprehensive collection of uPVC windows, designed to meet your every need.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.find(c => c.category === 'Windows')?.products.map((product, index) => (
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
