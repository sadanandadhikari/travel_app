'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards'

import {EffectCards} from 'swiper/modules'
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ReviewsSlider = () => {
  return (
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((review) =>{
            return (
                <SwiperSlide key={review.id} className='bg-white rounded-3xl block'>
                    <div className='w-[80%] mx-auto mt-16'>
                        {/** Review text */}
                        <p className='text-xs sm:text-sm md:text-base font-semibold text-black'>{review.review}</p>

                        {/** Icons */}
                        <div className='flex items-center mt-4'>
                            <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                            <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                            <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                            <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                            <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                        </div>

                        {/** Users Profile */}
                        <div className='mt-10'>
                            <div className='flex items-center space-x-4'>
                                <Image src={review.image} width={60} height={60} alt="client image" className='rounded-full'/> 
                                <div>
                                    <p className='text-sm sm:text-lg font-semibold text-black'>{review.name}</p>
                                    <p className='text-gray600 text-xs sm:text-base text-gray-400'>Web Developer</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
  )
}

export default ReviewsSlider