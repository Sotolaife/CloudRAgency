import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
          Elevate Your<br/>
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300"
          >
            Real Estate Brand
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-neutral-300">
          We build high-converting websites and visibility systems that attract qualified leads and establish you as the market authority.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:shadow-[0_0_25px_theme(colors.primary)] transition-all duration-300"
          >
            <Link href="#contact">Book Your Strategy Call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#services" aria-label="Scroll to next section">
          <ArrowDown className="h-8 w-8 text-white/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
