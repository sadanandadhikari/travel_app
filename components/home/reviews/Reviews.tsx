import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/** Text Content */}
            <div>
                <h1 className='text-2xl font-semibold text-white'> What our customers are saying about us?</h1>
                <p className='mt-6 text-gray-200 text-base'> Look at our reviews from our customers and see how much they trust us!</p>

                <div className='mt-6 flex items-center space-x-6'> 
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className='text-white mb-2'>Overall rating</p>
                        <div className='flex items-center font-medium text-lg'>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                        </div>

                    </div>

                </div>
            </div>

            {/** Slider */}
            <div className='overflow-hidden'>
                <ReviewsSlider />
            </div>

        </div>

    </div>
  )
}

export default Reviews