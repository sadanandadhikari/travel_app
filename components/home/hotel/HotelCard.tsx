import React from 'react'
import { FaHeart} from 'react-icons/fa';
import Image from 'next/image';

type Hotel = {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
}

type Props = {
    hotel: Hotel;
}



const HotelCard = ({hotel}: Props) => {
  return (
    <div>
        {/**
         * `relative`: Sets position relative for absolute positioning of child elements (overlay and heart button)
         * `h-[300px]`: Fixed height of 300px using arbitrary value syntax
         * `w-full]`: sets width to 100% of parent container
         * `rounded-lg`: Large border radius (8px) for rounded corners
         * `cursor-pointer`: Changes cursor to pointer on hover, indicating clickable element
         * `group`: Enables group hover effects for child elements
         * `overflow-hidden`: Hides any content that overflows the container boundaries
         */}
        <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>

            {/** Add to favorite button */}
            {/**
             * `absolute`: Positions absolutely within the relative parent
             * `top-4 right-4`: Positioned 16px from top and right edges
             * `z-20`: High z-index to appear above overlay (z-10)
             * `w-8 h-8`: 32px × 32px square dimensions
             * `bg-white`: White background color
             * `rounded-full`: Makes it a perfect circle
             * `text-black`: Black text/icon color
             * `flex items-center justify-center`: Centers content both horizontally and vertically
             */}
            <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center'>
                <FaHeart className='w-3 h-3' />
            </div>

            {/** Overlay */}
            {/**
             * `absolute`: Positioned absolutely within relative parent
             * `inset-0`: Sets top, right, bottom, left all to 0 (covers entire parent)
             * `bg-black`: Black background
             * `opacity-20`: 20% opacity for subtle dark overlay effect
             * `z-10`: Z-index of 10, above image but below heart button
             */}
            <div className='absolute inset-0 bg-black opacity-20 z-10'></div>

            {/** Image */}
            {/**
             * `overflow-hidden`: Clips any overflow (redundant since parent has this)
             * `h-full w-full`: Takes full height and width of container (300px height, 100% width)
             * `transition-all duration-300`: Smooth transition for all properties over 300ms
             * `object-cover`: Maintains aspect ratio while covering entire container
             *`group-hover:scale-110`: On group hover, scales to 110%
             */}
            <Image 
                src={hotel.image} 
                width={500} 
                height={500} 
                alt={hotel.name}
                className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />
        </div>
        
        {/** Hotel Information */}
        <div className='mt-4'>
            <h1 className='text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200 mb-3'>{hotel.name}</h1>
            <p className='text-sm text-gray-600 mb-6 font-medium'>{hotel.location}</p>
            
            {/** Rating and Reviews */}
            <div className='flex items-center gap-2 mb-3'>
                <div className='px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs'> 
                    {hotel.rating} 
                </div>
                {/**
                 * `text-sm`: Small text size
                 * `text-gray-500`: Light gray color for secondary information
                 */}
                <p className='text-sm text-gray-800'> Exceptional </p>
                <p className='text-sm font-bold text-gray-800'> {hotel.reviews} Reviews</p>
            </div>

            {/** Price */}
            {/**
             * `flex items-center gap-1`: Horizontal layout with 4px gap and vertical centering
             * `text-xl font-bold text-blue-600`: Extra large, bold, blue text for price
             * `text-sm text-gray-500`: Small, gray text for "per night"
             */}
            <div className='mt-3 text-gray-700 font-medium text-base'>
                Starting from <span className='text-blue-600 font-bold'> US${hotel.price}</span>
            </div>
        </div>
    </div>
  )
}

export default HotelCard
