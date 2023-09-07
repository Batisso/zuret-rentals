import React from 'react'
import { Image } from 'next/dist/client/image-component'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='m-0'>
      <h2 className='lg:text-[60px] md:text-[30px] text-[40px] font-bold mt-10'>Premium Car <span className='text-green-800'>Rentals</span> in Addis Abeba</h2>
            <h2 className='text-[15px] text-gray-500 pr-20 mt-5'>Book the selected car effortlessly, Pay for driving only, Hire Drivers,
                Book the Car Now
            </h2>
            <button className='p-2 mt-5 bg-green-700 text-white
            px-4 rounded-full 
            hover:scale-105 transition-all hover:bg-orange-100 hover:text-green-700 '>↓ Scroll Down ↓</button>
      </div>
      <div>
<Image src='/hero.2.png'
            alt='hero'
            width={400}
            height={500}
            className='w-full object-cover align-middle mt-10'
            />
      </div>
    </div>
  )
}

export default Hero
