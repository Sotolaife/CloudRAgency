import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, StarHalf } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-primary uppercase">Social Proof</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mt-2">
            Trusted by Top-Performing Agents
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Hear what our clients have to say about their experience and the results we've delivered.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full bg-neutral-900/50 border-neutral-800 p-6 flex flex-col justify-between shadow-lg">
                        <div>
                            <div className="flex text-primary mb-4">
                                <Star className="fill-current" />
                                <Star className="fill-current" />
                                <Star className="fill-current" />
                                <Star className="fill-current" />
                                <Star className="fill-current" />
                            </div>
                            <blockquote className="text-lg italic text-neutral-200">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
                        </div>
                      <CardContent className="p-0 mt-6">
                        <div className="flex items-center">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            data-ai-hint={testimonial.hint}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                          <div className="ml-4">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sm text-neutral-400">{testimonial.title}</p>
                          </div>
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
      </div>
    </section>
  );
}
