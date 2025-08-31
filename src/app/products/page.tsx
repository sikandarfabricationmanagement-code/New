
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ProductsPage() {
    const products = [
    {
      title: 'uPVC Casement Windows',
      description: 'Classic, elegant, and versatile windows that open outwards. Available in various styles and finishes to suit any home. They offer excellent ventilation and an unobstructed view.',
      image: 'https://picsum.photos/600/401',
      hint: 'casement window'
    },
    {
      title: 'uPVC Sliding Doors',
      description: 'Smooth operation and space-saving design, perfect for patios and balconies. Our sliding doors glide effortlessly and provide a seamless transition between indoors and outdoors.',
      image: 'https://picsum.photos/601/400',
      hint: 'sliding door'
    },
    {
      title: 'uPVC Tilt & Turn Windows',
      description: 'Dual-functionality for secure ventilation and easy cleaning. Tilt them for gentle airflow or turn them for full opening. An ideal solution for modern homes.',
      image: 'https://picsum.photos/600/402',
      hint: 'tilt turn window'
    },
    {
      title: 'uPVC French Doors',
      description: 'Add a touch of class and open up your space with timeless elegance. Our French doors are perfect for creating a grand entrance to your garden or patio.',
      image: 'https://picsum.photos/602/400',
      hint: 'french doors'
    },
    {
      title: 'uPVC Ventilators',
      description: 'Perfect for bathrooms and kitchens, providing essential ventilation while maintaining security. They are designed to prevent moisture buildup and keep your spaces fresh.',
      image: 'https://picsum.photos/601/401',
      hint: 'bathroom window'
    },
    {
      title: 'uPVC Fixed Windows',
      description: 'Also known as picture windows, these are stationary and do not open. They are perfect for areas where you want to maximize natural light and enjoy an unobstructed view.',
      image: 'https://picsum.photos/602/402',
      hint: 'picture window'
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
