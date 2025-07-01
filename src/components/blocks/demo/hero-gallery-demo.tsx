// "use client"

// import Image from "next/image"
// import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "../hero-gallery-scroll-animation"
// import { Button } from "@/components/ui/button"

// const IMAGES = [
//   "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww",
// ]

// export function HeroGalleryDefault() {
//   return (
//     <ContainerScroll className="h-[350vh]">
//       <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
//         {IMAGES.map((imageUrl, index) => (
//           <BentoCell
//             key={index}
//             className="overflow-hidden rounded-xl shadow-xl"
//           >
//             <Image
//               className="size-full object-cover object-center"
//               src={imageUrl}
//               alt={`Gallery image ${index + 1}`}
//             />
//           </BentoCell>
//         ))}
//       </BentoGrid>

//       <ContainerScale className="relative z-10 text-center">
//         <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800">
//           Your Animated Hero
//         </h1>
//         <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
//           Yet another hero section, this time with scroll trigger animations,
//           animating the hero content with motion.
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
//             Get Started
//           </Button>
//           <Button
//             variant="link"
//             className="bg-transparent px-4 py-2 font-medium"
//           >
//             Learn more
//           </Button>
//         </div>
//       </ContainerScale>
//     </ContainerScroll>
//   )
// }

// export function HeroGalleryFourCells() {
//   return (
//     <ContainerScroll className="h-[350vh]">
//       <BentoGrid
//         variant={"fourCells"}
//         className="sticky left-0 top-0 h-svh w-full p-4"
//       >
//         {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
//           <BentoCell
//             key={index}
//             className="overflow-hidden rounded-xl shadow-xl"
//           >
//             <Image
//               className="size-full object-cover object-center"
//               src={imageUrl}
//               alt={`Gallery image ${index + 1}`}
//             />
//           </BentoCell>
//         ))}
//       </BentoGrid>
//       <ContainerScale className="text-center">
//         <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
//           Your Animated Hero
//         </h1>
//         <p className="my-6 max-w-xl text-sm text-stone-500 md:text-base">
//           Yet another hero section, this time with scroll trigger animations,
//           animating the hero content with motion.
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <Button className="bg-indigo-700 px-4 py-2 font-medium hover:bg-indigo-200">
//             Get Started
//           </Button>
//           <Button
//             variant={"link"}
//             className="bg-transparent px-4 py-2 font-medium"
//           >
//             Learn more
//           </Button>
//         </div>
//       </ContainerScale>
//     </ContainerScroll>
//   )
// }

// export function HeroGalleryThreeCells() {
//   return (
//     <ContainerScroll className="h-[350vh] bg-slate-900 text-slate-100">
//       <BentoGrid
//         variant={"threeCells"}
//         className="sticky left-0 top-0 h-svh w-full p-4"
//       >
//         {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
//           <BentoCell
//             key={index}
//             className="overflow-hidden rounded-xl shadow-xl"
//           >
//             <Image
//               className="size-full object-cover object-center"
//               src={imageUrl}
//               alt={`Gallery image ${index + 1}`}
//             />
//           </BentoCell>
//         ))}
//       </BentoGrid>
//       <ContainerScale className="text-center">
//         <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
//           Your Animated Hero
//         </h1>
//         <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
//           Yet another hero section, this time with scroll trigger animations,
//           animating the hero content with motion.
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <Button className="bg-indigo-700 px-4 py-2 font-medium hover:bg-indigo-400">
//             Get Started
//           </Button>
//           <Button
//             variant={"link"}
//             className="bg-transparent px-4 py-2 font-medium text-white"
//           >
//             Learn more
//           </Button>
//         </div>
//       </ContainerScale>
//     </ContainerScroll>
//   )
// }




// "use client"

// import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "../hero-gallery-scroll-animation"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// const IMAGES = [
//   {
//     src: "/images/sightings/Bengal Tiger.jpg",
//     alt: "Wildlife in natural habitat",
//     width: 2388,
//     height: 1592
//   },
//   {
//     src: "/images/sightings/Cruel Tiger.jpg",
//     alt: "Jungle landscape",
//     width: 2264,
//     height: 1509
//   },
//   {
//     src: "/images/sightings/Hawk.jpg",
//     alt: "Tiger closeup",
//     width: 2368,
//     height: 1579
//   },
//   {
//     src: "/images/sightings/Birds.jpg",
//     alt: "Forest scenery",
//     width: 2000,
//     height: 1333
//   },
//   {
//     src: "/images/sightings/Bear.jpg",
//     alt: "Sunset in jungle",
//     width: 2000,
//     height: 1333
//   }
// ]

// export function HeroGalleryDefault() {
//   return (
//     <ContainerScroll className="h-[350vh]">
//       <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
//         {IMAGES.map((image, index) => (
//           <BentoCell
//             key={index}
//             className="overflow-hidden rounded-xl shadow-xl"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={image.width}
//               height={image.height}
//               className="size-full object-cover object-center"
//               priority={index === 0} // Only prioritize first image
//             />
//           </BentoCell>
//         ))}
//       </BentoGrid>

//       <ContainerScale className="relative z-10 text-center">
//         <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-white">
//           Go Explore Tours
//         </h1>
//         <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
//           Discover India's majestic wildlife with our expertly crafted safari experiences in the most breathtaking national parks.
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
//             Get Started
//           </Button>
//           <Button
//             variant="link"
//             className="bg-transparent px-4 py-2 font-medium"
//           >
//             Learn more
//           </Button>
//         </div>
//       </ContainerScale>
//     </ContainerScroll>
//   )
// }

// export function HeroGalleryFourCells() {
//   return (
//     <ContainerScroll className="h-[350vh]">
//       <BentoGrid
//         variant={"fourCells"}
//         className="sticky left-0 top-0 h-svh w-full p-4"
//       >
//         {IMAGES.filter((_, index) => index <= 3).map((image, index) => (
//           <BentoCell
//             key={index}
//             className="overflow-hidden rounded-xl shadow-xl"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={image.width}
//               height={image.height}
//               className="size-full object-cover object-center"
//             />
//           </BentoCell>
//         ))}
//       </BentoGrid>
//       <ContainerScale className="text-center">
//         <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
//           Your Animated Hero
//         </h1>
//         <p className="my-6 max-w-xl text-sm text-stone-500 md:text-base">
//           Yet another hero section, this time with scroll trigger animations,
//           animating the hero content with motion.
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <Button className="bg-indigo-700 px-4 py-2 font-medium hover:bg-indigo-200">
//             Get Started
//           </Button>
//           <Button
//             variant={"link"}
//             className="bg-transparent px-4 py-2 font-medium"
//           >
//             Learn more
//           </Button>
//         </div>
//       </ContainerScale>
//     </ContainerScroll>
//   )
// }

// export function HeroGalleryThreeCells() {
//   return (
//     <ContainerScroll className="h-[350vh] bg-slate-900 text-slate-100">
//       <BentoGrid
//         variant={"threeCells"}
//         className="sticky left-0 top-0 h-svh w-full p-4"
//       >
//         {IMAGES.filter((_, index) => index <= 2).map((image, index) => (
//           <BentoCell
//             key={index}
//             className="overflow-hidden rounded-xl shadow-xl"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={image.width}
//               height={image.height}
//               className="size-full object-cover object-center"
//             />
//           </BentoCell>
//         ))}
//       </BentoGrid>
//       <ContainerScale className="text-center">
//         <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
//           Your Animated Hero
//         </h1>
//         <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
//           Yet another hero section, this time with scroll trigger animations,
//           animating the hero content with motion.
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <Button className="bg-indigo-700 px-4 py-2 font-medium hover:bg-indigo-400">
//             Get Started
//           </Button>
//           <Button
//             variant={"link"}
//             className="bg-transparent px-4 py-2 font-medium text-white"
//           >
//             Learn more
//           </Button>
//         </div>
//       </ContainerScale>
//     </ContainerScroll>
//   )
// }


"use client"

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "../hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const IMAGES = [
  {
    src: "/images/sightings/Bengal Tiger.jpg",
    alt: "Wildlife in natural habitat",
    width: 2388,
    height: 1592
  },
  {
    src: "/images/sightings/Cruel Tiger.jpg",
    alt: "Jungle landscape",
    width: 2264,
    height: 1509
  },
  {
    src: "/images/sightings/Hawk.jpg",
    alt: "Tiger closeup",
    width: 2368,
    height: 1579
  },
  {
    src: "/images/sightings/Birds.jpg",
    alt: "Forest scenery",
    width: 2000,
    height: 1333
  },
  {
    src: "/images/sightings/Bear.jpg",
    alt: "Sunset in jungle",
    width: 2000,
    height: 1333
  }
]

export function HeroGalleryDefault() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="size-full object-cover object-center"
              priority={index === 0}
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center px-4">
        <h1 className="max-w-3xl text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-roboto">
            Go Explore Tours
          </span>
        </h1>
        <p className="my-8 max-w-2xl text-lg md:text-xl text-black/90 font-medium leading-relaxed drop-shadow-md font-roboto">
          Discover India's majestic wildlife with our expertly crafted safari experiences in the most breathtaking national parks.
        </p>
        <div className="flex items-center justify-center gap-6 mt-10">
          <Button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-roboto">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/30 bg-transparent hover:bg-white/10 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:border-white/50 font-roboto"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroGalleryFourCells() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="size-full object-cover object-center"
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center px-4">
        <h1 className="max-w-3xl text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Wildlife Adventures
          </span>
        </h1>
        <p className="my-8 max-w-2xl text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
          Experience the thrill of encountering tigers, leopards, and rare species in their natural habitats.
        </p>
        <div className="flex items-center justify-center gap-6 mt-10">
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Now
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/30 bg-transparent hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:border-white/50"
          >
            View Packages
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroGalleryThreeCells() {
  return (
    <ContainerScroll className="h-[350vh] bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <BentoGrid
        variant={"threeCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="size-full object-cover object-center"
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center px-4">
        <h1 className="max-w-3xl text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Premium Safari Tours
          </span>
        </h1>
        <p className="my-8 max-w-2xl text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
          Luxury accommodations, expert guides, and unforgettable wildlife encounters await you.
        </p>
        <div className="flex items-center justify-center gap-6 mt-10">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Tours
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/30 bg-transparent hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:border-white/50"
          >
            Contact Us
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}