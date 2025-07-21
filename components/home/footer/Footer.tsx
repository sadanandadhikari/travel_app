import Link from 'next/link';
import React from 'react'
import { FaDribbble, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const records = new Map<string, string[]>();
    records.set("Company", ["About us", "Careers", "Blogs", "Gift Cards", "Magazines"]);
    records.set("Support", ["Contact", "Legal Notice", "Privacy Policy", "Terms and Conditions", "Sitemap"]);
    records.set("Other Services", ["Car Hire", "Activity Finder", "Tour List", "Flight Finder", "Travel Agents"]);

  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                Array.from(records.entries()).map(([key, values]) => {
                    return (
                        <div key={key} className='space-y-5'>
                            <h1 className='text-lg text-black font-bold'>{key}</h1>
                            {values.map((value: string, index: number) => {
                                return (
                                    <p key={index} className='text-sm text-gray-800 font-medium cursor-pointer hover:text-blue-950'>{value}</p>
                                )
                            })}
                        </div>
                    )
                })
            }

            <div className='space-y-5'>
                <h1 className='text-lg text-black font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <p className='text-sm text-gray-600'>Our Mobile Number</p>
                    <p className='text-base font-bold text-blue-950 mt-1'>5443342342</p>
                </div>
                <div className='mt-6'>
                    <p className='text-sm text-gray-600'>Our Email</p>
                    <p className='text-base font-bold text-blue-950 mt-1'>sample@gmail.com</p>
                </div>

            </div>
        </div>
        {/** Bottom section */}
        <div className='mt-8 w-[80%] mx-auto border-t flex flex-col md:flex-row justify-between items-center text-sm text-gray-600'>
            <p className='text-center md:text-left'>Copyright &copy; 2025. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social :</span>
                <Link href="#" className="text-gray-500 hover:text-gray-800"><FaFacebook/></Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTwitter/></Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800"><FaDribbble/></Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800"><FaGoogle/></Link>

            </div>
        </div>
    </div>
  )
}

export default Footer
