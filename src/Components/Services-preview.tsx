'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/Card';
import { Button } from './ui/Button';
import Link from 'next/link';
import {
  Globe,
  ShoppingCart,
  Brain,
  LayoutDashboard,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description:
      'Professional websites that establish your online presence and drive customer engagement.',
    link: '/services#business',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    description:
      'Custom online stores with seamless checkout experiences and inventory management.',
    link: '/services#ecommerce',
  },
  {
    icon: Brain,
    title: 'AI-Integrated Apps',
    description:
      'Smart applications powered by artificial intelligence to automate and enhance user experiences.',
    link: '/services#ai',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & CMS',
    description:
      'Powerful admin panels and content management systems for complete control over your digital assets.',
    link: '/services#dashboards',
  },
];

export default function ServicesPreview() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From simple landing pages to complex web applications, we build
            digital solutions that help your business grow.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-900 border-slate-800 hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="bg-indigo-600/20 p-3 rounded-xl w-fit mb-4">
                    <service.icon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950 p-0"
                  >
                    <Link href={service.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
