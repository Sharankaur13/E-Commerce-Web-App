// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//    const navigate = useNavigate()
//   const handleGoBack=()=>{
//     navigate(-1)
//   }
//   return (
//     <div>
//       <button onClick={handleGoBack} className=' text-black bg-gray-300 p-2 m-1'>Back </button>
//     <div className='flex justify-center items-center h-full '>
//       <form action="" className='p-4 flex flex-col gap-3 border bg-gray-400 '>
//         <div className='flex flex-col gap-1'>
//             <label htmlFor="name" className='text-xl font-semibold text-white'>Name</label>
//         <input type="text" id='name' placeholder='Enter full name' className='w-90 border h-10 '/>
//         </div>
//         <div className='flex flex-col gap-1'>
//             <label htmlFor="number" className='text-xl font-semibold'>Mobile No.</label>
//         <input type="number" id='number' placeholder='Mobile No.' className='w-90 border h-10 '/>
//         </div>
//         <div className='flex flex-col gap-1'>
//             <label htmlFor="email" className='text-xl font-semibold'>Email</label>
//         <input type="email" id='email' placeholder='Email' className='w-90  border h-10  '/>
//         </div>
//         <div className='flex flex-col gap-1'>
//             <label htmlFor="date" className='text-xl font-semibold'>Date of birth</label>
//         <input type="date" id='date' placeholder='Enter full name' className='w-90 border h-10 '/>
//         </div>


//       </form>
//     </div>
//     </div>
//   )
// }

// export default Login







import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='flex  p-10'>

        {/* left form */}
        <div className='flex flex-col gap-4'>
          <p className='text-8xl font-semibold mask-radial-from-neutral-300'>Snapdeal</p><br />
          <p className='text-sm'>LOG IN</p><br />
          <input type="email" placeholder='E-MAIL' className='border-b-1'/><br />
          <input type="password" placeholder='PASSWORD' className='border-b-1 text-sm'/>
          <p className='text-gray-700'>Have you forgotten your password</p>
          <button className='p-2 bg-black text-white'>Login</button>
          <button className='p-2 border '>Registrator</button>
          <button className='p-2 border'>Login in with QR code</button>




           

        </div>

        {/* right side */}
        <div>
          
        </div>


      </div>
    </div>
  )
}

export default Login

