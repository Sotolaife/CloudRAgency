import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/logo';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-neutral-900/50 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-neutral-400 max-w-xs">
              High-converting websites and visibility systems for elite real estate professionals.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-neutral-400 hover:text-primary transition-colors">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2">
                {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-neutral-400 hover:text-primary transition-colors">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Cloud 9 Elevated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
