import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

const NavBar = () => {
  return (
    <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]' >
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/** LOGO */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center'>
                    <TbAirBalloon className='w-6 h-6 text-white'/>
                </div>
                <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>TripIt!</h1>
            </div>
            {/** NAV LINKS */}
            <div className='hidden md:flex items-center space-x-10 flex-row'>
                {navLinks.map(navLink => {
                    return (
                    <div className='text-white' key={navLink.id}>
                        <Link href={navLink.url}>
                            <p className="relative text-white text-base font-medium w-fit block 
                            after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 
                            after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 
                            after:origin-right">
                                {navLink.label}
                            </p>
                        </Link>    
                    </div>)
                })}
            </div>
            {/** Button */}
            <div className="flex items-center space-x-4">
                <button className='md:px-12 md:py-2.5 px-8 py-2 text-black
                 bg-white text-base hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                    Book Now
                </button>
                {/**Burger menu */}
                <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar