// export function AboutUs() {
//   return (
//     <section className="max-w-4xl mx-auto text-center">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Chalo Jungle</h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Since 2010, we've been creating unforgettable jungle experiences with 
//         expert naturalists and ethical tourism practices. Our team of 
//         wildlife enthusiasts brings you closer to nature while preserving 
//         its delicate balance.
//       </p>
//       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
//     </section>
//   );
// }

// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import tigerImage from '@/public/images/tigers/Majestic-Tiger-in-Wild.jpeg'; // Adjust path as needed

// export function AboutUs() {
//   return (
//     <section className="max-w-4xl mx-auto text-center overflow-hidden">
//       {/* Animated Heading */}
//       <div className="overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
//           whileInView={{ 
//             opacity: 1, 
//             clipPath: 'inset(0 0% 0 0)',
//           }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <h2 className="inline-block text-3xl font-bold text-gray-900 mb-6 font-roboto">
//             Chalo Jungle
//           </h2>
//         </motion.div>
//       </div>

//       {/* Animated Paragraph */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//         }}
//       >
//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: { 
//               opacity: 1, 
//               y: 0,
//               transition: { duration: 0.8, ease: "easeOut" }
//             }
//           }}
//           className="text-lg text-gray-600 mb-8 font-roboto"
//         >
//           Since 2010, we've been creating unforgettable jungle experiences with 
//           expert naturalists and ethical tourism practices.
//         </motion.p>
//       </motion.div>

//       {/* Animated Tiger Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//         transition={{ 
//           delay: 0.3, 
//           duration: 0.8,
//           ease: "easeOut"
//         }}
//         className="relative w-full h-64 rounded-xl overflow-hidden"
//       >
//         <Image
//           src="/images/tigers/Majestic Tiger in Wild.jpeg"
//           alt="Majestic Tiger in Wild"
//           fill
//           sizes="(max-width: 768px) 100vw, 50vw"
//           className="object-cover"
//           priority={false}
//         />
//       </motion.div>
//     </section>
//   );
// }


// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export function AboutUs() {
//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // 0.2s delay between each child
//         delayChildren: 0.3, // Start after header animation
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   return (
//     <div className="bg-green-50 py-16">
//       <div className="container mx-auto px-4 max-w-5xl">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Why Trust Us With Your Jungle Dream?
//           </h2>
//           <div className="w-20 h-1 bg-green-600 mx-auto"></div>
//         </motion.div>

//         {/* 3-Column Grid with Stagger */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {/* Column 1 - Luxury */}
//           <motion.div
//             variants={item}
//             whileHover={{ y: -8, transition: { duration: 0.2 } }}
//             className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//           >
//             <motion.div 
//               initial={{ scale: 0.8 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-green-600 text-4xl mb-4"
//             >
//               🏕️
//             </motion.div>
//             <h3 className="text-xl font-bold mb-3">Tailor-Made Wilderness</h3>
//             <p className="text-gray-600">
//               We partner exclusively with eco-conscious lodges and boutique camps in India's tiger territories. 
//               Each property is handpicked for its 4-5 star comforts, conservation efforts, and authentic jungle charm.
//             </p>
//           </motion.div>

//           {/* Column 2 - Local Expertise */}
//           <motion.div
//             variants={item}
//             whileHover={{ y: -8, transition: { duration: 0.2 } }}
//             className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//           >
//             <motion.div 
//               initial={{ scale: 0.8 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: 0.6 }}
//               className="text-green-600 text-4xl mb-4"
//             >
//               🌏
//             </motion.div>
//             <h3 className="text-xl font-bold mb-3">Born of the Jungle</h3>
//             <p className="text-gray-600">
//               Our team grew up near Ranthambore and Bandhavgarh. We don't just operate safaris - we breathe the jungle. 
//               Let us show you secret waterholes, rare bird nests, and tiger tracks most miss.
//             </p>
//           </motion.div>

//           {/* Column 3 - Awards */}
//           <motion.div
//             variants={item}
//             whileHover={{ y: -8, transition: { duration: 0.2 } }}
//             className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//           >
//             <motion.div 
//               initial={{ scale: 0.8 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: 0.8 }}
//               className="text-green-600 text-4xl mb-4"
//             >
//               🏆
//             </motion.div>
//             <h3 className="text-xl font-bold mb-3">Award-Winning Guidance</h3>
//             <p className="text-gray-600">
//               Recognized by Lonely Planet and TOFTigers for sustainable wildlife tourism. 
//               Our naturalists have 100+ combined years of tracking experience.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Story Section */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="mt-16 bg-green-800 text-white rounded-2xl overflow-hidden"
//         >
//           <div className="md:flex">
//             <div className="md:w-1/2 p-8 md:p-12">
//               <h3 className="text-2xl font-bold mb-4">Our Story</h3>
//               <p className="mb-6">
//                 Founded in 2010 by third-generation naturalist Rajesh Patil, WildTrails began 
//                 as a single jeep showing friends the hidden trails of Tadoba. Today, we're a 
//                 family of 42 jungle enthusiasts dedicated to ethical wildlife experiences.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-2 bg-white text-green-800 rounded-lg font-medium"
//               >
//                 Meet the Team
//               </motion.button>
//             </div>
//             <div className="md:w-1/2 relative h-64 md:h-auto">
//               <Image
//                 src="/images/guides/Founder.jpg"
//                 alt="Founder tracking tigers in Tadoba"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4 }}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-lg transition-all"
//           >
//             Design My Safari
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"
import Image from "next/image";
import { Timeline } from "@/components/timeline/timeline";

export function AboutUs() {
  const timelineData = [
    {
      title: "Our Founding",
      date: "2015",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-normal mb-8">
            Eco Safari Zone was founded with a vision to create sustainable wildlife 
            experiences that benefit both nature and local communities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/destinations/nick-_EAW5WgV5Ec-unsplash.jpg"
              alt="Founding team"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/destinations/ling-hua-vV-_aJQF_Zk-unsplash.jpg"
              alt="First safari"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "First Conservation Award",
      date: "2018",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-normal mb-8">
            Recognized for our innovative approach to eco-tourism and community 
            engagement, receiving the National Wildlife Conservation Award.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/destinations/pexels-beard-kid-401529963-30426673.jpg"
              alt="Award ceremony"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/destinations/pexels-deanne-scanlan-2219657-26780316.jpg"
              alt="Team celebration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Expansion",
      date: "2020-Present",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-normal mb-4">
            Expanded our operations to 5 new national parks while maintaining our 
            commitment to sustainability and conservation.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-foreground text-sm">
              ✅ 15+ expert guides trained
            </div>
            <div className="flex gap-2 items-center text-foreground text-sm">
              ✅ 5 new sustainable lodges built
            </div>
            <div className="flex gap-2 items-center text-foreground text-sm">
              ✅ 100+ local community members employed
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/destinations/pexels-elina-sazonova-4206649.jpg"
              alt="New lodge"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/destinations/pexels-reyney-poojary-261354873-12667723.jpg"
              alt="Team training"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Eco Safari Zone
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Discover India's untamed wilderness with our expert-guided safaris that 
              offer intimate encounters with magnificent wildlife in their natural habitat.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9Z" />
                    <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M9 12v6a3 3 0 0 0 3 3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Expert Guides</h3>
                  <p className="text-muted-foreground">
                    Our naturalists have 10+ years experience tracking wildlife.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M12 2v4" />
                    <path d="m16.2 7.8 2.9-2.9" />
                    <path d="M18 12h4" />
                    <path d="m16.2 16.2 2.9 2.9" />
                    <path d="M12 18v4" />
                    <path d="m7.8 16.2-2.9 2.9" />
                    <path d="M6 12H2" />
                    <path d="m7.8 7.8-2.9-2.9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sustainable Tourism</h3>
                  <p className="text-muted-foreground">
                    Committed to conservation and supporting local communities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Award-Winning</h3>
                  <p className="text-muted-foreground">
                    Recognized as India's premier safari destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/destinations/nick-_EAW5WgV5Ec-unsplash.jpg"
              alt="About Eco Safari Zone"
              width={600}
              height={600}
              className="rounded-xl shadow-lg object-cover aspect-square"
            />
          </div>
        </div>

        {/* Our Journey Timeline Section */}
        <div className="mt-20">
          <Timeline 
            data={timelineData} 
            title="Our Journey" 
            description="Here's a timeline of our company's growth and achievements."
          />
        </div>
      </div>
    </section>
  );
}



