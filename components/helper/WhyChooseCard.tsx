import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    description: string;
}
const WhyChooseCard = ({image, title, description}: Props) => {
  return (
    <div>
        {/** Image */}
        <Image src={image} width={70} height={70} alt="title" className='mx-auto' />

        {/** Content */}
        <h1 className='mt-6 text-center font-medium text-gray-900 text-lg'>{title}</h1>
        <p className='mt-2 text-center text-xs font-medium text-gray-700'>{description}</p>
    </div>
  )
}

export default WhyChooseCard