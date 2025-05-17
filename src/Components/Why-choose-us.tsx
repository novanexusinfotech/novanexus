'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Speed',
    description:
      'Lightning-fast websites optimized for performance and user experience.',
  },
  {
    icon: Shield,
    title: 'Quality',
    description:
      'Pixel-perfect designs with clean, maintainable code that stands the test of time.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      'We respect deadlines and deliver projects on time, every time.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description:
      'Cutting-edge solutions using the latest technologies and best practices.',
  },
];

export default function WhyChooseUs() {
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
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose NovaNexus?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver
            exceptional digital experiences.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="bg-indigo-600/20 p-3 rounded-xl w-fit mb-4">
                <feature.icon className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
