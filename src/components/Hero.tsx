import { url } from "inspector";

export default function Hero() {
    return (
      <section
      className="relative w-full lg:max-w-[1425px] min-h-screen bg-white mix-blend-normal rounded-none mx-auto flex items-center justify-center"
      style={{
        backgroundImage: "url('/Breathtaking-Landscape-View.jpeg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        mixBlendMode: 'normal',
        borderRadius: '0px',
      }}
    >
      <div className="w-full h-[508px] absolute top-8">
         <div className="px-[100px] flex items-center justify-between">
          <h1 className="font-normal text-2xl text-white">Eco Safari Zone</h1>
          <ul className="flex items-center justify-evenly lg:w-[313.48px]">
            <li className="font-normal text-base text-white">Trips</li>
            <li className="font-normal text-base text-white">Gallery</li>
            <li className="font-normal text-base text-white">About</li>
            <li className="font-normal text-base text-white">Contact</li>
          </ul>
         </div>
         <div className="relative w-full h-[341px] flex justify-center items-center">
  <div className="absolute top-[62px] max-w-[900px] w-full mx-auto text-center px-4 font-normal text-[78.6px] text-white">
  Embark on journeys not just destinations with our trips
  </div>
    </div>
      </div>
    </section>
    )
  }
  