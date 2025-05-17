import type React from 'react';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import MobileCTA from '../Components/Mobile-CTA';
import EnhancedFooter from '../Components/Enhanced-footer';
import BackToTop from '../Components/Back-to-top';
import Navbar from '../Components/Navbar';
import { ThemeProvider } from '../Components/theme-provider';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'NovaNexus | Where Vision Meets Execution',
  description:
    'We craft beautiful, performant websites and apps that grow your business.',
  openGraph: {
    title: 'NovaNexus | Where Vision Meets Execution',
    description:
      'We craft beautiful, performant websites and apps that grow your business.',
    url: 'https://novanexus.vercel.app',
    siteName: 'NovaNexus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NovaNexus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} font-sans bg-slate-900 text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <EnhancedFooter />
            <BackToTop />
            <MobileCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
