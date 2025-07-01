// export function Footer() {
//     return (
//       <footer className="bg-gray-800 text-white py-6 px-4">
//         <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
//           <div className="space-y-2">
//             <h4 className="font-semibold">Discover</h4>
//             <a href="#" className="block">About</a>
//             <a href="#" className="block">Packages</a>
//           </div>
//           {/* …other nav columns… */}
//         </div>
//         <p className="text-center mt-6 text-sm">&copy; 2025 Xplore Travel</p>
//       </footer>
//     )
//   }


'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Safari Packages', href: '/packages' },
        { name: 'Wildlife Guides', href: '/wildlife' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'Photo Gallery', href: '/gallery' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Conservation', href: '/conservation' },
        { name: 'Testimonials', href: '/reviews' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Booking Policy', href: '/policy' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Emergency', href: 'tel:+911234567890' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 font-roboto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl font-bold">🌿</span>
              </div>
              <span className="text-xl font-bold">WildTrails</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Crafting unforgettable wildlife experiences since 2010. Committed to ethical tourism and conservation.
            </p>
            <div className="flex space-x-4">
              {['🦁', '🐅', '🦚', '🐘'].map((emoji, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-2xl cursor-pointer"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Safari Journal</h3>
            <p className="text-gray-400">
              Get wildlife updates and exclusive offers
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-900 w-full focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 pt-8"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} WildTrails Safaris. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-6 text-sm"
          >
            <Link href="/privacy" className="text-gray-500 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-amber-400 transition-colors">
              Cookies
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}