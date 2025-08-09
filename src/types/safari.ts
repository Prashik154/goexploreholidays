// export interface SafariPackage {
//   id: string;
//   title: string;
//   description: string;
//   duration: string;
//   price: number;
//   highlights: string[];
//   image: string;
//   featured?: boolean;
// }

// export interface SafariZone {
//   id: string;
//   name: string;
//   morningSlots: number;
//   eveningSlots: number;
//   price: number;
// }

// export interface Testimonial {
//   id: string;
//   quote: string;
//   author: string;
//   rating: number;
//   tour: string;
//   date: string;
// }

// export interface FAQItem {
//   id: string;
//   question: string;
//   answer: string;
// }

// export interface Guide {
//   id: string;
//   name: string;
//   experience: number;
//   specialty: string;
//   languages: string[];
//   image: string;
//   bio: string;
// }

// export interface Sighting {
//   id: string;
//   date: string;
//   animals: string[];
//   location: string;
//   image: string;
//   verified?: boolean;
// }



// app/types/safari.ts

// export interface SafariPackage {
//   id: string;
//   title: string;
//   shortDescription: string;
//   duration: string;
//   price: number;
//   image: string;
//   featured?: boolean;
//   parkInfo: {
//     name: string;
//     bestTime: string;
//     animals: string;
//     area: string;
//     specialty: string;
//   };
//   highlights: string[];
//   itinerary: {
//     day: number;
//     title: string;
//     activities: string[];
//     meals: string[];
//     icon: ReactNode;
//   }[];
//   inclusions: string[];
//   exclusions: string[];
//   resort: {
//     name: string;
//     rating: string;
//     description: string;
//     images: string[];
//     amenities: string[];
//   };
// }



export interface SafariPackage {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  price: number;
  image: string;
  featured?: boolean;
  parkInfo: {
    name: string;
    bestTime: string;
    animals: string;
    area: string;
    specialty: string;
  };
  packages?: {
    id: string;
    name: string;
    price: string | number;
    duration?: string;
    includes: string[];
    resort?: {
      name: string;
      rating: string;
      amenities: string[];
      price?: string;
    };
  }[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
    meals?: string[];
    icon?: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  resort?: {
    name: string;
    rating: string;
    description: string;
    images: string[];
    amenities: string[];
    price?: string;
  };
  resorts?: {
    name: string;
    rating: string;
    facilities: string[];
    price: string;
  }[];
  safariInfo?: {
    bestTime: string;
    animals: string;
    area: string;
  };
}

export interface SafariZone {
  id: string;
  name: string;
  morningSlots: number;
  eveningSlots: number;
  price: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
  tour: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Guide {
  id: string;
  name: string;
  experience: number;
  specialty: string;
  languages: string[];
  image: string;
  bio: string;
}

export interface Sighting {
  id: string;
  date: string;
  animals: string[];
  location: string;
  image: string;
  verified?: boolean;
  highlight?: string;
}