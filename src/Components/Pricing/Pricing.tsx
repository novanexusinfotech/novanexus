'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/Card';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹4,000',
    description: 'Perfect for small businesses just getting started online.',
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Basic SEO', included: true },
      { name: 'Contact form', included: true },
      { name: 'WhatsApp integration', included: true },
      { name: 'CMS / Admin panel', included: false },
      { name: 'E-commerce functionality', included: false },
      { name: 'Custom animations', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Platinum',
    price: '₹10,000',
    description: 'Our most popular plan for growing businesses.',
    features: [
      { name: 'Up to 10 pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Advanced SEO', included: true },
      { name: 'Contact form', included: true },
      { name: 'WhatsApp integration', included: true },
      { name: 'CMS / Admin panel', included: true },
      { name: 'E-commerce functionality', included: false },
      { name: 'Custom animations', included: true },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Diamond',
    price: '₹15,000+',
    description: 'For businesses needing advanced features and customization.',
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Advanced SEO', included: true },
      { name: 'Contact form', included: true },
      { name: 'WhatsApp integration', included: true },
      { name: 'CMS / Admin panel', included: true },
      { name: 'E-commerce functionality', included: true },
      { name: 'Custom animations', included: true },
    ],
    cta: 'Get Started',
    popular: false,
  },
];

export default function PricingPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [enterpriseRef, enterpriseInView] = useInView({
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Choose the plan that works best for your business needs. No hidden
              fees or surprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            ref={pricingRef}
            initial={{ opacity: 0 }}
            animate={pricingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-slate-900 border-slate-800 h-full flex flex-col ${plan.popular ? 'border-indigo-500 relative' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-slate-600 mt-0.5 shrink-0" />
                          )}
                          <span
                            className={
                              feature.included
                                ? 'text-slate-300'
                                : 'text-slate-500'
                            }
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={enterpriseRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              enterpriseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Enterprise Solution
                </h2>
                <p className="text-slate-300 mb-6">
                  Need a custom solution for your enterprise? We offer tailored
                  packages designed specifically for your business requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">
                      Custom web application development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">
                      Dedicated project manager
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">
                      Priority support and maintenance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300">
                      Advanced integrations and APIs
                    </span>
                  </li>
                </ul>
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/contact">Contact for Custom Quote</Link>
                </Button>
              </div>
              <div className="md:w-1/3">
                <div className="bg-indigo-600/20 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-2">Custom Quote</h3>
                  <p className="text-slate-300 mb-4">
                    Tailored pricing based on your specific requirements and
                    project scope.
                  </p>
                  <p className="text-sm text-slate-400">
                    Contact us for a detailed consultation and personalized
                    quote.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Do you offer payment plans?
                </h3>
                <p className="text-slate-300">
                  Yes, we offer flexible payment plans for all our packages.
                  Typically, we require a 50% deposit to begin work, with the
                  remaining balance due upon project completion.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  What is your typical turnaround time?
                </h3>
                <p className="text-slate-300">
                  Project timelines vary based on complexity. Basic websites
                  typically take 2-3 weeks, while more complex projects may take
                  4-8 weeks. We'll provide a detailed timeline during our
                  initial consultation.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Do you provide hosting and domain services?
                </h3>
                <p className="text-slate-300">
                  Yes, we can help you set up hosting and domain registration.
                  We typically recommend and help set up services like Vercel,
                  Netlify, or AWS depending on your project requirements.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Do you offer ongoing maintenance?
                </h3>
                <p className="text-slate-300">
                  Yes, we offer monthly maintenance packages to keep your
                  website secure, updated, and running smoothly. Ask about our
                  maintenance plans during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
