// export function OurOfferings() {
//   const offerings = [
//     {
//       title: "Transportation",
//       description: "Comfortable AC vehicles for all transfers",
//       icon: "🚗"
//     },
//     {
//       title: "Resort Booking",
//       description: "Luxury jungle lodges & eco-resorts",
//       icon: "🏨"
//     },
    // {
    //   title: "Safari Booking",
    //   description: "Guaranteed permits for all zones",
    //   icon: "🐅"
    // },
    // {
    //   title: "Guided Safaris",
    //   description: "Expert naturalists with 10+ years experience",
    //   icon: "👨‍🏫"
    // },
    // {
    //   title: "Photography Guidance",
    //   description: "Wildlife photography tips & setups",
    //   icon: "📷"
    // }
//   ];

//   return (
//     <section>
//       <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Offerings</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {offerings.map((item, index) => (
//           <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//             <span className="text-3xl mb-3 block">{item.icon}</span>
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-gray-600">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function OurOfferings() {
  const offerings = [
    {
      title: "Transportation",
      description: "Comfortable AC vehicles for all transfers",
      icon: "🚗"
    },
    {
      title: "Resort Booking",
      description: "Luxury jungle lodges & eco-resorts",
      icon: "🏨"
    },
     {
      title: "Safari Booking",
      description: "Guaranteed permits for all zones",
      icon: "🐅"
    },
    {
      title: "Guided Safaris",
      description: "Expert naturalists with 10+ years experience",
      icon: "👨‍🏫"
    },
    {
      title: "Photography Guidance",
      description: "Wildlife photography tips & setups",
      icon: "📷"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Our Offerings
      </h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {offerings.map((offering, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <span className="text-3xl mb-3 block">{offering.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
            <p className="text-gray-600">{offering.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}