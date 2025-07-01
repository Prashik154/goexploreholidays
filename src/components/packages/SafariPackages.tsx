"use client"
import { safariPackages } from '@/app/utils/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function SafariPackages() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Safari Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose your perfect jungle adventure from our carefully curated experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {safariPackages.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="h-full flex flex-col overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 group-hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                {pkg.featured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="w-5 h-5 text-amber-400 fill-amber-400 mr-1">★</div>
                    <span className="ml-1 text-gray-700">
                      4.8 (142 reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-amber-600">
                    <span className="mr-2">☀️</span>
                    Morning
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>

                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">📍</span>
                  <span>Ranthambore National Park</span>
                </div>

                <ul className="mb-6 space-y-2">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{pkg.price}
                        <span className="text-sm font-normal text-gray-500"> /person</span>
                      </p>
                    </div>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="flex items-center px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                    >
                      View Details
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/packages"
          className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-bold shadow-lg transition-colors inline-block"
        >
          View All Safari Packages
        </Link>
      </div>
    </div>
  );
}