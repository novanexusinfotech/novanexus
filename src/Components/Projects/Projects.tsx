'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/Card';
import { Button } from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'TravelEase',
    category: 'Travel',
    description:
      'A modern booking platform for adventure travelers with real-time availability and secure payments.',
    image: '/placeholder.svg?height=300&width=500',
    comingSoon: false,
  },
  {
    title: 'HealthTech Solutions',
    category: 'Healthcare',
    description:
      'Patient management system with appointment scheduling and secure medical records.',
    image: '/placeholder.svg?height=300&width=500',
    comingSoon: false,
  },
  {
    title: 'EcoShop',
    category: 'E-commerce',
    description:
      'Sustainable products marketplace with carbon footprint tracking for environmentally conscious consumers.',
    image: '/placeholder.svg?height=300&width=500',
    comingSoon: false,
  },
  {
    title: 'Future Projects',
    category: 'Various Industries',
    description:
      "We're currently working on exciting new projects in fintech, education, and real estate sectors.",
    image: '/placeholder.svg?height=300&width=500',
    comingSoon: true,
  },
];

export default function ProjectsPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
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
              Our Projects
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              We&apos;re currently working with clients in travel, healthcare,
              and e-commerce. Here are some of our recent projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            ref={projectsRef}
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900 border-slate-800 h-full flex flex-col overflow-hidden">
                  <div className="relative">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-[200px] object-cover"
                    />
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
                        <span className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="text-sm text-indigo-400 mb-1">
                      {project.category}
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  {!project.comingSoon && (
                    <CardFooter className="mt-auto pt-4">
                      <Button
                        asChild
                        variant="ghost"
                        className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950 p-0"
                      >
                        <Link href="#">
                          View Case Study{' '}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">More Projects Coming Soon</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            We&apos;re constantly working on new and exciting projects. Check
            back soon to see our latest work, or contact us to discuss your
            project ideas.
          </p>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
