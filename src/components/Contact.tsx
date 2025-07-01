'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    enquiryType: '',
    newsletter: false,
    smsUpdates: false
  });

  const countries = ['India', 'United Kingdom', 'United States', 'Australia', 'Canada', 'Germany'];
  const enquiryTypes = [
    'General Inquiry',
    'Safari Booking',
    'Private Group Tour',
    'Wildlife Photography Tour',
    'Conservation Partnership'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-green-600">Home</Link> → <span className="text-green-600">Contact Us</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We want to help you plan the perfect jungle adventure. Contact our safari experts using the form below, 
            or call us directly. You can also find answers to <Link href="/faq" className="text-green-600 underline">common questions</Link>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Country of Residence*</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Type of Enquiry*</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Please select</option>
                  {enquiryTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                    Keep me updated with safari news and offers
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="smsUpdates"
                    name="smsUpdates"
                    checked={formData.smsUpdates}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="smsUpdates" className="ml-2 text-sm text-gray-700">
                    I'd like to receive SMS updates
                  </label>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                For details on how we handle your data, please read our{' '}
                <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link>.
                You can withdraw consent anytime.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                Submit Your Query
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="text-xl font-bold mb-4">Bookings</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Call us on:</p>
                  <a href="tel:+9118001234567" className="text-lg font-medium text-gray-900 hover:text-green-600">
                    +91 1800 123 4567
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email us at:</p>
                  <a href="mailto:bookings@wildtrails.com" className="text-lg font-medium text-gray-900 hover:text-green-600">
                    bookings@wildtrails.com
                  </a>
                </div>
                <div className="pt-4 border-t border-amber-100">
                  <p className="text-sm font-medium mb-2">Operating Hours:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Mon-Fri: 8:00 AM - 8:00 PM IST</li>
                    <li>Sat: 9:00 AM - 6:00 PM IST</li>
                    <li>Sun: 10:00 AM - 4:00 PM IST</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold mb-4">Private Group Safaris</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Call us on:</p>
                  <a href="tel:+9118001234568" className="text-lg font-medium text-gray-900 hover:text-green-600">
                    +91 1800 123 4568
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Online Form:</p>
                  <Link href="/private-groups" className="text-green-600 underline text-sm">
                    Request a Private Group Quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold mb-4">Post-Booking Support</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Call us on:</p>
                  <a href="tel:+9118001234569" className="text-lg font-medium text-gray-900 hover:text-green-600">
                    +91 1800 123 4569
                  </a>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <p className="text-sm font-medium mb-2">Operating Hours:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Mon-Fri: 9:00 AM - 7:00 PM IST</li>
                    <li>Sat-Sun: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}