'use client'
import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Destination from './destination/Destination'
import Hotel from './hotel/Hotel'
import WhyChoose from './whyChoose/WhyChoose'
import Reviews from './reviews/Reviews'
import News from './news/News'
import Newsletter from './newsletter/Newsletter'

import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    initAOS();
  },[])
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
      <News />
      <Newsletter />
    </div>
  )
}

export default Home