"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { HeroGalleryDefault } from '../blocks/demo/hero-gallery-demo';
import { AboutUs } from '../AboutUs';
import { WhyChooseUsDemo } from '../blocks/demo/why-choose-us-demo';
import { TestimonialsDemo } from '../blocks/demo/testimonials-demo';
import { WildlifeGalleryDemo } from '../blocks/demo/wildlife-gallery-demo';

export default function HomeSection() {
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
        {/* <section className="relative bg-gradient-to-br from-amber-100 to-amber-50 overflow-hidden">
          <div className="container mx-auto px-4 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6 leading-tight"
              >
                Embark on <span className="text-green-800">Wild</span> Adventures
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg"
              >
                Discover India's majestic wildlife with our expertly crafted safari experiences in the most breathtaking national parks.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/packages" className="bg-or-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                  Explore Packages
                </Link>
                <Link href="#features" className="border-2 border-green-800 text-green-800 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-green-800 hover:text-white">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square w-full h-auto"
              >
                <Image 
                  src="/images/tigers/Majestic Tiger in Lush Greenery.jpeg" 
                  alt="Bengal Tiger in jungle" 
                  fill
                  className="object-cover rounded-3xl shadow-xl"
                  priority
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 opacity-20 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-300 opacity-20 rounded-full"></div>
            </div>
          </div>
        </section> */}

{/* <section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-green-800 mb-4">About Our Safari</h2>
      <h3 className="text-2xl md:text-3xl text-gray-700 mb-6">Discover India's Untamed Wilderness</h3>
      
      <div className="space-y-6 text-lg text-gray-700 mb-12">
        <p>
          Embark on an extraordinary journey through India's most pristine national parks and wildlife reserves. 
          Our expert-guided safaris offer intimate encounters with magnificent Bengal tigers, elusive leopards, 
          gentle giants, and hundreds of exotic bird species in their natural habitat.
        </p>
        <p>
          With over two decades of experience, we've perfected the art of wildlife photography safaris, 
          conservation education, and sustainable tourism that respects both nature and local communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Professional Safari Vehicles",
            description: "Safari jeep navigating through daily tourist routes"
          },
          {
            title: "Expert Wildlife Tracking",
            description: "Our experienced guides know every trail and animal behavior pattern in the jungle."
          },
          {
            title: "Photography Opportunities",
            description: "Capture stunning moments with professional photography guidance and prime viewing spots."
          },
          {
            title: "Award-Winning Experience",
            description: "Recognized as India's premier safari destination with countless satisfied adventurers."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 className="text-xl font-semibold text-green-800 mb-3">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section> */}

 <HeroGalleryDefault/>
 <AboutUs/>

      {/* Features Section */}
      {/* <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-green-800 mb-4">Why Choose Our Safaris</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We combine expert knowledge with unforgettable experiences to bring you closer to nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PawPrint className="w-8 h-8 text-orange-500" />,
                title: "Expert Guides",
                description: "Our naturalists have 10+ years experience tracking wildlife"
              },
              {
                icon: <Binoculars className="w-8 h-8 text-yellow-500" />,
                title: "Premium Equipment",
                description: "High-quality binoculars and safari vehicles provided"
              },
              {
                icon: <Map className="w-8 h-8 text-teal-400" />,
                title: "Exclusive Zones",
                description: "Access to restricted areas with high wildlife density"
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-500" />,
                title: "Eco-Friendly",
                description: "Sustainable tourism that supports conservation"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-green-100 bg-opacity-50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <WhyChooseUsDemo/>

      {/* Popular Packages Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-green-800 mb-4">Featured Safari Packages</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Handpicked experiences for every type of wildlife enthusiast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "pench-3n4d",
                title: "Pench Tiger Safari",
                duration: "3 Nights / 4 Days",
                price: "₹8,000",
                image: "/images/sightings/Bengal Tiger.jpg",
                highlight: "Mowgli's Jungle Book Land"
              },
              {
                id: "kanha-3n4d",
                title: "Kanha Wilderness",
                duration: "3 Nights / 4 Days",
                price: "₹8,000",
                image: "/images/sightings/Barasinga.jpg",
                highlight: "Rare Barasingha Deer"
              },
              {
                id: "bandhavgarh-3n4d",
                title: "Bandhavgarh Quest",
                duration: "3 Nights / 4 Days",
                price: "₹8,000",
                image: "/images/sightings/Cruel Tiger.jpg",
                highlight: "Highest Tiger Density"
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                    <p className="text-green-300">{pkg.highlight}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">{pkg.duration}</span>
                    <span className="text-xl font-bold text-green-600">{pkg.price}</span>
                  </div>
                  <Link 
                    href={`/packages/${pkg.id}`}
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/packages"
              className="inline-block border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

    <WildlifeGalleryDemo/>
      {/* Testimonial Section */}
      {/* <section className="py-16 md:py-24 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">What Our Guests Say</h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              Hear from travelers who've experienced our safaris firsthand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Saw 7 tigers in 3 days! Our guide knew every movement pattern of the animals.",
                author: "Rajesh P.",
                rating: 5,
                tour: "Bandhavgarh Premium Safari"
              },
              {
                quote: "The treehouse lodge was magical - waking up to bird calls and jungle sounds.",
                author: "Priya M.",
                rating: 5,
                tour: "Kanha Wilderness Package"
              },
              {
                quote: "Perfect mix of adventure and comfort. The night safari was unforgettable!",
                author: "Arjun S.",
                rating: 4,
                tour: "Tadoba Expedition"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-800 bg-opacity-50 p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-lg mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-green-300 text-sm">{testimonial.tour}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <TestimonialsDemo/>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-6"
          >
            Ready for Your Wild Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Contact our safari specialists to plan your perfect wildlife experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link 
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Get in Touch
            </Link>
            <Link 
              href="tel:+919876543210"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> +91 9834626340
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}