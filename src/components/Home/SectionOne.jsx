import React from 'react'
import { FaPeopleCarry, FaRegGrinStars } from 'react-icons/fa'
import { LuAlarmClockCheck } from 'react-icons/lu'

const SectionOne = () => {
  return (
    <div>
      <div className=' m-10 w- p-4 h-25 flex gap-6 justify-center  bg-black rounded-sm'>
        <div className='flex w-80 gap-6 bg-white p-2 justify-center  rounded'>
          <FaPeopleCarry className='h-16 w-10 text-blue-950' />
          <div className='flex flex-col '>
            <h3 className='text-xl text-blue-900 font-bold'>Free Delivery</h3>
            <p className='text-lg text-blue-950'>On all Others</p>
          </div>


        </div>
        <div className='flex w-80 gap-6 bg-white p-2 justify-center  rounded'>
          <LuAlarmClockCheck className='h-16 w-10 text-blue-950' />
          <div className='flex flex-col '>
            <h3 className='text-xl text-blue-900 font-bold'>7 days</h3>
            <p className='text-lg text-blue-950'>Easy Returns</p>
          </div>


        </div>
         <div className='flex w-80 gap-6 bg-white p-2 justify-center  rounded'>
          <FaRegGrinStars className='h-16 w-10 text-blue-950' />
          <div className='flex flex-col '>
            <h3 className='text-xl text-blue-900 font-bold'>Great Quality at</h3>
            <p className='text-lg text-blue-950'>Best Prices</p>
          </div>


        </div>

      </div>
    </div>
  )
}

export default SectionOne
