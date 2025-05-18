'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Textarea } from '../ui/TextArea';

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
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
              Let&apos;s Build Something Epic Together
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Have a project in mind? Get in touch with us to discuss how we can
              help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0 }}
            animate={formInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form and we&apos;ll get back to you within 24
                hours. We&apos;re excited to hear about your project!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600/20 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">
                      novanexusinfotech@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate-300">+91 9042 78 68 68</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600/20 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-slate-300">Puducherry, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600/20 p-3 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-slate-300">
                      <Link
                        href="https://wa.me/9042786868"
                        className="text-indigo-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat with us on WhatsApp
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-slate-800 border-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-slate-800 border-slate-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project inquiry"
                        className="bg-slate-800 border-slate-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="bg-slate-800 border-slate-700 min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12">
            Here&apos;s what you can expect when working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-slate-400">
                We discuss your requirements, goals, and vision for the project.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Proposal</h3>
              <p className="text-slate-400">
                We provide a detailed proposal with timeline, deliverables, and
                pricing.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-slate-400">
                We design and develop your project with regular updates and
                feedback.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-slate-400">
                We launch your project and provide training and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
