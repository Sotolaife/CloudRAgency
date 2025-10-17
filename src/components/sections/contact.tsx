import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="font-semibold text-primary uppercase">Contact Us</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Elevate?
            </h2>
            <p className="text-lg text-neutral-300 max-w-lg">
              Let's discuss how we can build your high-converting website and visibility system. Fill out the form or reach out directly to start the conversation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">hello@cloud9elevated.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-neutral-300">123 Luxury Lane, Miami, FL</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6 p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl shadow-2xl">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-300">Full Name</label>
                <Input id="name" name="name" type="text" placeholder="John Doe" required className="bg-neutral-800 border-neutral-700 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address</label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-neutral-800 border-neutral-700 focus:ring-primary"/>
              </div>
               <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-neutral-300">Current Website (optional)</label>
                <Input id="website" name="website" type="text" placeholder="www.yourwebsite.com" className="bg-neutral-800 border-neutral-700 focus:ring-primary"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Tell us about your project</label>
                <Textarea id="message" name="message" placeholder="I'm looking to redesign my website and improve my SEO..." required rows={5} className="bg-neutral-800 border-neutral-700 focus:ring-primary"/>
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:shadow-[0_0_20px_theme(colors.primary)] transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
