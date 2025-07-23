import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
      {/** 1st search input */}
      <div className='flex items-center space-x-4'>
        <FaMap className='w-6 h-6 text-blue-600 flex-shrink-0'/>
        <div className='flex-1 min-w-0'>
          <p className='text-lg font-medium mb-0 leading-tight'>Location</p>
          <input 
            type="text" 
            placeholder='Where are you going?' 
            className='text-sm w-full outline-none border-none placeholder:text-gray-800 -mt-1'
          />
        </div>
      </div>

      {/** 2nd search input */}
      <div className='flex items-center space-x-4'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600 flex-shrink-0'/>
        <div className='flex-1 min-w-0'>
          <p className='text-lg font-medium mb-0 leading-tight'>Start Date</p>
          <input 
            type="date" 
            placeholder='Where are you going?' 
            className='text-sm outline-none border-none placeholder:text-gray-800 -mt-1'
          />
        </div>
      </div>

      {/** 3rd search input */}
      <div className='flex items-center space-x-4'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600 flex-shrink-0'/>
        <div className='flex-1 min-w-0'>
          <p className='text-lg font-medium mb-0 leading-tight'>End Date</p>
          <input 
            type="date" 
            placeholder='Where are you going?' 
            className='text-sm outline-none border-none placeholder:text-gray-800 -mt-1'
          />
        </div>
      </div>

      {/** 4th search input */}
      <div className='flex items-center space-x-4'>
        <FaUserGroup className='w-6 h-6 text-blue-600 flex-shrink-0'/>
        <div className='flex-1 min-w-0'>
          <p className='text-lg font-medium mb-4 leading-tight'>Guest</p>
          <p className='text-sm font-normal mt-2'>1 Guest 1 Room</p>
        </div>
      </div>

    </div>
  )
}

export default SearchBox
