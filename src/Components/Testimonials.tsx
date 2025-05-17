'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardFooter } from './ui/Card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TravelEase',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'NovaNexus transformed our outdated website into a modern, user-friendly platform that has significantly increased our customer engagement and bookings.',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, HealthTech Solutions',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'Working with NovaNexus was a game-changer for our healthcare app. Their expertise in both design and development resulted in an intuitive interface that our users love.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, EcoShop',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'Our e-commerce store has seen a 40% increase in conversions since NovaNexus redesigned it. Their attention to detail and focus on user experience is exceptional.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-900 border-slate-800 h-full flex flex-col">
                <CardContent className="pt-6">
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
  );
}
