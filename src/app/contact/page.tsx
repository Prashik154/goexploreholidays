'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContactSection } from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen font-roboto">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/tigers/Jaguar in the Foliage.jpeg" // Update with your image path
          alt="Contact our safari team"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Connect With Our Safari Experts
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Have questions about your jungle adventure? Our team is ready to help you plan the perfect wildlife experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactSection />

      
    </div>
  );
}