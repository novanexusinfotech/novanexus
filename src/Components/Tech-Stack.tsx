'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const technologies = [
  { name: 'Next.js', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'React', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Tailwind CSS', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Node.js', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'MongoDB', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Prismic', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'GSAP', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Framer Motion', logo: '/placeholder.svg?height=60&width=60' },
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
                <Image
                  src={tech.logo || '/placeholder.svg'}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="text-sm text-slate-400">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
