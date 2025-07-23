import SectionHeading from '@/components/helper/SectionHeading'
import WhyChooseCard from '@/components/helper/WhyChooseCard'
import React from 'react'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
        {/** Section Heading */}
        <SectionHeading heading='Why Choose Us' subheading='look at what we offer' />
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-24'>
            {/** Why Choose card */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" ><WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" description='Your booking would be the cheapest!'/></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150" ><WhyChooseCard image="/images/c2.svg" title="Easy and Quick Booking" description='Minimal hassle while booking' /></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300"><WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" description='Run into an issue? Do not worry and give us a call, we will fix it for you!'/></div>

        </div>

    </div>
  )
}

export default WhyChoose