'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/TextArea';
import { motion } from 'framer-motion';

interface ContactModalProps {
  children: React.ReactNode;
  title?: string;
}

export default function ContactModal({
  children,
  title = "Let's Talk",
}: ContactModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <form className="space-y-6 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="modal-name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="modal-name"
                  placeholder="Your name"
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="modal-email"
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="modal-subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="modal-subject"
                placeholder="Project inquiry"
                className="bg-slate-800 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="modal-message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="modal-message"
                placeholder="Tell us about your project..."
                className="bg-slate-800 border-slate-700 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
