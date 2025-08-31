
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
            image: 'data:image/jpeg;base64,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'>
          },
          {
            title: 'Casement Windows',
            description: 'Casement windows are a timeless and elegant choice for your home. These windows are hinged on one side and open outward with a smooth crank mechanism, allowing for excellent ventilation and easy cleaning. Their classic design adds a touch of sophistication to any space, while the energy-efficient features help keep your home comfortable year-round.',
            image: 'https://picsum.photos/600/400?random=1',
            hint: 'casement window'
          },
        ]
      },
      {
        category: "Doors",
        products: [
           {
            title: 'uPVC Sliding Doors',
            description: 'Smooth operation and space-saving design, perfect for patios and balconies. Our sliding doors glide effortlessly and provide a seamless transition between indoors and outdoors.',
            image: 'https://picsum.photos/600/400?random=2',
            hint: 'sliding door'
          },
        ]
      }
    ];

    const seriesData = [
      { 
        title: "Sliding System - 62 Series - Profiles",
        image: "https://picsum.photos/800/600?random=31",
        hint: "technical drawing profiles"
      },
      { 
        title: "Sliding System - 62 Series - Assembly Drawings",
        image: "https://picsum.photos/800/600?random=32",
        hint: "technical drawing assembly"
      },
      { 
        title: "Casement System - 62 Series - Profiles & Assembly",
        image: "https://picsum.photos/800/600?random=33",
        hint: "technical drawing casement"
      },
      { 
        title: "Glazing Options",
        image: "https://picsum.photos/800/600?random=34",
        hint: "glazing options"
      },
      { 
        title: "Aluminium Systems",
        image: "https://picsum.photos/800/600?random=35",
        hint: "aluminium systems"
      },
      { 
        title: "Auxiliary Systems",
        image: "https://picsum.photos/800/600?random=36",
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
                Explore our comprehensive collection of uPVC windows and doors, designed to meet your every need.
              </p>
            </div>
            <Tabs defaultValue="windows" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="windows">Windows</TabsTrigger>
                <TabsTrigger value="doors">Doors</TabsTrigger>
              </TabsList>
              <TabsContent value="windows">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {productCategories.find(c => c.category === 'Windows')?.products.map((product, index) => (
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
              </TabsContent>
              <TabsContent value="doors">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {productCategories.find(c => c.category === 'Doors')?.products.map((product, index) => (
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="series" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Technical Specifications</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Detailed drawings and specifications for our uPVC systems.
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
