'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/Button';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build Something Epic Together
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Ready to transform your digital presence? Contact us today to
            discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-slate-100 text-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg"
            >
              <Link href="https://wa.me/1234567890">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
