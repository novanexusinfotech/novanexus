'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.innerWidth < 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener('resize', toggleVisibility);
    return () => window.removeEventListener('resize', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/90 backdrop-blur-md border-t border-slate-800"
        >
          <Button
            asChild
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <Link
              href="https://wa.me/1234567890"
              className="flex items-center justify-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              💬 Let&apos;s Chat on WhatsApp
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
