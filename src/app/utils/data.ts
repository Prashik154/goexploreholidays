import { 
   
  SafariZone, 
  Testimonial, 
  FAQItem, 
  Guide,
  Sighting,
  SafariPackage
} from '@/types/safari';


// export const safariPackages: SafariPackage[] = [
//   {
//     id: 'pench-3n4d',
//     title: '3 Nights 4 Days - Pench Tiger Safari',
//     shortDescription: 'Immerse yourself in the wild with 5 thrilling jeep safaris',
//     duration: '3 Nights 4 Days',
//     price: 24900,
//     image: '/images/pench-main.jpg',
//     parkInfo: {
//       name: 'Pench National Park',
//       bestTime: 'October to June',
//       animals: 'Tigers, leopards, wild dogs, gaur',
//       area: '758 sq km',
//       specialty: 'Mowgli\'s landscape from The Jungle Book'
//     },
//     highlights: [
//       '5 Jeep safaris in core/buffer zones',
//       'Full board meals with local flavors',
//       'Comfortable jungle resort stay',
//       'Expert naturalist guides',
//       'Nagpur transfer included'
//     ],
//     itinerary: [
//       {
//         day: 1,
//         title: 'Arrival & Jungle Immersion',
//         activities: [
//           'Arrival at Pench National Park',
//           'Check-in at jungle resort',
//           'Leisure time to explore resort facilities',
//           'Orientation with naturalist'
//         ],
//         meals: ['Lunch', 'Dinner'],
//         icon: <MapPin className="text-green-600" />
//       },
//       {
//         day: 2,
//         title: 'First Safari Adventure',
//         activities: [
//           'Early morning safari in core zone',
//           'Breakfast at resort',
//           'Rest and relaxation',
//           'Evening safari in buffer zone'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Binoculars className="text-green-600" />
//       },
//       {
//         day: 3,
//         title: 'Deep Forest Exploration',
//         activities: [
//           'Dawn safari with tiger tracking',
//           'Nature walk around resort',
//           'Afternoon safari in different zone',
//           'Cultural evening with local performances'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <TreePine className="text-green-600" />
//       },
//       {
//         day: 4,
//         title: 'Final Safari & Departure',
//         activities: [
//           'Last morning safari',
//           'Breakfast and check-out',
//           'Transfer to Nagpur',
//           'Departure'
//         ],
//         meals: ['Breakfast'],
//         icon: <Car className="text-green-600" />
//       }
//     ],
//     inclusions: [
//       '3 nights accommodation in eco-resort',
//       'All meals (breakfast, lunch, dinner)',
//       '5 shared jeep safaris with permits',
//       'Resort to gate transfers',
//       'Nagpur airport/station pickup-drop',
//       'Naturalist guidance',
//       'Forest entry fees and taxes'
//     ],
//     exclusions: [
//       'Alcoholic beverages',
//       'Personal expenses',
//       'Camera fees',
//       'Tips to staff',
//       'Travel insurance',
//       'Anything not mentioned in inclusions'
//     ],
//     resort: {
//       name: 'Pench Tree Lodge',
//       rating: '4.8/5 (Wildlife Haven)',
//       description: 'Nestled in 40 acres of private forest with eco-friendly cottages featuring private decks overlooking the jungle.',
//       images: [
//         '/images/pench-resort1.jpg',
//         '/images/pench-resort2.jpg',
//         '/images/pench-resort3.jpg'
//       ],
//       amenities: [
//         'Swimming pool',
//         'Spa & massage',
//         'Jungle-facing cottages',
//         'Organic restaurant',
//         'Nature trail',
//         'Library'
//       ]
//     }
//   },
//   {
//     id: 'tadoba-3n4d',
//     title: '3 Nights 4 Days - Tadoba Tiger Reserve',
//     shortDescription: 'Experience Maharashtra\'s premier tiger reserve with 5 exciting safaris',
//     duration: '3 Nights 4 Days',
//     price: 26900,
//     image: '/images/tadoba-main.jpg',
//     parkInfo: {
//       name: 'Tadoba Andhari Tiger Reserve',
//       bestTime: 'October to June',
//       animals: 'Tigers, leopards, sloth bears, wild dogs',
//       area: '1,727 sq km',
//       specialty: 'Highest tiger density in Maharashtra'
//     },
//     highlights: [
//       '5 Jeep safaris in prime tiger territory',
//       'Luxury jungle resort accommodation',
//       'Expert wildlife photographers as guides',
//       'Traditional Maharashtrian cuisine',
//       'Nagpur transfer included'
//     ],
//     itinerary: [
//       {
//         day: 1,
//         title: 'Arrival & Forest Welcome',
//         activities: [
//           'Arrival at Tadoba Tiger Reserve',
//           'Check-in at luxury resort',
//           'Welcome drink and briefing',
//           'Evening nature walk'
//         ],
//         meals: ['Lunch', 'Dinner'],
//         icon: <MapPin className="text-green-600" />
//       },
//       {
//         day: 2,
//         title: 'Tiger Territory Exploration',
//         activities: [
//           'Early morning safari in Moharli zone',
//           'Breakfast at resort',
//           'Leisure time by pool',
//           'Afternoon safari in Kolsa zone'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Binoculars className="text-green-600" />
//       },
//       {
//         day: 3,
//         title: 'Deep Forest Adventure',
//         activities: [
//           'Dawn safari with tiger tracking',
//           'Bird watching session',
//           'Safari in Tadoba zone',
//           'Campfire with local stories'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <TreePine className="text-green-600" />
//       },
//       {
//         day: 4,
//         title: 'Final Hunt & Farewell',
//         activities: [
//           'Last morning safari',
//           'Breakfast and packing',
//           'Transfer to Nagpur',
//           'Departure'
//         ],
//         meals: ['Breakfast'],
//         icon: <Car className="text-green-600" />
//       }
//     ],
//     inclusions: [
//       '3 nights luxury resort accommodation',
//       'All meals with local specialties',
//       '5 shared jeep safaris with permits',
//       'All transfers and transportation',
//       'Nagpur airport/station transfers',
//       'Professional naturalist guides',
//       'All entry fees and taxes'
//     ],
//     exclusions: [
//       'Alcoholic beverages',
//       'Personal expenses and shopping',
//       'Camera and video fees',
//       'Tips and gratuities',
//       'Travel insurance',
//       'Items not mentioned in inclusions'
//     ],
//     resort: {
//       name: 'Tadoba Tiger King Resort',
//       rating: '4.9/5 (Luxury Wildlife)',
//       description: 'Premium eco-resort with spacious villas, infinity pool, and panoramic forest views.',
//       images: [
//         '/images/tadoba-resort1.jpg',
//         '/images/tadoba-resort2.jpg',
//         '/images/tadoba-resort3.jpg'
//       ],
//       amenities: [
//         'Infinity swimming pool',
//         'Full-service spa',
//         'Forest-view villas',
//         'Multi-cuisine restaurant',
//         'Conference facilities',
//         'Gift shop'
//       ]
//     }
//   },
//   {
//     id: 'kanha-4n5d',
//     title: '4 Nights 5 Days - Kanha National Park',
//     shortDescription: 'Discover the inspiration behind The Jungle Book with 6 comprehensive safaris',
//     duration: '4 Nights 5 Days',
//     price: 34900,
//     image: '/images/kanha-main.jpg',
//     parkInfo: {
//       name: 'Kanha National Park',
//       bestTime: 'October to June',
//       animals: 'Tigers, barasingha, leopards, wild dogs',
//       area: '2,074 sq km',
//       specialty: 'Home of the rare barasingha (swamp deer)'
//     },
//     highlights: [
//       '6 Jeep safaris across different zones',
//       'Barasingha and tiger sightings',
//       'Premium jungle lodge stay',
//       'Photography workshops',
//       'Jabalpur transfer included'
//     ],
//     itinerary: [
//       {
//         day: 1,
//         title: 'Arrival & Park Introduction',
//         activities: [
//           'Arrival at Kanha National Park',
//           'Check-in at premium lodge',
//           'Park orientation session',
//           'Evening leisure at resort'
//         ],
//         meals: ['Lunch', 'Dinner'],
//         icon: <MapPin className="text-green-600" />
//       },
//       {
//         day: 2,
//         title: 'Kanha Zone Safari',
//         activities: [
//           'Early morning safari in Kanha zone',
//           'Breakfast and rest',
//           'Photography workshop',
//           'Evening safari in Sarhi zone'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Camera className="text-green-600" />
//       },
//       {
//         day: 3,
//         title: 'Barasingha Spotting',
//         activities: [
//           'Dawn safari focusing on barasingha',
//           'Village visit and cultural exchange',
//           'Afternoon safari in Mukki zone',
//           'Night sounds of jungle experience'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <TreePine className="text-green-600" />
//       },
//       {
//         day: 4,
//         title: 'Tiger Territory Deep Dive',
//         activities: [
//           'Intensive tiger tracking safari',
//           'Nature interpretation walk',
//           'Final evening safari',
//           'Farewell dinner with cultural program'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Binoculars className="text-green-600" />
//       },
//       {
//         day: 5,
//         title: 'Departure Day',
//         activities: [
//           'Last morning safari',
//           'Breakfast and check-out',
//           'Transfer to Jabalpur',
//           'Departure'
//         ],
//         meals: ['Breakfast'],
//         icon: <Car className="text-green-600" />
//       }
//     ],
//     inclusions: [
//       '4 nights premium lodge accommodation',
//       'All meals with organic options',
//       '6 shared jeep safaris with permits',
//       'Village visit and cultural activities',
//       'Jabalpur airport/station transfers',
//       'Photography workshop sessions',
//       'All entry fees and government taxes'
//     ],
//     exclusions: [
//       'Alcoholic beverages and soft drinks',
//       'Personal expenses and laundry',
//       'Camera fees in forest',
//       'Tips to guides and staff',
//       'Travel insurance coverage',
//       'Any services not mentioned in inclusions'
//     ],
//     resort: {
//       name: 'Kanha Earth Lodge',
//       rating: '4.7/5 (Eco Excellence)',
//       description: 'Award-winning eco-lodge with sustainable architecture and organic gardens in the heart of Kanha buffer zone.',
//       images: [
//         '/images/kanha-resort1.jpg',
//         '/images/kanha-resort2.jpg',
//         '/images/kanha-resort3.jpg'
//       ],
//       amenities: [
//         'Organic swimming pool',
//         'Ayurvedic spa treatments',
//         'Eco-friendly cottages',
//         'Farm-to-table restaurant',
//         'Medicinal plant garden',
//         'Library and games room'
//       ]
//     }
//   },
//   {
//     id: 'bandhavgarh-3n4d',
//     title: '3 Nights 4 Days - Bandhavgarh Fort Safari',
//     shortDescription: 'Explore the land of highest tiger density with ancient fort backdrop',
//     duration: '3 Nights 4 Days',
//     price: 28900,
//     image: '/images/bandhavgarh-main.jpg',
//     parkInfo: {
//       name: 'Bandhavgarh National Park',
//       bestTime: 'October to June',
//       animals: 'Tigers, leopards, blue bulls, spotted deer',
//       area: '716 sq km',
//       specialty: 'Highest density of tigers in India'
//     },
//     highlights: [
//       '5 Safaris in tiger-rich zones',
//       'Ancient Bandhavgarh Fort visit',
//       'Luxury tented accommodation',
//       'White tiger legacy exploration',
//       'Katni transfer included'
//     ],
//     itinerary: [
//       {
//         day: 1,
//         title: 'Fort & Forest Arrival',
//         activities: [
//           'Arrival at Bandhavgarh National Park',
//           'Check-in at luxury camp',
//           'Bandhavgarh Fort visit',
//           'Evening orientation'
//         ],
//         meals: ['Lunch', 'Dinner'],
//         icon: <MapPin className="text-green-600" />
//       },
//       {
//         day: 2,
//         title: 'Tala Zone Tiger Hunt',
//         activities: [
//           'Early morning safari in Tala zone',
//           'Breakfast at camp',
//           'White tiger museum visit',
//           'Evening safari in Magdhi zone'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Binoculars className="text-green-600" />
//       },
//       {
//         day: 3,
//         title: 'Khitauli Zone Adventure',
//         activities: [
//           'Dawn safari in Khitauli zone',
//           'Ancient caves exploration',
//           'Afternoon safari tracking',
//           'Stargazing session'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Star className="text-green-600" />
//       },
//       {
//         day: 4,
//         title: 'Final Tiger Quest',
//         activities: [
//           'Last morning safari',
//           'Breakfast and packing',
//           'Transfer to Katni',
//           'Departure'
//         ],
//         meals: ['Breakfast'],
//         icon: <Car className="text-green-600" />
//       }
//     ],
//     inclusions: [
//       '3 nights luxury tented accommodation',
//       'All meals with royal cuisine',
//       '5 shared jeep safaris with permits',
//       'Bandhavgarh Fort visit',
//       'Katni railway station transfers',
//       'Museum entry fees',
//       'All forest fees and taxes'
//     ],
//     exclusions: [
//       'Alcoholic beverages',
//       'Personal shopping and expenses',
//       'Camera fees in park',
//       'Guide tips and staff gratuities',
//       'Medical insurance',
//       'Items not specified in inclusions'
//     ],
//     resort: {
//       name: 'Bandhavgarh Jungle Camp',
//       rating: '4.6/5 (Heritage Luxury)',
//       description: 'Luxury tented camp with royal heritage themes and modern amenities overlooking the ancient fort.',
//       images: [
//         '/images/bandhavgarh-resort1.jpg',
//         '/images/bandhavgarh-resort2.jpg',
//         '/images/bandhavgarh-resort3.jpg'
//       ],
//       amenities: [
//         'Royal-themed luxury tents',
//         'Heritage spa services',
//         'Fort-view dining',
//         'Rajasthani cuisine restaurant',
//         'Bonfire area',
//         'Heritage library'
//       ]
//     }
//   },
//   {
//     id: 'panna-3n4d',
//     title: '3 Nights 4 Days - Panna Diamond Safari',
//     shortDescription: 'UNESCO Biosphere Reserve with diamond mines and tiger conservation success',
//     duration: '3 Nights 4 Days',
//     price: 23900,
//     image: '/images/panna-main.jpg', 
//     parkInfo: {
//       name: 'Panna National Park',
//       bestTime: 'November to May',
//       animals: 'Tigers, leopards, chinkara, gharials',
//       area: '758 sq km',
//       specialty: 'Tiger reintroduction success story'
//     },
//     highlights: [
//       '5 Safaris in diverse landscapes',
//       'Ken River boat safari',
//       'Diamond mine heritage tour',
//       'Gharial spotting on Ken River',
//       'Khajuraho transfer included'
//     ],
//     itinerary: [
//       {
//         day: 1,
//         title: 'Diamond Land Arrival',
//         activities: [
//           'Arrival at Panna National Park',
//           'Check-in at riverside resort',
//           'Ken River boat safari',
//           'Diamond mine heritage walk'
//         ],
//         meals: ['Lunch', 'Dinner'],
//         icon: <MapPin className="text-green-600" />
//       },
//       {
//         day: 2,
//         title: 'Tiger Trails Begin',
//         activities: [
//           'Early morning jeep safari',
//           'Breakfast with river view',
//           'Rest and swimming',
//           'Evening safari in core zone'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Binoculars className="text-green-600" />
//       },
//       {
//         day: 3,
//         title: 'Gharial & Tiger Day',
//         activities: [
//           'Dawn safari with tiger tracking',
//           'Ken River gharial watching',
//           'Afternoon jeep safari',
//           'Cultural evening program'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <TreePine className="text-green-600" />
//       },
//       {
//         day: 4,
//         title: 'Final Safari & Temple Visit',
//         activities: [
//           'Last morning safari',
//           'Breakfast and check-out',
//           'Khajuraho temple visit en route',
//           'Transfer and departure'
//         ],
//         meals: ['Breakfast'],
//         icon: <Car className="text-green-600" />
//       }
//     ],
//     inclusions: [
//       '3 nights riverside resort stay',
//       'All meals with local specialties',
//       '5 jeep safaris with permits',
//       'Ken River boat safari',
//       'Khajuraho transfers and temple visit',
//       'Diamond mine heritage tour',
//       'All entry fees and taxes'
//     ],
//     exclusions: [
//       'Alcoholic beverages',
//       'Personal expenses',
//       'Camera fees',
//       'Tips to staff',
//       'Travel insurance',
//       'Temple entry fees at Khajuraho'
//     ],
//     resort: {
//       name: 'Ken River Lodge',
//       rating: '4.5/5 (Riverside Serenity)',
//       description: 'Peaceful riverside lodge with traditional architecture and modern comforts along the pristine Ken River.',
//       images: [
//         '/images/panna-resort1.jpg',
//         '/images/panna-resort2.jpg',
//         '/images/panna-resort3.jpg'
//       ],
//       amenities: [
//         'River-facing rooms',
//         'Swimming pool',
//         'River-side dining',
//         'Traditional spa',
//         'Fishing activities',
//         'Cultural programs'
//       ]
//     }
//   },
//   {
//     id: 'ranthambore-3n4d',
//     title: '3 Nights 4 Days - Ranthambore Royal Safari',
//     shortDescription: 'Historic fort ruins with royal tigers in Rajasthan\'s premier national park',
//     duration: '3 Nights 4 Days',
//     price: 32900,
//     image: '/images/ranthambore-main.jpg',
//     parkInfo: {
//       name: 'Ranthambore National Park',
//       bestTime: 'October to April',
//       animals: 'Tigers, leopards, marsh crocodiles, sloth bears',
//       area: '1,334 sq km',
//       specialty: 'Tigers roaming among ancient fort ruins'
//     },
//     highlights: [
//       '5 Safaris in zones 1-5',
//       'Ranthambore Fort exploration',
//       'Heritage palace hotel stay',
//       'Royal Rajasthani cuisine',
//       'Jaipur airport transfer included'
//     ],
//     itinerary: [
//       {
//         day: 1,
//         title: 'Royal Welcome',
//         activities: [
//           'Arrival at Ranthambore',
//           'Check-in at heritage hotel',
//           'Ranthambore Fort visit',
//           'Welcome dinner with folk dance'
//         ],
//         meals: ['Lunch', 'Dinner'],
//         icon: <MapPin className="text-green-600" />
//       },
//       {
//         day: 2,
//         title: 'Tiger & Temple Safari',
//         activities: [
//           'Early morning safari in zone 3',
//           'Royal breakfast',
//           'Ganesh Temple visit',
//           'Evening safari in zone 1'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <Binoculars className="text-green-600" />
//       },
//       {
//         day: 3,
//         title: 'Lakes & Leopards',
//         activities: [
//           'Dawn safari in zone 2',
//           'Padam Lake visit',
//           'Afternoon safari in zone 4',
//           'Rajasthani cultural evening'
//         ],
//         meals: ['Breakfast', 'Lunch', 'Dinner'],
//         icon: <TreePine className="text-green-600" />
//       },
//       {
//         day: 4,
//         title: 'Final Hunt & Farewell',
//         activities: [
//           'Last morning safari in zone 5',
//           'Heritage breakfast',
//           'Shopping for handicrafts',
//           'Transfer to Jaipur airport'
//         ],
//         meals: ['Breakfast'],
//         icon: <Car className="text-green-600" />
//       }
//     ],
//     inclusions: [
//       '3 nights heritage hotel accommodation',
//       'All meals with Rajasthani cuisine',
//       '5 canter/jeep safaris with permits',
//       'Ranthambore Fort guided tour',
//       'Jaipur airport transfers',
//       'Cultural programs and folk dance',
//       'All monument and forest fees'
//     ],
//     exclusions: [
//       'Alcoholic beverages',
//       'Personal shopping',
//       'Camera fees in forest',
//       'Tips and gratuities',
//       'Travel insurance',
//       'Items not mentioned in inclusions'
//     ],
//     resort: {
//       name: 'Tiger Palace Resort',
//       rating: '4.8/5 (Royal Heritage)',
//       description: 'Magnificent heritage palace converted into luxury resort with royal architecture and modern amenities.',
//       images: [
//         '/images/ranthambore-resort1.jpg',
//         '/images/ranthambore-resort2.jpg',
//         '/images/ranthambore-resort3.jpg'
//       ],
//       amenities: [
//         'Royal suites and rooms',
//         'Palace swimming pool',
//         'Ayurvedic spa',
//         'Multi-cuisine restaurants',
//         'Palace courtyard',
//         'Heritage museum'
//       ]
//     }
//   }
// ];

export const safariPackages: SafariPackage[] = [
  {
    id: 'pench-3n4d',
    title: '3 Nights 4 Days - Pench Tiger Safari',
    shortDescription: 'Immerse yourself in the wild with 5 thrilling jeep safaris',
    duration: '3 Nights 4 Days',
    price: 24900,
    image: '/images/pench-main.jpg',
    parkInfo: {
      name: 'Pench National Park',
      bestTime: 'October to June',
      animals: 'Tigers, leopards, wild dogs, gaur',
      area: '758 sq km',
      specialty: 'Mowgli\'s landscape from The Jungle Book'
    },
    highlights: [
      '5 Jeep safaris in core/buffer zones',
      'Full board meals with local flavors',
      'Comfortable jungle resort stay',
      'Expert naturalist guides',
      'Nagpur transfer included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Jungle Immersion',
        activities: [
          'Arrival at Pench National Park',
          'Check-in at jungle resort',
          'Leisure time to explore resort facilities',
          'Orientation with naturalist'
        ],
        meals: ['Lunch', 'Dinner'],
        icon: 'MapPin'
      },
      {
        day: 2,
        title: 'First Safari Adventure',
        activities: [
          'Early morning safari in core zone',
          'Breakfast at resort',
          'Rest and relaxation',
          'Evening safari in buffer zone'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Binoculars'
      },
      {
        day: 3,
        title: 'Deep Forest Exploration',
        activities: [
          'Dawn safari with tiger tracking',
          'Nature walk around resort',
          'Afternoon safari in different zone',
          'Cultural evening with local performances'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'TreePine'
      },
      {
        day: 4,
        title: 'Final Safari & Departure',
        activities: [
          'Last morning safari',
          'Breakfast and check-out',
          'Transfer to Nagpur',
          'Departure'
        ],
        meals: ['Breakfast'],
        icon: 'Car'
      }
    ],
    inclusions: [
      '3 nights accommodation in eco-resort',
      'All meals (breakfast, lunch, dinner)',
      '5 shared jeep safaris with permits',
      'Resort to gate transfers',
      'Nagpur airport/station pickup-drop',
      'Naturalist guidance',
      'Forest entry fees and taxes'
    ],
    exclusions: [
      'Alcoholic beverages',
      'Personal expenses',
      'Camera fees',
      'Tips to staff',
      'Travel insurance',
      'Anything not mentioned in inclusions'
    ],
    resort: {
      name: 'Pench Tree Lodge',
      rating: '4.8/5 (Wildlife Haven)',
      description: 'Nestled in 40 acres of private forest with eco-friendly cottages featuring private decks overlooking the jungle.',
      images: [
        '/images/pench-resort1.jpg',
        '/images/pench-resort2.jpg',
        '/images/pench-resort3.jpg'
      ],
      amenities: [
        'Swimming pool',
        'Spa & massage',
        'Jungle-facing cottages',
        'Organic restaurant',
        'Nature trail',
        'Library'
      ]
    }
  },
  // {
  //   id: 'tadoba-3n4d',
  //   title: '3 Nights 4 Days - Tadoba Tiger Reserve',
  //   shortDescription: 'Experience Maharashtra\'s premier tiger reserve with 5 exciting safaris',
  //   duration: '3 Nights 4 Days',
  //   price: 26900,
  //   image: '/images/tadoba-main.jpg',
  //   parkInfo: {
  //     name: 'Tadoba Andhari Tiger Reserve',
  //     bestTime: 'October to June',
  //     animals: 'Tigers, leopards, sloth bears, wild dogs',
  //     area: '1,727 sq km',
  //     specialty: 'Highest tiger density in Maharashtra'
  //   },
  //   highlights: [
  //     '5 Jeep safaris in prime tiger territory',
  //     'Luxury jungle resort accommodation',
  //     'Expert wildlife photographers as guides',
  //     'Traditional Maharashtrian cuisine',
  //     'Nagpur transfer included'
  //   ],
  //   itinerary: [
  //     {
  //       day: 1,
  //       title: 'Arrival & Forest Welcome',
  //       activities: [
  //         'Arrival at Tadoba Tiger Reserve',
  //         'Check-in at luxury resort',
  //         'Welcome drink and briefing',
  //         'Evening nature walk'
  //       ],
  //       meals: ['Lunch', 'Dinner'],
  //       icon: 'MapPin'
  //     },
  //     {
  //       day: 2,
  //       title: 'Tiger Territory Exploration',
  //       activities: [
  //         'Early morning safari in Moharli zone',
  //         'Breakfast at resort',
  //         'Leisure time by pool',
  //         'Afternoon safari in Kolsa zone'
  //       ],
  //       meals: ['Breakfast', 'Lunch', 'Dinner'],
  //       icon: 'Binoculars'
  //     },
  //     {
  //       day: 3,
  //       title: 'Deep Forest Adventure',
  //       activities: [
  //         'Dawn safari with tiger tracking',
  //         'Bird watching session',
  //         'Safari in Tadoba zone',
  //         'Campfire with local stories'
  //       ],
  //       meals: ['Breakfast', 'Lunch', 'Dinner'],
  //       icon: 'TreePine'
  //     },
  //     {
  //       day: 4,
  //       title: 'Final Hunt & Farewell',
  //       activities: [
  //         'Last morning safari',
  //         'Breakfast and packing',
  //         'Transfer to Nagpur',
  //         'Departure'
  //       ],
  //       meals: ['Breakfast'],
  //       icon: 'Car'
  //     }
  //   ],
  //   inclusions: [
  //     '3 nights luxury resort accommodation',
  //     'All meals with local specialties',
  //     '5 shared jeep safaris with permits',
  //     'All transfers and transportation',
  //     'Nagpur airport/station transfers',
  //     'Professional naturalist guides',
  //     'All entry fees and taxes'
  //   ],
  //   exclusions: [
  //     'Alcoholic beverages',
  //     'Personal expenses and shopping',
  //     'Camera and video fees',
  //     'Tips and gratuities',
  //     'Travel insurance',
  //     'Items not mentioned in inclusions'
  //   ],
  //   resort: {
  //     name: 'Tadoba Tiger King Resort',
  //     rating: '4.9/5 (Luxury Wildlife)',
  //     description: 'Premium eco-resort with spacious villas, infinity pool, and panoramic forest views.',
  //     images: [
  //       '/images/tadoba-resort1.jpg',
  //       '/images/tadoba-resort2.jpg',
  //       '/images/tadoba-resort3.jpg'
  //     ],
  //     amenities: [
  //       'Infinity swimming pool',
  //       'Full-service spa',
  //       'Forest-view villas',
  //       'Multi-cuisine restaurant',
  //       'Conference facilities',
  //       'Gift shop'
  //     ]
  //   }
  // },
  {
    id: 'tadoba-packages',
    title: 'Tadoba Tiger Reserve Packages',
    shortDescription: 'Experience Maharashtra\'s premier tiger reserve with multiple accommodation options',
    duration: '1-3 Nights',
    price: 5200, // Starting price
    image: '/images/tadoba-main.jpg',
    parkInfo: {
      name: 'Tadoba Andhari Tiger Reserve',
      bestTime: 'October to June',
      animals: 'Tigers, leopards, sloth bears, wild dogs',
      area: '1,727 sq km',
      specialty: 'Highest tiger density in Maharashtra'
    },
    packages: [
      {
        id: 'tadoba-package-1',
        name: 'Tadoba Bagh Niwas Resort (1N/2D)',
        price: 5200,
        duration: '1 Night 2 Days',
        includes: [
          'All Meals (Veg + NonVeg)',
          '1 Jungle Safari Ride',
          'Pickup and Drop Service',
          'Comfortable accommodation'
        ],
        resort: {
          name: 'Tadoba Bagh Niwas Resort',
          rating: '4.2/5',
          amenities: ['Swimming pool', 'Restaurant', 'Garden view rooms']
        }
      },
      {
        id: 'tadoba-package-2',
        name: 'Zeal Tadoba Resort (1N/2D)',
        price: 5700,
        duration: '1 Night 2 Days',
        includes: [
          'All Meals (Veg + NonVeg)',
          '1 Jungle Safari Ride',
          'Pickup and Drop by AC Innova',
          'Luxury accommodation'
        ],
        resort: {
          name: 'Zeal Tadoba Resort',
          rating: '4.5/5',
          amenities: ['AC rooms', 'Multi-cuisine restaurant', 'Travel desk']
        }
      },
      {
        id: 'tadoba-package-3',
        name: 'Wildcat Resort Tadoba (1N/2D)',
        price: 6700,
        duration: '1 Night 2 Days',
        includes: [
          'All Meals (Veg + NonVeg)',
          '1 Jungle Safari Ride',
          'Pickup and Drop Service',
          'Premium jungle-facing rooms'
        ],
        resort: {
          name: 'Wildcat Resort Tadoba',
          rating: '4.7/5',
          amenities: ['Jungle view', 'Spa services', 'Wildlife library']
        }
      },
      {
        id: 'tadoba-package-4',
        name: 'Tadoba Bagh Niwas Resort (2N/3D)',
        price: 10400,
        duration: '2 Nights 3 Days',
        includes: [
          'All Meals (Veg + NonVeg)',
          '2 Jungle Safari Rides',
          'Pickup and Drop Service',
          'Extended comfortable stay'
        ],
        resort: {
          name: 'Tadoba Bagh Niwas Resort',
          rating: '4.2/5',
          amenities: ['Swimming pool', 'Restaurant', 'Garden view rooms']
        }
      },
      {
        id: 'tadoba-package-5',
        name: 'Premium Tadoba Experience (2N/3D)',
        price: 12400,
        duration: '2 Nights 3 Days',
        includes: [
          'All Meals (Veg + NonVeg)',
          '3 Jungle Safari Rides',
          'AC Luxury Transport',
          'Naturalist-guided tours',
          'Evening wildlife films'
        ],
        resort: {
          name: 'Tadoba Tiger King Resort',
          rating: '4.9/5',
          amenities: ['Infinity pool', 'Spa', 'Forest-view villas']
        }
      }
    ],
    highlights: [
      'Multiple accommodation options',
      'Flexible duration packages',
      'Expert wildlife guides',
      'Traditional Maharashtrian cuisine',
      'Nagpur transfer included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Safari',
        activities: [
          'Arrival at resort',
          'Lunch and orientation',
          'Evening safari in buffer zone',
          'Dinner with local flavors'
        ]
      },
      {
        day: 2,
        title: 'Morning Safari & Departure',
        activities: [
          'Early morning safari in core zone',
          'Breakfast at resort',
          'Check-out and departure'
        ]
      }
    ],
    inclusions: [
      'Accommodation as per package',
      'Meals as specified',
      'Safari rides with permits',
      'Transportation as mentioned',
      'Forest entry fees'
    ],
    exclusions: [
      'Alcoholic beverages',
      'Personal expenses',
      'Camera fees',
      'Tips to staff',
      'Travel insurance'
    ],
    // resort: null // Will be overridden by package-specific resorts
  },
  {
    id: 'kanha-4n5d',
    title: '4 Nights 5 Days - Kanha National Park',
    shortDescription: 'Discover the inspiration behind The Jungle Book with 6 comprehensive safaris',
    duration: '4 Nights 5 Days',
    price: 34900,
    image: '/images/kanha-main.jpg',
    parkInfo: {
      name: 'Kanha National Park',
      bestTime: 'October to June',
      animals: 'Tigers, barasingha, leopards, wild dogs',
      area: '2,074 sq km',
      specialty: 'Home of the rare barasingha (swamp deer)'
    },
    highlights: [
      '6 Jeep safaris across different zones',
      'Barasingha and tiger sightings',
      'Premium jungle lodge stay',
      'Photography workshops',
      'Jabalpur transfer included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Park Introduction',
        activities: [
          'Arrival at Kanha National Park',
          'Check-in at premium lodge',
          'Park orientation session',
          'Evening leisure at resort'
        ],
        meals: ['Lunch', 'Dinner'],
        icon: 'MapPin'
      },
      {
        day: 2,
        title: 'Kanha Zone Safari',
        activities: [
          'Early morning safari in Kanha zone',
          'Breakfast and rest',
          'Photography workshop',
          'Evening safari in Sarhi zone'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Camera'
      },
      {
        day: 3,
        title: 'Barasingha Spotting',
        activities: [
          'Dawn safari focusing on barasingha',
          'Village visit and cultural exchange',
          'Afternoon safari in Mukki zone',
          'Night sounds of jungle experience'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'TreePine'
      },
      {
        day: 4,
        title: 'Tiger Territory Deep Dive',
        activities: [
          'Intensive tiger tracking safari',
          'Nature interpretation walk',
          'Final evening safari',
          'Farewell dinner with cultural program'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Binoculars'
      },
      {
        day: 5,
        title: 'Departure Day',
        activities: [
          'Last morning safari',
          'Breakfast and check-out',
          'Transfer to Jabalpur',
          'Departure'
        ],
        meals: ['Breakfast'],
        icon: 'Car'
      }
    ],
    inclusions: [
      '4 nights premium lodge accommodation',
      'All meals with organic options',
      '6 shared jeep safaris with permits',
      'Village visit and cultural activities',
      'Jabalpur airport/station transfers',
      'Photography workshop sessions',
      'All entry fees and government taxes'
    ],
    exclusions: [
      'Alcoholic beverages and soft drinks',
      'Personal expenses and laundry',
      'Camera fees in forest',
      'Tips to guides and staff',
      'Travel insurance coverage',
      'Any services not mentioned in inclusions'
    ],
    resort: {
      name: 'Kanha Earth Lodge',
      rating: '4.7/5 (Eco Excellence)',
      description: 'Award-winning eco-lodge with sustainable architecture and organic gardens in the heart of Kanha buffer zone.',
      images: [
        '/images/kanha-resort1.jpg',
        '/images/kanha-resort2.jpg',
        '/images/kanha-resort3.jpg'
      ],
      amenities: [
        'Organic swimming pool',
        'Ayurvedic spa treatments',
        'Eco-friendly cottages',
        'Farm-to-table restaurant',
        'Medicinal plant garden',
        'Library and games room'
      ]
    }
  },
  {
    id: 'bandhavgarh-3n4d',
    title: '3 Nights 4 Days - Bandhavgarh Fort Safari',
    shortDescription: 'Explore the land of highest tiger density with ancient fort backdrop',
    duration: '3 Nights 4 Days',
    price: 28900,
    image: '/images/bandhavgarh-main.jpg',
    parkInfo: {
      name: 'Bandhavgarh National Park',
      bestTime: 'October to June',
      animals: 'Tigers, leopards, blue bulls, spotted deer',
      area: '716 sq km',
      specialty: 'Highest density of tigers in India'
    },
    highlights: [
      '5 Safaris in tiger-rich zones',
      'Ancient Bandhavgarh Fort visit',
      'Luxury tented accommodation',
      'White tiger legacy exploration',
      'Katni transfer included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Fort & Forest Arrival',
        activities: [
          'Arrival at Bandhavgarh National Park',
          'Check-in at luxury camp',
          'Bandhavgarh Fort visit',
          'Evening orientation'
        ],
        meals: ['Lunch', 'Dinner'],
        icon: 'MapPin'
      },
      {
        day: 2,
        title: 'Tala Zone Tiger Hunt',
        activities: [
          'Early morning safari in Tala zone',
          'Breakfast at camp',
          'White tiger museum visit',
          'Evening safari in Magdhi zone'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Binoculars'
      },
      {
        day: 3,
        title: 'Khitauli Zone Adventure',
        activities: [
          'Dawn safari in Khitauli zone',
          'Ancient caves exploration',
          'Afternoon safari tracking',
          'Stargazing session'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Star'
      },
      {
        day: 4,
        title: 'Final Tiger Quest',
        activities: [
          'Last morning safari',
          'Breakfast and packing',
          'Transfer to Katni',
          'Departure'
        ],
        meals: ['Breakfast'],
        icon: 'Car'
      }
    ],
    inclusions: [
      '3 nights luxury tented accommodation',
      'All meals with royal cuisine',
      '5 shared jeep safaris with permits',
      'Bandhavgarh Fort visit',
      'Katni railway station transfers',
      'Museum entry fees',
      'All forest fees and taxes'
    ],
    exclusions: [
      'Alcoholic beverages',
      'Personal shopping and expenses',
      'Camera fees in park',
      'Guide tips and staff gratuities',
      'Medical insurance',
      'Items not specified in inclusions'
    ],
    resort: {
      name: 'Bandhavgarh Jungle Camp',
      rating: '4.6/5 (Heritage Luxury)',
      description: 'Luxury tented camp with royal heritage themes and modern amenities overlooking the ancient fort.',
      images: [
        '/images/bandhavgarh-resort1.jpg',
        '/images/bandhavgarh-resort2.jpg',
        '/images/bandhavgarh-resort3.jpg'
      ],
      amenities: [
        'Royal-themed luxury tents',
        'Heritage spa services',
        'Fort-view dining',
        'Rajasthani cuisine restaurant',
        'Bonfire area',
        'Heritage library'
      ]
    }
  },
  {
    id: 'panna-3n4d',
    title: '3 Nights 4 Days - Panna Diamond Safari',
    shortDescription: 'UNESCO Biosphere Reserve with diamond mines and tiger conservation success',
    duration: '3 Nights 4 Days',
    price: 23900,
    image: '/images/panna-main.jpg',
    parkInfo: {
      name: 'Panna National Park',
      bestTime: 'November to May',
      animals: 'Tigers, leopards, chinkara, gharials',
      area: '758 sq km',
      specialty: 'Tiger reintroduction success story'
    },
    highlights: [
      '5 Safaris in diverse landscapes',
      'Ken River boat safari',
      'Diamond mine heritage tour',
      'Gharial spotting on Ken River',
      'Khajuraho transfer included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Diamond Land Arrival',
        activities: [
          'Arrival at Panna National Park',
          'Check-in at riverside resort',
          'Ken River boat safari',
          'Diamond mine heritage walk'
        ],
        meals: ['Lunch', 'Dinner'],
        icon: 'MapPin'
      },
      {
        day: 2,
        title: 'Tiger Trails Begin',
        activities: [
          'Early morning jeep safari',
          'Breakfast with river view',
          'Rest and swimming',
          'Evening safari in core zone'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Binoculars'
      },
      {
        day: 3,
        title: 'Gharial & Tiger Day',
        activities: [
          'Dawn safari with tiger tracking',
          'Ken River gharial watching',
          'Afternoon jeep safari',
          'Cultural evening program'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'TreePine'
      },
      {
        day: 4,
        title: 'Final Safari & Temple Visit',
        activities: [
          'Last morning safari',
          'Breakfast and check-out',
          'Khajuraho temple visit en route',
          'Transfer and departure'
        ],
        meals: ['Breakfast'],
        icon: 'Car'
      }
    ],
    inclusions: [
      '3 nights riverside resort stay',
      'All meals with local specialties',
      '5 jeep safaris with permits',
      'Ken River boat safari',
      'Khajuraho transfers and temple visit',
      'Diamond mine heritage tour',
      'All entry fees and taxes'
    ],
    exclusions: [
      'Alcoholic beverages',
      'Personal expenses',
      'Camera fees',
      'Tips to staff',
      'Travel insurance',
      'Temple entry fees at Khajuraho'
    ],
    resort: {
      name: 'Ken River Lodge',
      rating: '4.5/5 (Riverside Serenity)',
      description: 'Peaceful riverside lodge with traditional architecture and modern comforts along the pristine Ken River.',
      images: [
        '/images/panna-resort1.jpg',
        '/images/panna-resort2.jpg',
        '/images/panna-resort3.jpg'
      ],
      amenities: [
        'River-facing rooms',
        'Swimming pool',
        'River-side dining',
        'Traditional spa',
        'Fishing activities',
        'Cultural programs'
      ]
    }
  },
  {
    id: 'ranthambore-3n4d',
    title: '3 Nights 4 Days - Ranthambore Royal Safari',
    shortDescription: 'Historic fort ruins with royal tigers in Rajasthan\'s premier national park',
    duration: '3 Nights 4 Days',
    price: 32900,
    image: '/images/ranthambore-main.jpg',
    parkInfo: {
      name: 'Ranthambore National Park',
      bestTime: 'October to April',
      animals: 'Tigers, leopards, marsh crocodiles, sloth bears',
      area: '1,334 sq km',
      specialty: 'Tigers roaming among ancient fort ruins'
    },
    highlights: [
      '5 Safaris in zones 1-5',
      'Ranthambore Fort exploration',
      'Heritage palace hotel stay',
      'Royal Rajasthani cuisine',
      'Jaipur airport transfer included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Royal Welcome',
        activities: [
          'Arrival at Ranthambore',
          'Check-in at heritage hotel',
          'Ranthambore Fort visit',
          'Welcome dinner with folk dance'
        ],
        meals: ['Lunch', 'Dinner'],
        icon: 'MapPin'
      },
      {
        day: 2,
        title: 'Tiger & Temple Safari',
        activities: [
          'Early morning safari in zone 3',
          'Royal breakfast',
          'Ganesh Temple visit',
          'Evening safari in zone 1'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'Binoculars'
      },
      {
        day: 3,
        title: 'Lakes & Leopards',
        activities: [
          'Dawn safari in zone 2',
          'Padam Lake visit',
          'Afternoon safari in zone 4',
          'Rajasthani cultural evening'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        icon: 'TreePine'
      },
      {
        day: 4,
        title: 'Final Hunt & Farewell',
        activities: [
          'Last morning safari in zone 5',
          'Heritage breakfast',
          'Shopping for handicrafts',
          'Transfer to Jaipur airport'
        ],
        meals: ['Breakfast'],
        icon: 'Car'
      }
    ],
    inclusions: [
      '3 nights heritage hotel accommodation',
      'All meals with Rajasthani cuisine',
      '5 canter/jeep safaris with permits',
      'Ranthambore Fort guided tour',
      'Jaipur airport transfers',
      'Cultural programs and folk dance',
      'All monument and forest fees'
    ],
    exclusions: [
      'Alcoholic beverages',
      'Personal shopping',
      'Camera fees in forest',
      'Tips and gratuities',
      'Travel insurance',
      'Items not mentioned in inclusions'
    ],
    resort: {
      name: 'Tiger Palace Resort',
      rating: '4.8/5 (Royal Heritage)',
      description: 'Magnificent heritage palace converted into luxury resort with royal architecture and modern amenities.',
      images: [
        '/images/ranthambore-resort1.jpg',
        '/images/ranthambore-resort2.jpg',
        '/images/ranthambore-resort3.jpg'
      ],
      amenities: [
        'Royal suites and rooms',
        'Palace swimming pool',
        'Ayurvedic spa',
        'Multi-cuisine restaurants',
        'Palace courtyard',
        'Heritage museum'
      ]
    }
  }
];

export const safariZones: SafariZone[] = [
  {
    id: 'zone-1',
    name: 'Tala Zone',
    morningSlots: 3,
    eveningSlots: 5,
    price: 2500
  },
  {
    id: 'zone-2',
    name: 'Magadhi Zone',
    morningSlots: 0,
    eveningSlots: 2,
    price: 3000
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: "We saw 7 tigers in 3 days! Our guide knew every movement pattern.",
    author: "Rajesh P.",
    rating: 5,
    tour: "Bandhavgarh Premium Safari",
    date: "March 2024"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    question: "What's the best time for tiger sightings?",
    answer: "Early mornings (5:30-9:30 AM) offer the highest probability of tiger sightings as they're most active during cooler hours."
  }
];

export const guides: Guide[] = [
  {
    id: 'g1',
    name: "Rajesh Patil",
    experience: 12,
    specialty: "Tiger Tracking",
    languages: ['English', 'Hindi', 'Marathi'],
    image: '/images/guides/guide1.jpg',
    bio: 'Born and raised near Tadoba, Rajesh has an uncanny ability to predict tiger movements based on alarm calls and pug marks.'
  },
  {
    id: 'g2',
    name: "Rajesh Patil",
    experience: 12,
    specialty: "Tiger Tracking",
    languages: ['English', 'Hindi', 'Marathi'],
    image: '/images/guides/guide1.jpg',
    bio: 'Born and raised near Tadoba, Rajesh has an uncanny ability to predict tiger movements based on alarm calls and pug marks.'
  },
  {
    id: 'g3',
    name: "Rajesh Patil",
    experience: 12,
    specialty: "Tiger Tracking",
    languages: ['English', 'Hindi', 'Marathi'],
    image: '/images/guides/guide1.jpg',
    bio: 'Born and raised near Tadoba, Rajesh has an uncanny ability to predict tiger movements based on alarm calls and pug marks.'
  },
  {
    id: 'g4',
    name: "Rajesh Patil",
    experience: 12,
    specialty: "Tiger Tracking",
    languages: ['English', 'Hindi', 'Marathi'],
    image: '/images/guides/guide1.jpg',
    bio: 'Born and raised near Tadoba, Rajesh has an uncanny ability to predict tiger movements based on alarm calls and pug marks.'
  },
  {
    id: 'g5',
    name: "Rajesh Patil",
    experience: 12,
    specialty: "Tiger Tracking",
    languages: ['English', 'Hindi', 'Marathi'],
    image: '/images/guides/guide1.jpg',
    bio: 'Born and raised near Tadoba, Rajesh has an uncanny ability to predict tiger movements based on alarm calls and pug marks.'
  },
  {
    id: 'g6',
    name: "Rajesh Patil",
    experience: 12,
    specialty: "Tiger Tracking",
    languages: ['English', 'Hindi', 'Marathi'],
    image: '/images/guides/guide1.jpg',
    bio: 'Born and raised near Tadoba, Rajesh has an uncanny ability to predict tiger movements based on alarm calls and pug marks.'
  }
];

export const sightings: Sighting[] = [
  {
    id: 's1',
    date: '2024-06-10',
    animals: ['Bengal Tiger'],
    location: 'Zone 3, Ranthambore',
    image: '/images/sightings/Barasinga.jpg',
    verified: true,
    highlight: 'Dominant male near waterhole'
  },
  {
    id: 's2',
    date: '2024-06-09',
    animals: ['Sloth Bear'],
    location: 'Kanha Meadows',
    image: '/images/sightings/Bear.jpg',
    verified: true,
    highlight: 'Mother with two cubs'
  },
  {
    id: 's3',
    date: '2024-06-08',
    animals: ['Mugger Crocodile'],
    location: 'Pench River',
    image: '/images/sightings/Bengal Tiger.jpg',
    verified: true,
    highlight: '4.2m specimen basking'
  },
  {
    id: 's4',
    date: '2024-06-07',
    animals: ['Painted Stork'],
    location: 'Bharatpur Wetlands',
    image: '/images/sightings/Birds.jpg',
    verified: true,
    highlight: 'Colony nesting activity'
  },
  {
    id: 's5',
    date: '2024-06-06',
    animals: ['White-throated Kingfisher'],
    location: 'Corbett Riverside',
    image: '/images/sightings/Cruel Tiger.jpg',
    verified: false,
    highlight: 'Diving for fish'
  },
  {
    id: 's10',
    date: '2024-06-01',
    animals: ['Bengal Tiger', 'Indian Gaur'],
    location: 'Bandipur Tiger Reserve',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (1).jpg',
    verified: true,
    highlight: 'Predator-prey interaction'
  },
  {
    id: 's11',
    date: '2024-05-31',
    animals: ['Malabar Pied Hornbill'],
    location: 'Dandeli Forest',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (2).jpg',
    verified: false,
    highlight: 'Feeding on figs'
  },
  {
    id: 's12',
    date: '2024-05-30',
    animals: ['Wild Boar'],
    location: 'Panna National Park',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (3).jpg',
    verified: true,
    highlight: 'Sounders with piglets'
  },
  {
    id: 's13',
    date: '2024-05-29',
    animals: ['Indian Peafowl'],
    location: 'Ranthambore Fort',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (4).jpg',
    verified: false,
    highlight: 'Full courtship display'
  },
  {
    id: 's14',
    date: '2024-05-28',
    animals: ['Gray Langur'],
    location: 'Sariska Valley',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (5).jpg',
    verified: true,
    highlight: 'Troop with infants'
  },
  {
    id: 's15',
    date: '2024-05-27',
    animals: ['Indian Roller'],
    location: 'Gir Forest',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (6).jpg',
    verified: false,
    highlight: 'Mid-flight plumage display'
  },
  {
    id: 's16',
    date: '2024-05-26',
    animals: ['Rusty-spotted Cat'],
    location: 'Nagarhole NP',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (7).jpg',
    verified: true,
    highlight: 'Rare nocturnal sighting'
  },
  {
    id: 's17',
    date: '2024-05-25',
    animals: ['Indian Pitta'],
    location: 'Silent Valley',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (8).jpg',
    verified: true,
    highlight: 'Migratory visitor'
  },
  {
    id: 's18',
    date: '2024-05-24',
    animals: ['Dhole (Wild Dog)'],
    location: 'Kanha Meadows',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all yo (9).jpg',
    verified: true,
    highlight: 'Pack of 7 hunting'
  },
  {
    id: 's19',
    date: '2024-05-23',
    animals: ['Indian Porcupine'],
    location: 'Satpura Hills',
    image: '/images/sightings/World Wildlife DayWildlife have all the answer, they deserve everything. Don’t miss the beauty on earth, it’s not forever so just stand up and go for it. Lifestyle, Emotions, landscape and your happiness all you wi.jpg',
    verified: false,
    highlight: 'Night camera trap'
  }
];