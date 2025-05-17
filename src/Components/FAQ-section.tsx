'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/Accordion';

const faqs = [
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
];

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't see what you're
            looking for, feel free to contact us.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
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
  );
}
