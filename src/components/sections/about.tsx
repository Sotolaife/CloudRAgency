import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-team');

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-primary uppercase">Our Mission</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                More Than a Website. <br />A Growth Engine.
              </h2>
            </div>
            <div className="space-y-4 text-lg text-neutral-300">
              <p>
                In a crowded real estate market, a generic website is a liability. At Cloud 9, we don't just build websites; we engineer comprehensive digital ecosystems designed for one purpose: to accelerate your growth.
              </p>
              <p>
                Our team of expert designers, developers, and marketers are obsessed with the real estate industry. We combine cutting-edge design with data-driven visibility strategies to turn your online presence into your most powerful asset for attracting and converting high-value clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
