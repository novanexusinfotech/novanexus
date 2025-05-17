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
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    title: '10 Web Design Trends to Watch in 2025',
    excerpt:
      'Explore the cutting-edge design trends that are shaping the web in 2025, from immersive 3D experiences to AI-driven personalization.',
    image: '/placeholder.svg?height=300&width=600',
    date: 'May 15, 2025',
    author: 'Priya Sharma',
    tag: 'Web Design',
    slug: 'web-design-trends-2025',
  },
  {
    title: 'How to Optimize Your Website for Core Web Vitals',
    excerpt:
      "Learn practical strategies to improve your website's performance metrics and boost your search engine rankings with Core Web Vitals optimization.",
    image: '/placeholder.svg?height=300&width=600',
    date: 'May 10, 2025',
    author: 'Michael Chen',
    tag: 'SEO',
    slug: 'optimize-core-web-vitals',
  },
  {
    title: 'The Business Case for Investing in UX Design',
    excerpt:
      'Discover how investing in user experience design can drive business growth, increase customer satisfaction, and provide measurable ROI.',
    image: '/placeholder.svg?height=300&width=600',
    date: 'May 5, 2025',
    author: 'Sarah Johnson',
    tag: 'UX Design',
    slug: 'business-case-ux-design',
  },
  {
    title: 'Building Accessible Websites: A Comprehensive Guide',
    excerpt:
      'A step-by-step guide to creating websites that are accessible to all users, including those with disabilities, and why it matters for your business.',
    image: '/placeholder.svg?height=300&width=600',
    date: 'April 28, 2025',
    author: 'David Wilson',
    tag: 'Accessibility',
    slug: 'accessible-websites-guide',
  },
  {
    title: 'Headless CMS vs. Traditional CMS: Which is Right for You?',
    excerpt:
      'Compare the pros and cons of headless and traditional content management systems to determine the best solution for your specific needs.',
    image: '/placeholder.svg?height=300&width=600',
    date: 'April 20, 2025',
    author: 'Aisha Patel',
    tag: 'CMS',
    slug: 'headless-vs-traditional-cms',
  },
  {
    title: 'The Future of E-commerce: AI-Powered Shopping Experiences',
    excerpt:
      'Explore how artificial intelligence is revolutionizing online shopping with personalized recommendations, virtual try-ons, and conversational commerce.',
    image: '/placeholder.svg?height=300&width=600',
    date: 'April 15, 2025',
    author: 'Carlos Rodriguez',
    tag: 'E-commerce',
    slug: 'ai-powered-ecommerce',
  },
];

export default function BlogPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [blogRef, blogInView] = useInView({
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-slate-300 mb-12">
              Insights, tips, and industry trends from our team of experts to
              help you stay ahead in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            ref={blogRef}
            initial={{ opacity: 0 }}
            animate={blogInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="bg-slate-900 border-slate-800 h-full flex flex-col hover:border-indigo-500/30 transition-all duration-300 shadow-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {post.tag}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl hover:text-indigo-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <CardDescription className="text-slate-300 mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button
                      asChild
                      variant="ghost"
                      className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950 p-0"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-slate-300 mb-6">
                Stay updated with the latest trends, tips, and insights in web
                development and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-700 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
