// // import { sightings } from '@/app/utils/data';

// // export function SightingTracker() {
// //   return (
// //     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-16">
// //       <div className="flex justify-between items-center mb-6">
// //         <h3 className="text-xl font-bold">Recent Wildlife Sightings</h3>
// //         <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
// //           Updated Daily
// //         </span>
// //       </div>
      
// //       <div className="space-y-6">
// //         {sightings.map((sighting) => (
// //           <div key={sighting.id} className="border-b pb-6 last:border-0 last:pb-0">
// //             <div className="flex justify-between items-start mb-2">
// //               <div>
// //                 <p className="font-medium">
// //                   {new Date(sighting.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
// //                 </p>
// //                 <p className="text-sm text-gray-600">{sighting.location}</p>
// //               </div>
// //               <div className="flex gap-2">
// //                 {sighting.verified && (
// //                   <span className="flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
// //                     Verified Sighting
// //                   </span>
// //                 )}
// //               </div>
// //             </div>
            
// //             <div className="flex flex-wrap gap-2 my-3">
// //               {sighting.animals.map(animal => (
// //                 <span key={animal} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
// //                   {animal}
// //                 </span>
// //               ))}
// //             </div>
            
// //             <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200">
// //               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
      
// //       <button className="w-full mt-6 py-2 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
// //         View All Sightings
// //       </button>
// //     </div>
// //   );
// // }


// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { sightings } from '@/app/utils/data';

// export function SightingTracker() {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-16">
//       <div className="flex justify-between items-center mb-6">
//         <motion.h3 
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-xl font-bold"
//         >
//           Recent Wildlife Sightings
//         </motion.h3>
//         <motion.span
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
//         >
//           Updated Daily
//         </motion.span>
//       </div>
      
//       <div className="space-y-6">
//         {sightings.map((sighting) => (
//           <motion.div
//             key={sighting.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5 }}
//             className="border-b pb-6 last:border-0 last:pb-0"
//           >
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <p className="font-medium">
//                   {new Date(sighting.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
//                 </p>
//                 <p className="text-sm text-gray-600">{sighting.location}</p>
//               </div>
//               <div className="flex gap-2">
//                 {sighting.verified && (
//                   <motion.span
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ type: 'spring', stiffness: 500 }}
//                     className="flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
//                   >
//                     Verified Sighting
//                   </motion.span>
//                 )}
//               </div>
//             </div>
            
//             <div className="flex flex-wrap gap-2 my-3">
//               {sighting.animals.map((animal) => (
//                 <motion.span
//                   key={animal}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
//                 >
//                   {animal}
//                 </motion.span>
//               ))}
//             </div>
            
//             <motion.div
//               whileHover={{ scale: 1.01 }}
//               className="relative h-48 rounded-lg overflow-hidden border border-gray-200"
//             >
//               <Image
//                 src="/images/tigers/Majestic Tiger in Lush Greenery.jpeg"
//                 alt={`Wildlife sighting at ${sighting.location}`}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//                 quality={80}
//               />
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
      
//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="w-full mt-6 py-2 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
//       >
//         View All Sightings
//       </motion.button>
//     </div>
//   );
// }


'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { sightings } from '@/app/utils/data';

export function SightingTracker() {
  // Group sightings by date for better organization
  const groupedSightings = sightings.reduce((acc, sighting) => {
    const date = new Date(sighting.date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(sighting);
    return acc;
  }, {});

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-16">
      <div className="flex justify-between items-center mb-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold"
        >
          Wildlife Gallery
        </motion.h3>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
        >
          {sightings.length} Recent Sightings
        </motion.span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sightings.map((sighting) => (
          <motion.div
            key={sighting.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-gray-200"
          >
            {/* Image with hover overlay */}
            <div className="aspect-square overflow-hidden">
              <Image
                src={sighting.image}
                alt={`Sighting of ${sighting.animals.join(', ')} at ${sighting.location}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                quality={85}
              />
            </div>

            {/* Info overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-medium">
                    {new Date(sighting.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-gray-300">{sighting.location}</p>
                </div>
                {sighting.verified && (
                  <span className="flex items-center text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {sighting.animals.map((animal) => (
                  <span 
                    key={animal}
                    className="bg-green-600/90 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {animal}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
      >
        Load More Sightings
      </motion.button>
    </div>
  );
}