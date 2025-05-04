// // components/Testimonials.tsx
// const reviews = [
//     { name: 'Priya', country: 'India', quote: 'An unforgettable journey!' },
//     { name: 'Jose', country: 'Spain', quote: 'Truly authentic experiences.' },
//     // …
//   ];
  
//   export default function Testimonials() {
//     return (
//       <section className="py-16 px-4">
//         <h2 className="text-3xl font-semibold text-center mb-8">Real Stories from Travelers</h2>
//         <div className="space-y-8">
//           {reviews.map((r) => (
//             <div key={r.name} className="bg-white p-6 shadow rounded-lg">
//               <p>{r.quote}</p>
//               <p className="mt-4 font-bold">— {r.name}, {r.country}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     )
//   }
  

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Testimonials = () => {
  return (
    <section className='w-full h-[480px] flex items-center justify-center'>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}

export default Testimonials