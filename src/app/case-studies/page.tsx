import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { caseStudies } from '@/lib/data';

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-semibold text-primary uppercase">Case Studies</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mt-2">
                Proven Results
              </h1>
              <p className="mt-4 text-lg text-neutral-300">
                Discover how we've helped leading real estate brands achieve exceptional growth through strategic design and marketing.
              </p>
            </div>
            <div className="mt-20 max-w-4xl mx-auto space-y-12">
              {caseStudies.map((study) => (
                <Link href={`/case-studies/${study.slug}`} key={study.slug} className="block group">
                  <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800 transition-all duration-300 md:hover:border-primary/50 md:hover:scale-[1.02]">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-video">
                        <Image
                          src={study.image}
                          alt={study.title}
                          data-ai-hint={study.hint}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                          <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                              {study.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0 mt-4">
                            <p className="text-neutral-300">{study.description}</p>
                            <p className="mt-4 font-semibold text-primary">Read Case Study &rarr;</p>
                          </CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
