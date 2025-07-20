'use client'
import React, { useState } from 'react'
import NavBar from './NavBar'
import MobileNavBar from './MobileNavBar'

const ResponsiveNavBar = () => {
  const [ showNav, setShowNav] = useState(false);
  const handleNavShow = (): void => {setShowNav(true)}
  const handleNavClose = ():void => {setShowNav(false)} 

  return (
    
    <div>
        <NavBar openNav={handleNavShow}/>
        <MobileNavBar showNav={showNav} closeNav={handleNavClose}/>
    </div>
  )
}

export default ResponsiveNavBar