import Image from 'next/image'
import React from 'react'
import {
    UserButton,
  } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className='flex bg-green-800 items-center justify-between p-3 px-5 shadow-lg border-b-[10px] '>
   <Image src='/logo2.png'
   alt='Logo'
   width={130}
   height={130}
   className="ml-0 lg:ml-20 md:ml-20"
   />
   <div className='hidden md:flex gap-5'>
    <h2 className='text-black-500 hover:bg-green-700 p-2 rounded hover:text-white px-3 cursor md:hidden'>Experince Addis</h2>
    <h2 className='p-2 rounded hover:text-white hover:bg-yellow-500 px-3 cursor md:hidden'>To The Max</h2>
    <h2 className='p-2 rounded hover:text-green-700 hover:bg-orange-100 px-10 cursor text-orange-100'> Call and Book A Car Now: +251966918730</h2>
   </div>
   <UserButton/>
    </div>
  )
}

export default NavBar
