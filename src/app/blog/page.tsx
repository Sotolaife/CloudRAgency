import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-semibold text-primary uppercase">Blog</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mt-2">
                Marketing & Growth Insights
              </h1>
              <p className="mt-4 text-lg text-neutral-300">
                Strategies, tips, and inspiration for modern real estate professionals.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden group bg-neutral-900/50 border-neutral-800">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      data-ai-hint={post.hint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <p className="text-sm text-neutral-400">{post.date}</p>
                    <CardTitle className="font-headline text-xl mt-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-neutral-300 line-clamp-3">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-primary hover:underline">
                        Read More &rarr;
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
