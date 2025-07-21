import React from 'react'
import Hero from './hero/Hero'
import Destination from './destination/Destination'
import Hotel from './hotel/Hotel'
import WhyChoose from './whyChoose/WhyChoose'
import Reviews from './reviews/Reviews'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
    </div>
  )
}

export default Home