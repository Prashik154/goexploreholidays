'use client';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

export function SafariBentoGrid() {
  const packages = [
    {
      id: 'premium-tiger',
      title: 'Premium Tiger Safari',
      tagline: 'Where the wild things reign supreme',
      image: '/images/sightings/Group.jpg',
      cols: 'md:col-span-2', // Wider block
      theme: 'bg-green-800 text-white'
    },
    {
      id: 'birding',
      title: 'Birding Expeditions',
      tagline: 'Spot 200+ species in their natural habitat',
      image: '/images/sightings/Hawk.jpg',
      cols: 'md:col-span-1',
      theme: 'bg-amber-50 text-white'
    },
    {
      id: 'new-south-africa',
      title: 'New in South Africa!',
      tagline: 'The Kruger experience, reimagined',
      image: '/images/sightings/Leopard.jpg',
      cols: 'md:col-span-1',
      theme: 'bg-blue-900 text-white'
    },
    {
      id: 'jungle-retreats',
      title: 'Rethink the Jungle...',
      tagline: '5 unique canopy-level experiences',
      image: '/images/sightings/Eagle.jpg',
      cols: 'md:col-span-2',
      theme: 'bg-emerald-100 text-white'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* <h2 className="text-4xl font-bold text-center mb-8">Wilderness Collections</h2> */}
      
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className={`${pkg.cols} ${pkg.theme} rounded-2xl overflow-hidden group relative h-64 md:h-80`}
          >
            <NextImage
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-500"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <h3 className="text-2xl font-bold mb-1">{pkg.title}</h3>
              <p className="text-lg">{pkg.tagline}</p>
              <button className="mt-4 self-start px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}