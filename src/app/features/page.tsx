
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShieldCheck, Rows, Zap, Award, CheckCircle, Grill, GitBranch, Layers } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Rows className="h-10 w-10 text-primary" />,
      title: 'Wide Range',
      description: 'Gluven uPVC offers a diverse range of products to cater to various preferences and requirements. Whether customers are seeking traditional or modern designs, different sizes, or specific functionalities, our wide range ensures they find the perfect fit for their needs.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'High-Quality Compound Formulation',
      description: 'We take pride in using only the finest raw materials and employing an advanced compound formulation process. This commitment to quality ensures that Gluven uPVC products deliver exceptional performance and durability over the long term.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: 'In-Built Gasket Systems',
      description: 'Experience superior insulation, noise reduction, and weather resistance with our innovative in-built gasket systems. These systems contribute to a more comfortable and energy-efficient environment indoors.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Shiny Finish',
      description: 'Elevate the visual appeal of your living spaces with our elegant shiny finish. The glossy surface not only adds a touch of sophistication but is also easy to clean and maintain, keeping your uPVC products looking pristine year after year.',
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: '100% Lead-Free',
        description: 'Your health and safety matter to us. Gluven uPVC is crafted without any lead content, ensuring that your well-being and the well-being of your loved ones are always a top priority.',
    },
    {
        icon: <Grill className="h-10 w-10 text-primary" />,
        title: 'Grill Option',
        description: 'Enhance the security and aesthetics of your space with our convenient grill option. Our uPVC products are designed to seamlessly accommodate grills, providing an extra layer of protection while maintaining the beauty of your windows and doors.',
    },
    {
        icon: <GitBranch className="h-10 w-10 text-primary" />,
        title: 'High Impact Resistance',
        description: "Life is unpredictable, but your windows and doors don't have to be. Gluven uPVC boasts exceptional impact resistance, ensuring that your investment remains intact and functional even in the face of accidental impacts.",
    },
    {
        icon: <Layers className="h-10 w-10 text-primary" />,
        title: 'Multiple Laminate Options',
        description: 'Personalize your space to reflect your unique style and taste. With a variety of laminate options to choose from, you can match your Gluven uPVC products seamlessly with your interior or exterior design, creating a harmonious and inviting atmosphere.',
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
