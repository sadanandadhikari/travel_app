import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Destination = () => {
  return (
    <div className='pb-20 pt-20'>
        {/** Section heading */}
        <SectionHeading subheading="Checkout popular destinations here" heading='Explore Popular Destinations' />

        {/** Section content */}
        <div className='mt-14 w-[80%] mx-auto'>
            <Slider />
        </div>
    </div>
  )
}

export default Destination