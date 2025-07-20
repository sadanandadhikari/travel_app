import React from 'react'
import Hero from './hero/Hero'
import Destination from './destination/Destination'
import Hotel from './hotel/Hotel'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination />
      <Hotel />
    </div>
  )
}

export default Home