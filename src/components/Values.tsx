
  // export default function Values() {
  //   return (
  //     <section className="w-full lg:max-w-[1425px] h-[772px] absolute top-[1541px] bg-gray-100 blend-normal rounded-none mx-auto flex flex-col gap-8">
  //      <div className="w-full h-[512px] lg:max-w-[522px] absolute">
  //       <h1 className="font-normal text-6xl px-[50px]">Our true beliefs for your benifits</h1>
  //      </div> 
  //      <div className="w-full h-[90px] lg:max-w-[913.15px] absolute top-[148px]">
  //       <p className="font-normal text-[19.5px] md:px-[50px] lg:px-[50px]">Our beliefs aren't just words; they are the foundation of every adventure we offer. With high commitment to sustainability, authenticity, and customer-centricity, we ensure that every trip you take with us is valuable.
  //       </p>
  //      </div> 
  //     </section>
  //   )
  // }
  // absolute top-[1541px]
  export default function Values() {
    return (
      <section className="w-full flex flex-col justify-center  max-h-[772px] bg-gray-100">
        <div className="w-full max-w-[1425px] px-[50px] py-[80px]">
          <div className="max-w-[522px]">
            <h1 className="text-[52px] leading-tight font-normal">
              Our true <em className="italic">beliefs</em><br />
              for <em className="italic">your</em> benefits
            </h1>
          </div>
          <div className="max-w-[913px] mt-6">
            <p className="text-[19.5px] leading-relaxed">
              Our beliefs aren&apos;t just words; they are the foundation of every adventure we offer.
              With high commitment to sustainability, authenticity, and customer-centricity,
              we ensure that every trip you take with us is valuable.
            </p>
          </div>
        </div>
        {/* <div className="max-w-[913px] h-[512px] px-[50px] py-[100px]">
          <div className="max-w-[913px] h-[512px] border-[2px]">
            asds
          </div>
        </div> */}
      </section>
    )
  }
  