import React from 'react'
import Hero from './hero/Hero'
import Destination from './destination/Destination'
import Hotel from './hotel/Hotel'
import WhyChoose from './whyChoose/WhyChoose'
import Reviews from './reviews/Reviews'
import News from './news/News'
import Newsletter from './newsletter/Newsletter'

const Home = () => {
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