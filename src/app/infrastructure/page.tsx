
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Building, GanttChartSquare, PackageCheck } from 'lucide-react';
import Image from 'next/image';

export default function InfrastructurePage() {

    const infrastructurePoints = [
        {
            icon: <Building className="h-10 w-10 text-primary" />,
            title: 'State-of-the-Art Facility',
            description: 'Our expansive manufacturing unit is equipped with the latest European machinery, ensuring precision, efficiency, and high-quality output for all our uPVC products.',
            image: '/images/infrastructure-1.jpg',
            hint: 'upvc factory'
        },
        {
            icon: <GanttChartSquare className="h-10 w-10 text-primary" />,
            title: 'Automated Production Line',
            description: 'We utilize a fully automated production line, from cutting and welding to cleaning and glazing. This minimizes human error and guarantees consistent quality across all batches.',
            image: '/images/infrastructure-2.jpg',
            hint: 'window machine'
        },
        {
            icon: <PackageCheck className="h-10 w-10 text-primary" />,
            title: 'Rigorous Quality Control',
            description: 'A dedicated quality control department conducts stringent checks at every stage of the manufacturing process, ensuring that every product leaving our facility meets international standards.',
            image: '/images/infrastructure-3.jpg',
            hint: 'window inspection'
        }
    ]

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="infrastructure" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold">Our Fabrication Unit</h1>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                        Equipped with modern machinery and skilled personnel for precision engineering and superior craftsmanship.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 gap-12">
                    {infrastructurePoints.map((point, index) => (
                        <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense md:[&>*:last-child]:col-start-1' : ''}`}>
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        {point.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold">{point.title}</h2>
                                </div>
                                <p className="text-muted-foreground">{point.description}</p>
                            </div>
                            <div>
                                <Image
                                    src={point.image}
                                    alt={point.title}
                                    width={600}
                                    height={400}
                                    data-ai-hint={point.hint}
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
