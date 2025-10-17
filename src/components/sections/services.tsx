import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-primary uppercase">Our Services</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mt-2">
            Your All-in-One Digital Marketing Partner
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            From stunning web design to targeted lead generation, we provide the complete toolkit to dominate your market.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-neutral-900/50 border-neutral-800 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20"
            >
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full inline-flex border-2 border-primary/20">
                    <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
