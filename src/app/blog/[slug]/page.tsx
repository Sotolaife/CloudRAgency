import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { blogPosts, type Post } from '@/lib/data';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
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
                 <p className="text-base font-semibold text-primary uppercase tracking-wide">{post.date}</p>
                 <h1 className="mt-4 font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    {post.title}
                 </h1>
              </div>
            </div>
          </header>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                data-ai-hint={post.hint}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-invert prose-lg max-w-3xl mx-auto py-12 md:py-20"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
