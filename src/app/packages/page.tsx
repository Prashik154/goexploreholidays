// import { SafariPackages } from "@/components/packages/SafariPackages";

// export default function PackagesPage() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">Safari Packages</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Choose from our curated selection of wildlife adventures designed for every type of traveler
//         </p>
//       </div>
      
//       <SafariPackages />
//     </div>
//   );
// }


// 'use client';
// import { motion } from 'framer-motion';
// import { safariPackages } from '@/app/utils/data';
// import Image from 'next/image';

// export default function PackagesPage() {
//   // Expanded packages data (add to your utils/data.ts)
//   const allPackages = [
//     ...safariPackages, // Existing packages
//     {
//       id: 'tadoba-expedition',
//       title: 'Tadoba Expedition',
//       description: '5-day immersive tiger tracking in Maharashtra',
//       duration: '5 days',
//       price: 499,
//       highlights: [
//         'Exclusive buffer zone access',
//         'Night safari included',
//         'Luxury jungle lodge',
//         'Expert Maharashtrian guides'
//       ],
//       image: '/images/tigers/Majestic Tiger in Lush Greenery.jpeg'
//     },
//     {
//       id: 'pench-wilderness',
//       title: 'Pench Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Group.jpg'
//     },
//     {
//       id: 'kanha-wilderness',
//       title: 'Kanha Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Birds.jpg'
//     },
//     {
//       id: 'bandhavgarh-wilderness',
//       title: 'Bandhavgarh Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Barasinga.jpg'
//     },
//     {
//       id: 'ranthambore-wilderness',
//       title: 'Ranthambore Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Bear.jpg'
//     },
//     {
//       id: 'panna-wilderness',
//       title: 'Panna Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Eagle.jpg'
//     },
//     // Add other packages similarly...
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">Safari Packages</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Choose from our curated selection of wildlife adventures across India's premier national parks
//         </p>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.8
//             }
//           }
//         }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {allPackages.map((pkg) => (
//           <motion.div
//             key={pkg.id}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             whileHover={{ y: -10 }}
//             className="relative group overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl"
//           >
//             <div className="relative h-64 overflow-hidden">
//               <Image
//                 src={pkg.image}
//                 alt={pkg.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               {pkg.featured && (
//                 <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//                   Most Popular
//                 </div>
//               )}
//             </div>

//             <div className="p-6">
//               <div className="flex justify-between mb-3">
//                 <div className="flex items-center text-sm text-amber-600">
//                   <span className="mr-2">📍</span>
//                   {pkg.duration}
//                 </div>
//                 <div className="text-lg font-bold text-gray-900">
//                   ₹{pkg.price}
//                   <span className="text-sm font-normal text-gray-500"> /person</span>
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
              
//               <ul className="mb-6 space-y-2">
//                 {pkg.highlights.map((highlight, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     className="flex items-start"
//                   >
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>{highlight}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
//                 View Details
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }


// 'use client';
// import { motion } from 'framer-motion';
// import { safariPackages } from '@/app/utils/data';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function PackagesPage() {
//   const allPackages = [
//     ...safariPackages,
//     {
//       id: 'tadoba-expedition',
//       title: 'Tadoba Expedition',
//       description: '5-day immersive tiger tracking in Maharashtra',
//       duration: '5 days',
//       price: 499,
//       highlights: [
//         'Exclusive buffer zone access',
//         'Night safari included',
//         'Luxury jungle lodge',
//         'Expert Maharashtrian guides'
//       ],
//       image: '/images/tigers/Majestic Tiger in Lush Greenery.jpeg'
//     },
//     {
//       id: 'pench-wilderness',
//       title: 'Pench Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Group.jpg'
//     },
//     {
//       id: 'kanha-wilderness',
//       title: 'Kanha Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Birds.jpg'
//     },
//     {
//       id: 'bandhavgarh-wilderness',
//       title: 'Bandhavgarh Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Barasinga.jpg'
//     },
//     {
//       id: 'ranthambore-wilderness',
//       title: 'Ranthambore Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Bear.jpg'
//     },
//     {
//       id: 'panna-wilderness',
//       title: 'Panna Wilderness',
//       description: 'Where The Jungle Book comes alive',
//       duration: '4 days',
//       price: 399,
//       highlights: [
//         'Visit Mowgli\'s landscape',
//         'Birdwatching special',
//         'Eco-friendly cottages',
//         'Elephant safari option'
//       ],
//       image: '/images/sightings/Eagle.jpg'
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">Safari Packages</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Choose from our curated selection of wildlife adventures across India's premier national parks
//         </p>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.8
//             }
//           }
//         }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {allPackages.map((pkg) => (
//           <motion.div
//             key={pkg.id}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             whileHover={{ y: -10 }}
//             className="relative group overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl"
//           >
//             <div className="relative h-64 overflow-hidden">
//               <Image
//                 src={pkg.image}
//                 alt={pkg.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               {pkg.featured && (
//                 <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//                   Most Popular
//                 </div>
//               )}
//             </div>

//             <div className="p-6">
//               <div className="flex justify-between mb-3">
//                 <div className="flex items-center text-sm text-amber-600">
//                   <span className="mr-2">📍</span>
//                   {pkg.duration}
//                 </div>
//                 <div className="text-lg font-bold text-gray-900">
//                   ₹{pkg.price}
//                   <span className="text-sm font-normal text-gray-500"> /person</span>
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
              
//               <ul className="mb-6 space-y-2">
//                 {pkg.highlights.map((highlight, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     className="flex items-start"
//                   >
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>{highlight}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               <Link 
//                 href={`/packages/${pkg.id}`}
//                 className="block w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-center"
//               >
//                 View Details
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }



'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PackagesPage() {
  const simplifiedPackages = [
    {
      id: 'tadoba-expedition',
      title: 'Tadoba Expedition',
      shortDescription: '5-day immersive tiger tracking in Maharashtra',
      duration: '5 days',
      price: 49900,
      highlights: [
        'Exclusive buffer zone access',
        'Night safari included',
        'Luxury jungle lodge',
        'Expert Maharashtrian guides'
      ],
      image: '/images/tigers/Majestic Tiger in Lush Greenery.jpeg'
    },
    {
      id: 'pench-wilderness',
      title: 'Pench Wilderness',
      shortDescription: 'Where The Jungle Book comes alive',
      duration: '4 days',
      price: 39900,
      highlights: [
        'Visit Mowgli\'s landscape',
        'Birdwatching special',
        'Eco-friendly cottages',
        'Elephant safari option'
      ],
      image: '/images/sightings/Group.jpg'
    },
    {
      id: 'kanha-wilderness',
      title: 'Kanha Wilderness',
      shortDescription: 'Where The Jungle Book comes alive',
      duration: '4 days',
      price: 39900,
      highlights: [
        'Visit Mowgli\'s landscape',
        'Birdwatching special',
        'Eco-friendly cottages',
        'Elephant safari option'
      ],
      image: '/images/sightings/Birds.jpg'
    },
    {
      id: 'bandhavgarh-wilderness',
      title: 'Bandhavgarh Wilderness',
      shortDescription: 'Where The Jungle Book comes alive',
      duration: '4 days',
      price: 39900,
      highlights: [
        'Visit Mowgli\'s landscape',
        'Birdwatching special',
        'Eco-friendly cottages',
        'Elephant safari option'
      ],
      image: '/images/sightings/Barasinga.jpg'
    },
    {
      id: 'ranthambore-wilderness',
      title: 'Ranthambore Wilderness',
      shortDescription: 'Where The Jungle Book comes alive',
      duration: '4 days',
      price: 39900,
      highlights: [
        'Visit Mowgli\'s landscape',
        'Birdwatching special',
        'Eco-friendly cottages',
        'Elephant safari option'
      ],
      image: '/images/sightings/Bear.jpg'
    },
    {
      id: 'panna-wilderness',
      title: 'Panna Wilderness',
      shortDescription: 'Where The Jungle Book comes alive',
      duration: '4 days',
      price: 39900,
      highlights: [
        'Visit Mowgli\'s landscape',
        'Birdwatching special',
        'Eco-friendly cottages',
        'Elephant safari option'
      ],
      image: '/images/sightings/Eagle.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Safari Packages</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our curated selection of wildlife adventures across India's premier national parks
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.8
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {simplifiedPackages.map((pkg) => (
          <motion.div
            key={pkg.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between mb-3">
                <div className="flex items-center text-sm text-amber-600">
                  <span className="mr-2">📍</span>
                  {pkg.duration}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ₹{pkg.price.toLocaleString('en-IN')}
                  <span className="text-sm font-normal text-gray-500"> /person</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
              
              <ul className="mb-6 space-y-2">
                {pkg.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              <Link 
                href={`/packages/${pkg.id}`}
                className="block w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-center"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


// 'use client';

// import { ModernPricingPage } from "@/components/pricing/animated-glassy-pricing";

// export default function PackagesPage() {
//   const safariPackages = [
//     { 
//       planName: 'Pench', 
//       description: 'Immerse in Mowgli\'s landscape', 
//       price: '24,900', 
//       features: [
//         '3 Nights 4 Days',
//         '5 Jeep safaris',
//         'Luxury jungle resort',
//         'Nagpur transfers included'
//       ], 
//       buttonText: 'Book Now', 
//       isPopular: true
//     },
//     { 
//       planName: 'Tadoba', 
//       description: 'Maharashtra\'s tiger haven', 
//       price: '26,900', 
//       features: [
//         '3 Nights 4 Days',
//         'Prime tiger territory',
//         'Expert wildlife guides',
//         'Nagpur transfers'
//       ], 
//       buttonText: 'Book Now'
//     },
//     { 
//       planName: 'Kanha', 
//       description: 'Home of the rare barasingha', 
//       price: '34,900', 
//       features: [
//         '4 Nights 5 Days',
//         '6 Comprehensive safaris',
//         'Premium jungle lodge',
//         'Jabalpur transfers'
//       ], 
//       buttonText: 'Book Now'
//     },
//   ];

//   return (
//     <ModernPricingPage
//       title={
//         <>
//           Explore Our <span className="text-cyan-400">Safari Packages</span>
//         </>
//       }
//       subtitle="Tailored wildlife experiences in India's premier national parks"
//       plans={safariPackages}
//       showAnimatedBackground={true}
//     />
//   );
// }