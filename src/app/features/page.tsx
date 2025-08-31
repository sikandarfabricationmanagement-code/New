
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShieldCheck, ThermometerSun, Wind, Waves, VolumeX, Leaf } from 'lucide-react';

export default function FeaturesPage() {
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

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="features" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold">Why Choose Our uPVC Products?</h1>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Experience the perfect blend of aesthetics, durability, and performance with our advanced uPVC solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>
      <Footer />
    </div>
  );
}
