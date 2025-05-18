'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

//Icons
import Nextjs from '../images/icons/tech-stack/Nextjs';
import Reactjs from '../images/icons/tech-stack/Reactjs';
import Tailwind from '../images/icons/tech-stack/Tailwind';
import Node from '../images/icons/tech-stack/Node';
import MongoDB from '../images/icons/tech-stack/MongoDB';
import Prismic from '../images/icons/tech-stack/Prismic';
import GSAP from '../images/icons/tech-stack/GSAP';
import Framer from '../images/icons/tech-stack/Framer';

const technologies = [
  { name: 'Next.js', logo: <Nextjs /> },
  { name: 'React', logo: <Reactjs /> },
  { name: 'Tailwind CSS', logo: <Tailwind /> },
  { name: 'Node.js', logo: <Node /> },
  { name: 'MongoDB', logo: <MongoDB /> },
  { name: 'Prismic', logo: <Prismic /> },
  { name: 'GSAP', logo: <GSAP /> },
  { name: 'Framer Motion', logo: <Framer /> },
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Tech Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and
            maintainable applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-slate-900 p-4 rounded-xl mb-2">
                {tech.logo}
              </div>
              <span className="text-sm text-slate-400">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
