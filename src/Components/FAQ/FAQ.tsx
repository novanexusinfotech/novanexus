'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion';
import { Button } from '../ui/Button';
import Link from 'next/link';
import ContactModal from '../Contact-modal';

const generalFaqs = [
  {
    question: 'How long does a project take?',
    answer:
      "Project timelines vary based on complexity. Simple websites typically take 2-3 weeks, while more complex projects may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: 'Can I update my site myself later?',
    answer:
      'We build all our websites with user-friendly content management systems that allow you to easily update content, add new pages, and make basic changes without technical knowledge.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, we offer various support packages to ensure your website remains secure, up-to-date, and performing optimally. Our support includes regular updates, security monitoring, and technical assistance.',
  },
  {
    question: 'Is SEO included?',
    answer:
      'Basic SEO optimization is included in all our packages. This includes proper meta tags, semantic HTML, optimized images, and mobile responsiveness. We also offer advanced SEO services for businesses looking to improve their search rankings.',
  },
];

const technicalFaqs = [
  {
    question: 'What technologies do you use?',
    answer:
      'We use modern, cutting-edge technologies like Next.js, React, Tailwind CSS, and various headless CMS options. Our tech stack is chosen based on your specific requirements to ensure optimal performance, scalability, and maintainability.',
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer:
      'Yes, we can help you set up hosting and domain registration. We typically recommend and help set up services like Vercel, Netlify, or AWS depending on your project requirements.',
  },
  {
    question: 'Are your websites mobile-friendly?',
    answer:
      'All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones to desktops.',
  },
  {
    question: 'Can you integrate with third-party services?',
    answer:
      'Yes, we can integrate your website with various third-party services such as payment gateways, CRM systems, email marketing platforms, social media, and more.',
  },
];

const pricingFaqs = [
  {
    question: 'How much does a website cost?',
    answer:
      'Our pricing varies based on the complexity and requirements of your project. We offer packages starting from ₹4,000 for basic websites, with custom solutions for more complex projects. Contact us for a personalized quote.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, we offer flexible payment plans for all our packages. Typically, we require a 50% deposit to begin work, with the remaining balance due upon project completion.',
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Our pricing includes design, development, testing, and deployment of your website. Depending on the package, it may also include content creation, SEO optimization, and training on how to use your website's CMS.",
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer:
      'Yes, we offer special pricing for non-profit organizations. Contact us to learn more about our non-profit rates and how we can help your organization achieve its digital goals.',
  },
];

export default function FAQPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [generalRef, generalInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [technicalRef, technicalInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [pricingRef, pricingInView] = useInView({
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Have questions? We've got answers. If you don't see what you're
              looking for, feel free to contact us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            General Questions
          </h2>
          <motion.div
            ref={generalRef}
            initial={{ opacity: 0 }}
            animate={generalInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    generalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`general-${index}`}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-800/50 transition-all text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical Questions
          </h2>
          <motion.div
            ref={technicalRef}
            initial={{ opacity: 0 }}
            animate={technicalInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {technicalFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    technicalInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`technical-${index}`}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-800/50 transition-all text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Pricing Questions
          </h2>
          <motion.div
            ref={pricingRef}
            initial={{ opacity: 0 }}
            animate={pricingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {pricingFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`pricing-${index}`}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-800/50 transition-all text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Can't find the answer you're looking for? Please contact us directly
            and we'll be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Contact Us
              </Button>
            </ContactModal>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-950"
            >
              <Link href="https://wa.me/1234567890">Chat on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
