import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-full '>
      <form action="" className='p-4 flex flex-col gap-3 border bg-gray-400 '>
        <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-xl font-semibold text-white'>Name</label>
        <input type="text" id='name' placeholder='Enter full name' className='w-90 border h-10 '/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="number" className='text-xl font-semibold'>Mobile No.</label>
        <input type="number" id='number' placeholder='Mobile No.' className='w-90 border h-10 '/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-xl font-semibold'>Email</label>
        <input type="email" id='email' placeholder='Email' className='w-90  border h-10  '/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="date" className='text-xl font-semibold'>Date of birth</label>
        <input type="date" id='date' placeholder='Enter full name' className='w-90 border h-10 '/>
        </div>


      </form>
    </div>
  )
}

export default Login
