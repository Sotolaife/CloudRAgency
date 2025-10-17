import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';

export default function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-primary uppercase">Insights</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mt-2">
            From Our Playbook
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Get the latest strategies and insights on real estate marketing, technology, and growth.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
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
                <p className="text-neutral-300">{post.description}</p>
              </CardContent>
              <CardFooter>
                 <Link href={`/blog/${post.slug}`} className="font-semibold text-primary hover:underline">
                    Read More &rarr;
                 </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_theme(colors.primary)] transition-all duration-300">
            <Link href="/blog">Explore All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
