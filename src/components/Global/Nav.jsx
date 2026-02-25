import React, { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoCart, IoSearch } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../createContext'
import { HiShoppingBag } from 'react-icons/hi'
import { FaRegCircleUser } from 'react-icons/fa6'

const Nav = () => {
  const {cartItems}=useContext(CartContext)
  const [showDropdown, setShowDropdown] = useState(false)
  const navData=[
    {
        element:'Home',
        path:'/'
    },
   
    // {
    //     element:'Price',
    //     path:'/price'
    // },
   
]
  

 
    

  
  return (
    <div>
      <div className='  '>
    <div className='p-10  flex justify-around items-center'>
      
<div className="relative">

  
  <button onClick={() => setShowDropdown(!showDropdown)}
    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Categories
  </button>

 
  {showDropdown && (
    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col z-50">

      <NavLink to="/mens" className="px-4 py-2 hover:bg-gray-100" >Mens
      </NavLink>

      <NavLink to="/womens" className="px-4 py-2 hover:bg-gray-100">
        Womens
      </NavLink>

      <NavLink to="/kids" className="px-4 py-2 hover:bg-gray-100" > Kids
      </NavLink>

      <NavLink to="/home" className="px-4 py-2 hover:bg-gray-100">Home</NavLink>
</div>
  )}

</div>

    <div className='flex items-center '>
            <div>
              <HiShoppingBag className='w-10 h-10 text-red-700 ' />
            </div>
            <h2 className='text-2xl font-bold '>SnapDeal</h2>
            


        </div>

    <div>
      <form action="" className='flex gap-2'>
        <input type="search" placeholder='Search item here ' className='border p-2 w-96' />
        <CiSearch className='h-10 w-7 border'/>


      </form>
    </div>
 <div className=' hidden md:flex gap-7'>
    {
        navData.map(ele=>(
            <NavLink to={ele.path} className='p-1 text-lg  rounded hover:bg-stone-600 underline'>
              {ele.element}  
            </NavLink>
          //   <NavLink to={ele.path} className={({ isActive }) = `${isActive ? "text-red-700 font-semibold" : ""}`
          //   }>
          //   {ele.element}
          // </NavLink>

        ))
    }
     <div className='flex flex-col items-center '>
      {
        <NavLink to={'/login'}><FaRegCircleUser className='h-8 w-8' /></NavLink>
      }
      <p className='text-sm '>Login</p>

    </div>
    <div className='relative'>
       
        <NavLink to={'/cart'}><IoCart className='h-10 w-10'/></NavLink>
        <span className='absolute -top-2 -right-2 h-5 w-5 rounded bg-amber-500 flex justify-center items-center'>{cartItems.length}</span>
       

    </div>

    <div>
      {
        <NavLink to={'/cart'}><FaRegHeart className='h-9 w-9'/></NavLink>
      }
    </div>

    <div>
      <button className='w-35  h-10 flex items-center justify-center bg-red-700 text-white text-lg rounded-lg cursor-pointer'>Download App</button>
    </div>
   


 </div>

    </div>
    </div>

    
    </div>
  )
}

export default Nav
