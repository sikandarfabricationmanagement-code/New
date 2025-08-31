
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ShieldCheck, Rows, Zap, Award, CheckCircle, Grill, GitBranch, Layers } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Rows className="h-10 w-10 text-primary" />,
      title: 'Wide Range of Profiles',
      description: 'Noaah uPVC offers a diverse range of profiles to cater to various preferences and requirements for Sliding, Casement, or Combination windows.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'High-Quality Compound Formulation',
      description: 'We use only the finest raw materials and an advanced compound formulation process. This commitment to quality ensures our uPVC profiles deliver exceptional performance and durability.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: 'Designed for In-Built Gasket Systems',
      description: 'Our profiles are engineered for innovative in-built gasket systems, enabling superior insulation, noise reduction, and weather resistance in the final product.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Elegant Shiny Finish',
      description: 'Elevate the visual appeal of any space with our profiles elegant shiny finish. The glossy surface adds a touch of sophistication and is also easy to clean and maintain.',
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: '100% Lead-Free',
        description: 'Your health and safety matter. Our uPVC profiles are crafted without any lead content, ensuring well-being is a top priority.',
    },
    {
        icon: <Grill className="h-10 w-10 text-primary" />,
        title: 'Grill Option Compatibility',
        description: 'Our profiles are designed to seamlessly accommodate grills, providing an extra layer of protection while maintaining the beauty of the windows and doors.',
    },
    {
        icon: <GitBranch className="h-10 w-10 text-primary" />,
        title: 'High Impact Resistance',
        description: "Our uPVC profiles boast exceptional impact resistance, ensuring that your investment remains intact and functional even in the face of accidental impacts.",
    },
    {
        icon: <Layers className="h-10 w-10 text-primary" />,
        title: 'Multiple Laminate Options',
        description: 'Personalize any space with a variety of laminate options for our profiles. Match them seamlessly with any interior or exterior design.',
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="features" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold">Why Choose Our uPVC Profiles?</h1>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Experience the perfect blend of aesthetics, durability, and performance with our advanced uPVC profile solutions.
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
