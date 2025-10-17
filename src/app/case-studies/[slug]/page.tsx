import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { caseStudies, type Post } from '@/lib/data';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((p) => p.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <article>
          <header className="py-12 md:py-20 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                 <p className="text-base font-semibold text-primary uppercase tracking-wide">Case Study</p>
                 <h1 className="mt-4 font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    {study.title}
                 </h1>
              </div>
            </div>
          </header>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={study.image}
                alt={study.title}
                data-ai-hint={study.hint}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-invert prose-lg max-w-3xl mx-auto py-12 md:py-20"
              dangerouslySetInnerHTML={{ __html: study.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
