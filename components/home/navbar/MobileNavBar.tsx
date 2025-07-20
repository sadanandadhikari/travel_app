import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;

}
const MobileNavBar = ({showNav, closeNav}: Props) => {

  // the following code either shows the navBar or moves it out of the screen completely
  const navOpen = showNav ? 'translate-x-0': 'translate-x-[-100%]'
  return (
    <div>
      {/** Overlay */}
      <div className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[1020] bg-black opacity-70 w-full h-screen`}>
      </div>
      {/** Nav Links */}
      <div className={`${navOpen} fixed text-white flex justify-center flex-col h-screen transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-600 space-y-6 z-[1050]`}>
        {navLinks.map(navLink => {
          return (<Link key={navLink.id} href={navLink.url}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5] pb-1 border-white sm:text-[30px]'>
              {navLink.label}
            </p>
          </Link>)
        })}
              {/** Close button */}
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>

    </div>
  )
}

export default MobileNavBar
