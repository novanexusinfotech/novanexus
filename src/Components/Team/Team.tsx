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
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import ContactModal from '../Contact-modal';

const teamMembers = [
  {
    name: 'Rahul Sharma',
    role: 'Founder & Lead Developer',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Full-stack developer with 10+ years of experience building scalable web applications. Passionate about clean code and user-centric design.',
    skills: ['Next.js', 'React', 'Node.js', 'AWS', 'UI/UX'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'rahul@novanexus.com',
    },
  },
  {
    name: 'Priya Patel',
    role: 'Creative Director',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Award-winning designer with a background in both digital and print media. Specializes in creating memorable brand experiences.',
    skills: [
      'UI Design',
      'Brand Strategy',
      'Figma',
      'Adobe Creative Suite',
      'Motion Design',
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'priya@novanexus.com',
    },
  },
  {
    name: 'Alex Chen',
    role: 'Frontend Developer',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Frontend specialist with a keen eye for detail and a passion for creating smooth, interactive user experiences.',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Accessibility',
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'alex@novanexus.com',
    },
  },
  {
    name: 'Maya Singh',
    role: 'Backend Developer',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Backend expert focused on building secure, scalable APIs and database architectures for complex applications.',
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'maya@novanexus.com',
    },
  },
  {
    name: 'David Kumar',
    role: 'Project Manager',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Certified project manager with experience leading complex digital projects from conception to launch.',
    skills: [
      'Agile Methodology',
      'Client Communication',
      'Resource Planning',
      'Risk Management',
      'Jira',
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'david@novanexus.com',
    },
  },
  {
    name: 'Sophia Rodriguez',
    role: 'SEO & Content Specialist',
    image: '/placeholder.svg?height=300&width=300',
    bio: 'Digital marketing expert specializing in SEO, content strategy, and analytics to drive organic growth.',
    skills: [
      'SEO',
      'Content Strategy',
      'Google Analytics',
      'Keyword Research',
      'Copywriting',
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'sophia@novanexus.com',
    },
  },
];

export default function TeamPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
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
              Meet Our Team
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              We&apos;re small but mighty 💪 A talented team of designers,
              developers, and digital strategists passionate about creating
              exceptional digital experiences.
            </p>
            <p className="text-slate-400 mb-12">
              Together, we combine technical expertise with creative vision to
              deliver solutions that help our clients succeed in the digital
              world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="bg-slate-900 border-slate-800 h-full flex flex-col hover:border-indigo-500/30 transition-all duration-300 shadow-xl overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-indigo-400 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-slate-300 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-slate-800 text-slate-300 text-xs font-medium px-2.5 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4 flex justify-between">
                    <div className="flex space-x-3">
                      <Link
                        href={member.social.linkedin}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href={member.social.github}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href={member.social.twitter}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href={`mailto:${member.social.email}`}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented individuals to join our team.
            If you&apos;re passionate about creating exceptional digital
            experiences, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal title="Join Our Team">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Send Your Resume
              </Button>
            </ContactModal>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-950"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
