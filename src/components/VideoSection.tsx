// absolute top-[2413px]
// max-w-[1225px]
// /videoplayback.mp4
import React from 'react'
const VideoSection = () => {
  return (
    <section className='w-full h-[560px]'>
      <div className="w-full  h-[560px] px-[100px]">
        <video src="https://framerusercontent.com/assets/cXGGRdoWmVg2EP0rKNWhq3Z0aiY.mp4" autoPlay loop muted       playsInline
       className='mt-10 rounded-3xl' />
        {/* Videosection */}
        </div>
    </section>
  )
}

export default VideoSection