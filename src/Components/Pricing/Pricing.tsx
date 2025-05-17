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
    price: '₹2,999',
    description: 'Great for individuals and tiny businesses starting online.',
    features: [
      { name: '1 Page Website', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Domain', included: true },
      { name: 'Hosting', included: true },
      { name: 'SSL Certificate', included: true },
      { name: 'WhatsApp / Call Integration', included: false },
      { name: 'Business Email ID', included: false },
      { name: 'Google My Business / Map', included: false },
      { name: 'Admin Panel (CMS)', included: false },
      { name: 'SEO Optimization', included: false },
      { name: 'Social Media Integration', included: false },
      { name: '24/7 Support', included: true },
      { name: '6 Month Free Service', included: false },
      { name: '3 Month Free Update', included: false },
      { name: 'On-Website Surveys', included: false },
      { name: 'Digital Visiting Card', included: false },
      { name: 'Logo Design', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Silver',
    price: '₹6,499',
    description: 'A solid start for growing local businesses.',
    features: [
      { name: '5 to 7 Pages Website', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Domain', included: true },
      { name: 'Hosting', included: true },
      { name: 'SSL Certificate', included: true },
      { name: 'WhatsApp / Call Integration', included: false },
      { name: 'Business Email ID', included: true },
      { name: 'Google My Business / Map', included: true },
      { name: 'Admin Panel (CMS)', included: false },
      { name: 'SEO Optimization', included: false },
      { name: 'Social Media Integration', included: false },
      { name: '24/7 Support', included: true },
      { name: '6 Month Free Service', included: false },
      { name: '3 Month Free Update', included: false },
      { name: 'On-Website Surveys', included: false },
      { name: 'Digital Visiting Card', included: false },
      { name: 'Logo Design', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Gold',
    price: '₹9,999',
    description: 'Best choice for competitive local businesses.',
    features: [
      { name: '8 to 10 Pages Website', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Domain', included: true },
      { name: 'Hosting', included: true },
      { name: 'SSL Certificate', included: true },
      { name: 'WhatsApp / Call Integration', included: true },
      { name: 'Business Email ID', included: true },
      { name: 'Google My Business / Map', included: true },
      { name: 'Admin Panel (CMS)', included: true },
      { name: 'SEO Optimization', included: true },
      { name: 'Social Media Integration', included: true },
      { name: '24/7 Support', included: true },
      { name: '6 Month Free Service', included: true },
      { name: '3 Month Free Update', included: true },
      { name: 'On-Website Surveys', included: true },
      { name: 'Digital Visiting Card', included: true },
      { name: 'Logo Design', included: true },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Platinum',
    price: '₹14,999+',
    description:
      'For businesses looking to go full pro with all the bells & whistles.',
    features: [
      { name: '11 to 13 Pages Website', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Domain', included: true },
      { name: 'Hosting', included: true },
      { name: 'SSL Certificate', included: true },
      { name: 'WhatsApp / Call Integration', included: true },
      { name: 'Business Email ID', included: true },
      { name: 'Google My Business / Map', included: true },
      { name: 'Admin Panel (CMS)', included: true },
      { name: 'SEO Optimization', included: true },
      { name: 'Social Media Integration', included: true },
      { name: '24/7 Support', included: true },
      { name: '6 Month Free Service', included: true },
      { name: '3 Month Free Update', included: true },
      { name: 'On-Website Surveys', included: true },
      { name: 'Digital Visiting Card', included: true },
      { name: 'Logo Design', included: true },
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
