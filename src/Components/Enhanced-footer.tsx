import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '/team' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/NovanexusI42960' },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/novanexus._infotech/',
  },
];

export default function EnhancedFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">
              NovaNexus
            </h3>
            <p className="text-slate-400 mb-4">
              Where Vision Meets Execution. We craft beautiful, performant
              websites and apps that grow your business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <link.icon size={20} />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              {navItems.slice(5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-indigo-500 shrink-0 mt-1" />
                <span className="text-slate-400">
                  novanexusinfotech@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-indigo-500 shrink-0 mt-1" />
                <span className="text-slate-400">+91 9042 78 68 68</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-indigo-500 shrink-0 mt-1" />
                <span className="text-slate-400">Puducherry, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} NovaNexus. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-indigo-400 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-indigo-400 text-sm"
            >
              Terms of Service
            </Link>
            {/* <Link
              href="/sitemap.xml"
              className="text-slate-400 hover:text-indigo-400 text-sm"
            >
              Sitemap
            </Link> */}
          </div>
        </div>

        <div className="text-center mt-8 text-slate-400 text-sm flex items-center justify-center">
          Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> by
          NovaNexus
        </div>
      </div>
    </footer>
  );
}
