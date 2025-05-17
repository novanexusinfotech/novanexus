'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import Link from 'next/link';
import {
  Globe,
  ShoppingCart,
  Brain,
  LayoutDashboard,
  Check,
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'business',
    icon: Globe,
    title: 'Business Websites',
    description:
      'Professional websites that establish your online presence and drive customer engagement.',
    features: [
      'Responsive design for all devices',
      'SEO optimization for better visibility',
      'Fast loading speeds',
      'Content management system',
      'Analytics integration',
      'Contact forms and lead capture',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    description:
      'Custom online stores with seamless checkout experiences and inventory management.',
    features: [
      'Product catalog management',
      'Secure payment processing',
      'Inventory tracking',
      'Customer account management',
      'Order processing and fulfillment',
      'Mobile shopping experience',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI-Integrated Apps',
    description:
      'Smart applications powered by artificial intelligence to automate and enhance user experiences.',
    features: [
      'Natural language processing',
      'Recommendation engines',
      'Predictive analytics',
      'Chatbots and virtual assistants',
      'Image and voice recognition',
      'Data analysis and insights',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'dashboards',
    icon: LayoutDashboard,
    title: 'Dashboards & CMS',
    description:
      'Powerful admin panels and content management systems for complete control over your digital assets.',
    features: [
      'Custom admin interfaces',
      'Data visualization',
      'User role management',
      'Content scheduling',
      'Asset management',
      'Performance reporting',
    ],
    image: '/placeholder.svg?height=400&width=600',
  },
];

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({
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
              Our Services
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              From simple landing pages to complex web applications, we build
              digital solutions that help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a free
            consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-indigo-600 hover:bg-slate-100"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function ServiceSection({ service, index }: { service: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      key={service.id}
      id={service.id}
      className={`py-20 ${index % 2 === 1 ? 'bg-slate-950' : ''}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className={index % 2 === 1 ? 'lg:order-last' : ''}
          >
            <div className="bg-indigo-600/20 p-3 rounded-xl w-fit mb-4">
              <service.icon className="h-6 w-6 text-indigo-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-slate-300 mb-6">{service.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={service.image || '/placeholder.svg'}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
