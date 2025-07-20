'use client'
import { destinationData } from '@/data/data';
import React from 'react'
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

// __1. Outer Container (`<div key={destination.id} className='m-3'>`):__
// - `m-3`: Applies margin of 0.75rem (12px) on all sides to each destination card, creating consistent spacing between carousel items

// __2. Image Container (`<div className='relative h-[400px]'>`):__
// - `relative`: Sets position relative for absolute positioning of the overlay
// - `h-[400px]`: Sets a fixed height of 400px for consistent card heights

// __3. Overlay (`<div className='absolute inset-0 bg-black opacity-25 rounded-lg'>`):__
// - `absolute`: Positions the overlay absolutely within the relative parent
// - `inset-0`: Sets top, right, bottom, left to 0 (covers entire parent)
// - `bg-black`: Black background color
// - `opacity-25`: 25% opacity for a subtle dark overlay effect
// - `rounded-lg`: Large border radius (8px) for rounded corners

// __4. Image (`<Image ... className='w-full h-full object-cover rounded-lg' />`):__
// - `w-full`: Width 100% of container
// - `h-full`: Height 100% of container (400px)
// - `object-cover`: Maintains aspect ratio while covering entire container
// - `rounded-lg`: Matches overlay's rounded corners

// __5. Text Elements:__
// - `text-lg font-semibold mt-4`: Large text, semi-bold weight, top margin for country name
// - `text-sm text-gray-600`: Small text, gray color for traveler count


const Slider = () => {
    return (<Carousel   
        responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={5000}
        keyBoardControl={true}
    >
        {destinationData.map((destination) => {
            return (
                <div key={destination.id} className='m-3'>
                    <div className='relative h-[400px]'>
                        {/** Overlay */}
                        <div className='absolute inset-0 bg-black opacity-25 rounded-lg'> </div>
                        {/** Image */}
                        <Image src={destination.image} alt={destination.country} width={500} height={500} className='w-full h-full object-cover rounded-lg' />
                    </div>
                    {/** Text content */}
                    <h1 className='text-lg font-semibold mt-4'>{destination.country}</h1>
                    <p className='text-sm text-gray-600 '>{destination.travelers} Travelers</p>
                </div>
            )
        })}

    </Carousel>
    )
}

export default Slider