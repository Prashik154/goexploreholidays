// // components/Packages.tsx
// const sampleTrips = [
//     { title: 'Tropical Paradise', days: 7, price: '$1,499', img: '/pkg1.jpg' },
//     { title: 'Cruise Getaway', days: 10, price: '$2,299', img: '/pkg2.jpg' },
//     // …
//   ];
  
//   export default function Packages() {
//     return (
//       <section className="py-16 px-4">
//         <h2 className="text-3xl font-semibold text-center mb-8">Must Experience Packages</h2>
//         <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
//           {sampleTrips.map((t) => (
//             <div key={t.title} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src={t.img} alt={t.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold">{t.title}</h3>
//                 <p className="mt-2">{t.days} days • {t.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-6">
//           <a href="#all-packages" className="underline">See All Packages</a>
//         </div>
//       </section>
//     )
//   }
  
// import React from 'react'

// const Packages = () => {
//   return (
//     <div className="sm:w-[335px] md:w-[719px] lg:w-[1225px] h-[581px] absolute top-[812.37px] border-[5px] px-[130px]">Packages</div>
//   )
// }

// export default Packages
// absolute top-[812.37px] left-[130.18px]
// h-[233px] md:h-[197px] lg:h-[157px]
// mx-[130px]
// import React from 'react';

// const Packages = () => {
//   return (
//     <div className="w-full h-[581px] md:h-[1420px] px-0 flex flex-col  items-center">
//       <div className='w-[335px] md:w-[719px] lg:w-[1225px]  mt-[100px] p-4'>
//         <h1 className='font-normal text-6xl'>Must experience Packages</h1>
//         <h3 className='font-normal text-2xl mt-[84px]'>Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.</h3>
//       </div>
//       <div className="w-[335px] md:w-[719px] h-[1696px] md:h-[868px] px-[20px] md:ml-[50px] md:mr-[50px] mt-[168px] border-[5px]"></div>
//     </div>
//   );
// };

// export default Packages;


import React from 'react';

const Packages = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Max-width container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1224px]">
        <h1 className="text-3xl md:text-5xl font-semibold text-black">
          Must experience packages
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl">
          Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.
        </p>

        {/* Grid of packages (just placeholder here) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Packages;


