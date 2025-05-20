'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Team_image from '../../images/Team_image.jpg';

const coreValues = [
  {
    title: 'Speed',
    description:
      'We deliver fast websites and quick turnaround times on projects.',
  },
  {
    title: 'Quality',
    description:
      'We never compromise on the quality of our work and attention to detail.',
  },
  {
    title: 'Trust',
    description:
      'We build long-term relationships based on transparency and reliability.',
  },
  {
    title: 'Innovation',
    description:
      'We stay ahead of the curve with the latest technologies and approaches.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description:
      'NovaNexus was founded with a vision to create beautiful, functional websites for businesses.',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description:
      'We grew our team of developers and designers to handle more complex projects.',
  },
  {
    year: '2022',
    title: 'New Services',
    description:
      'Expanded our offerings to include AI integration and advanced e-commerce solutions.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description:
      'Started working with international clients and established our presence in multiple countries.',
  },
  {
    year: '2024',
    title: 'Innovation Focus',
    description:
      'Doubled down on cutting-edge technologies and innovative approaches to web development.',
  },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
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
              About NovaNexus
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              We&apos;re a passionate freelance dev team that builds
              SEO-friendly, fast, scalable websites and web apps — from static
              sites to full-scale platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={
                heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={Team_image}
                alt="NovaNexus Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-slate-300 mb-4">
                NovaNexus was born from a simple idea: to create digital
                experiences that not only look beautiful but also drive real
                business results. We believe that great design and technical
                excellence should go hand in hand.
              </p>
              <p className="text-slate-300 mb-4">
                Our team of passionate developers, designers, and digital
                strategists work together to create websites and applications
                that stand out in today&apos;s crowded digital landscape.
              </p>
              <p className="text-slate-300">
                Whether you&apos;re a startup looking to establish your online
                presence or an established business aiming to revamp your
                digital strategy, we have the expertise and creativity to help
                you succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we
              make.
            </p>
          </div>

          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900 border-slate-800 h-full">
                  <CardContent className="pt-6">
                    <div className="bg-indigo-600/20 p-3 rounded-xl w-fit mb-4">
                      <CheckCircle className="h-6 w-6 text-indigo-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From idea to execution to results, here&apos;s how we&apos;ve
              grown over the years.
            </p>
          </div>

          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-12 last:mb-0"
              >
                <div className="mr-8 text-center">
                  <div className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg">
                    {item.year}
                  </div>
                  <div className="h-full w-0.5 bg-indigo-600 mx-auto mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
