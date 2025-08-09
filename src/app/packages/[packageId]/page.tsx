import { notFound } from 'next/navigation';
import { safariPackages } from '@/app/utils/data';
import Image from 'next/image';

const allPackages = [
  ...safariPackages,
  {
    id: 'tadoba-expedition',
    title: 'Tadoba Expedition',
    description: '5-day immersive tiger tracking in Maharashtra',
    duration: '5 days',
    price: 9000,
    highlights: [
      'Exclusive buffer zone access',
      'Night safari included',
      'Luxury jungle lodge',
      'Expert Maharashtrian guides'
    ],
    image: '/images/tigers/Majestic Tiger in Lush Greenery.jpeg',
    safariInfo: {
      bestTime: 'February to May',
      animals: 'Tigers, leopards, sloth bears',
      area: '625 sq km'
    },
    resorts: [
      {
        name: 'Tadoba Tiger King Resort',
        rating: '4.7/5',
        facilities: ['Swimming pool', 'Spa', 'Jungle-facing rooms'],
        price: '$130/night'
      }
    ],
    packages: [
      {
        name: 'Premium Package',
        price: '$599',
        includes: ['Private guide', 'All meals', 'Luxury accommodation']
      }
    ]
  },
  {
    id: 'pench-wilderness',
    title: 'Pench Wilderness',
    description: 'Where The Jungle Book comes alive',
    duration: '4 days',
    price: 8000,
    highlights: [
      'Visit Mowgli\'s landscape',
      'Birdwatching special',
      'Eco-friendly cottages',
      'Elephant safari option'
    ],
    image: '/images/sightings/Group.jpg',
    safariInfo: {
      bestTime: 'October to June',
      animals: 'Tigers, leopards, wild dogs',
      area: '758 sq km'
    },
    resorts: [
      {
        name: 'Pench Tree Lodge',
        rating: '4.8/5',
        facilities: ['Swimming pool', 'Spa', 'Jungle view rooms'],
        price: '$120/night'
      }
    ],
    packages: [
      {
        name: 'Standard Package',
        price: '$399',
        includes: ['3 nights stay', '6 safaris', 'All meals']
      }
    ]
  },
  {
    id: 'kanha-wilderness',
    title: 'Kanha Wilderness',
    description: 'Home to the rare hardground barasingha',
    duration: '4 days',
    price: 8000,
    highlights: [
      'See the endangered barasingha',
      'Bamboo forests safari',
      'Jungle star-gazing',
      'Tribal village visit'
    ],
    image: '/images/sightings/Birds.jpg',
    safariInfo: {
      bestTime: 'October to June',
      animals: 'Tigers, barasingha, wild dogs',
      area: '940 sq km'
    },
    resorts: [
      {
        name: 'Kanha Earth Lodge',
        rating: '4.9/5',
        facilities: ['Organic farm', 'Wildlife library', 'Nature trails'],
        price: '$150/night'
      }
    ],
    packages: [
      {
        name: 'Barasingha Special',
        price: '$549',
        includes: ['4 nights stay', 'Safari in meadows zone', 'All meals']
      }
    ]
  },
  {
    id: 'bandhavgarh-wilderness',
    title: 'Bandhavgarh Wilderness',
    description: 'Highest tiger density in India',
    duration: '4 days',
    price: 8000,
    highlights: [
      'Ancient Bandhavgarh Fort',
      'Tala zone premium access',
      'Elephant-back tiger tracking',
      'Photography hides'
    ],
    image: '/images/sightings/Barasinga.jpg',
    safariInfo: {
      bestTime: 'November to April',
      animals: 'Tigers, leopards, white tigers',
      area: '716 sq km'
    },
    resorts: [
      {
        name: 'Treehouse Hideaway',
        rating: '4.9/5',
        facilities: ['Treehouse accommodation', 'Private decks', 'Spa'],
        price: '$180/night'
      }
    ],
    packages: [
      {
        name: 'Tiger Photography Special',
        price: '$679',
        includes: ['Photography hides access', 'Private jeep', 'Expert guide']
      }
    ]
  },
  {
    id: 'ranthambore-wilderness',
    title: 'Ranthambore Wilderness',
    description: 'Tigers amidst ancient ruins',
    duration: '4 days',
    price: 8000,
    highlights: [
      'Ranthambore Fort views',
      'Lakeside safari zones',
      'Rajput heritage stays',
      'Crocodile spotting'
    ],
    image: '/images/sightings/Bear.jpg',
    safariInfo: {
      bestTime: 'October to June',
      animals: 'Tigers, crocodiles, leopards',
      area: '392 sq km'
    },
    resorts: [
      {
        name: 'Oberoi Vanyavilas',
        rating: '5/5',
        facilities: ['Luxury tents', 'Fine dining', 'Spa'],
        price: '$450/night'
      }
    ],
    packages: [
      {
        name: 'Luxury Fort Package',
        price: '$999',
        includes: ['Luxury accommodation', 'Private safaris', 'Gourmet meals']
      }
    ]
  },
  {
    id: 'panna-wilderness',
    title: 'Panna Wilderness',
    description: 'Ken River and tiger country',
    duration: '4 days',
    price: 8000,
    highlights: [
      'Diamond mining history',
      'Ken River boat safari',
      'Ancient rock paintings',
      'Night safari options'
    ],
    image: '/images/sightings/Eagle.jpg',
    safariInfo: {
      bestTime: 'November to April',
      animals: 'Tigers, crocodiles, vultures',
      area: '542 sq km'
    },
    resorts: [
      {
        name: 'Ken River Lodge',
        rating: '4.5/5',
        facilities: ['River view rooms', 'Boat rides', 'Jungle walks'],
        price: '$110/night'
      }
    ],
    packages: [
      {
        name: 'River & Jungle Combo',
        price: '$499',
        includes: ['Boat safaris', 'Jungle drives', 'All meals']
      }
    ]
  }
];

export default async function PackagePage({ params }: { params: Promise<{ packageId: string }> }) {
  const { packageId } = await params;
  const safariPackage = allPackages.find(pkg => pkg.id === packageId);
  
  if (!safariPackage) {
    return notFound();
  }

  const packageDescription =
    'description' in safariPackage
      ? safariPackage.description
      : safariPackage.shortDescription;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-96 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src={safariPackage.image}
                alt={safariPackage.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{safariPackage.title}</h1>
              <p className="text-gray-600 mb-6">{packageDescription}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <span className="ml-2 text-gray-700">4.8 (142 reviews)</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Package Highlights</h3>
                  <ul className="space-y-2">
                    {safariPackage.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {safariPackage.safariInfo && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Safari Information</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Best Time:</span>
                        <span className="font-medium">{safariPackage.safariInfo.bestTime}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Wildlife:</span>
                        <span className="font-medium">{safariPackage.safariInfo.animals}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Park Area:</span>
                        <span className="font-medium">{safariPackage.safariInfo.area}</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              {safariPackage.resorts && safariPackage.resorts.length > 0 && (
                <div className="border-t pt-6 mb-8">
                  <h3 className="font-semibold text-lg mb-4">Featured Resorts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {safariPackage.resorts.map((resort, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                        <h4 className="font-bold text-lg mb-1">{resort.name}</h4>
                        <div className="flex items-center mb-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold mr-2">
                            {resort.rating}
                          </span>
                          <span className="text-gray-600 text-sm">{resort.price}</span>
                        </div>
                        <ul className="space-y-1 text-sm">
                          {resort.facilities.map((facility, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-green-500 mr-1">•</span>
                              <span>{facility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Itinerary</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Day 1: Arrival & Evening Safari</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Arrive at jungle lodge by 2 PM</li>
                      <li>Afternoon tea with briefing</li>
                      <li>Evening safari (3:30 PM - 6:30 PM)</li>
                      <li>Dinner under the stars</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Day 2: Full Safari Experience</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Morning safari (5:30 AM - 9:30 AM)</li>
                      <li>Breakfast at lodge</li>
                      <li>Nature walk with naturalist</li>
                      <li>Evening safari in different zone</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 sticky top-6">
              <h3 className="font-semibold text-lg mb-4">Pricing Details</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Package Price</span>
                  <span className="font-medium">₹{safariPackage.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Park Entry Fees</span>
                  <span className="font-medium">₹1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guide Charges</span>
                  <span className="font-medium">₹800</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-medium text-lg">
                  <span>Total</span>
                  <span>₹{safariPackage.price + 1500 + 800}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                Book Now
              </button>
              
              {safariPackage.packages && safariPackage.packages.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Available Packages</h4>
                  <div className="space-y-3">
                    {safariPackage.packages.map((pkg, index) => (
                      <div key={index} className="border p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium">{pkg.name}</h5>
                          <span className="font-bold">{pkg.price}</span>
                        </div>
                        <ul className="text-sm space-y-1">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-2">Special Offer</h4>
                <p className="text-amber-700 text-sm">Book 30 days in advance and save 10% on your total package!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


