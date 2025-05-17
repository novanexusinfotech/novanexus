'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import Link from 'next/link';
import ContactModal from '../Contact-modal';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TravelEase',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'NovaNexus transformed our outdated website into a modern, user-friendly platform that has significantly increased our customer engagement and bookings. Their attention to detail and commitment to quality is unmatched.',
    stars: 5,
    emoji: '🚀',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, HealthTech Solutions',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'Working with NovaNexus was a game-changer for our healthcare app. Their expertise in both design and development resulted in an intuitive interface that our users love. The team was responsive and delivered on time.',
    stars: 5,
    emoji: '💯',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, EcoShop',
    image: '/placeholder.svg?height=80&width=80',
    content:
      "Our e-commerce store has seen a 40% increase in conversions since NovaNexus redesigned it. Their attention to detail and focus on user experience is exceptional. They truly understand what makes customers click 'buy'.",
    stars: 5,
    emoji: '🌟',
  },
  {
    name: 'David Wilson',
    role: 'CTO, FinTech Innovations',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'NovaNexus delivered a complex dashboard application that exceeded our expectations. Their technical expertise and problem-solving abilities made a challenging project seem effortless. Highly recommended for any tech project.',
    stars: 5,
    emoji: '👨‍💻',
  },
  {
    name: 'Aisha Patel',
    role: 'Owner, Boutique Clothing',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'As a small business owner, I needed a website that would showcase my products beautifully without breaking the bank. NovaNexus delivered exactly that - a stunning, functional site that has helped grow my business online.',
    stars: 5,
    emoji: '✨',
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Director, Educational Institute',
    image: '/placeholder.svg?height=80&width=80',
    content:
      "NovaNexus created an interactive learning platform for our students that has transformed how we deliver education. Their innovative approach and technical skills have made a real difference in our students' learning experience.",
    stars: 5,
    emoji: '🎓',
  },
];

export default function TestimonialsPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Happy Clients
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about working with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0 }}
            animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  testimonialsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="bg-slate-900 border-slate-800 h-full flex flex-col hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
                  <CardContent className="pt-6 relative">
                    <div className="absolute -top-4 -right-2 text-4xl rotate-12">
                      {testimonial.emoji}
                    </div>
                    <Quote className="h-10 w-10 text-indigo-500/20 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-slate-300 italic mb-6">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto border-t border-slate-800 pt-4">
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || '/placeholder.svg'}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Let&apos;s create something amazing together. Contact us today to
            discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Your Project
              </Button>
            </ContactModal>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-950"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
