import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { portfolio } from '@/lib/data';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-primary uppercase">Our Work</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mt-2">
            Designs That Drive Results
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Explore a selection of our high-performing websites and visibility systems that have elevated top real estate brands.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {portfolio.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group border-neutral-800 bg-neutral-900/50">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={item.image}
                            alt={item.title}
                            data-ai-hint={item.hint}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-6">
                            <p className="text-sm font-medium text-primary">{item.category}</p>
                            <h3 className="font-headline text-xl font-bold mt-1">{item.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" variant="link" className="text-primary text-lg">
                <Link href="/case-studies">View All Case Studies &rarr;</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
