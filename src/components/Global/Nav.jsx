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
    {
      element:'Deal',
      path:'/deal'
    }
   
    // {
    //     element:'Price',
    //     path:'/price'
    // },
   
]
  

 
    

  
  return (
    <div className='sticky top-0 z-50'>
      <nav className=' bg-white shadow-md'>
    <div className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between '>
      
<div className="relative">

  
  <button onClick={() => setShowDropdown(!showDropdown)}
    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Categories
  </button>

 
  {
  showDropdown && (
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
  )
  }

</div>

    <div className='flex items-center '>
            <div>
              <HiShoppingBag className='w-10 h-10 text-red-700 ' />
            </div>
            <h2 className='text-2xl font-bold '>SnapDeal</h2>
            


        </div>

    <div>
      <form action="" className='  '>
        <div className='relative'>
          <CiSearch className='h-10 w-7 absolute left-2 font-bold  '/>
          <input type="search" placeholder='Search item here ' className=' relative  text-center p-2 w-85 border-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-orange-600 transition' />
        
        </div>


      </form>
    </div>
 <div className=' hidden md:flex gap-4'>
    {
        navData.map(ele=>(
          
            <NavLink to={ele.path} className='p-2 text-lg font-semibold  rounded hover:bg-gray-100 underline '>
              {ele.element}  
            </NavLink>
            
            
            
            
          //   <NavLink to={ele.path} className={({ isActive }) = `${isActive ? "text-red-700 font-semibold" : ""}`
          //   }>
          //   {ele.element}
          // </NavLink>

        ))
    }
     <div className=' '>
      {
        <NavLink to={'/login'}><FaRegCircleUser className='h-8 w-8' /></NavLink>
      }
      

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
    </nav>

    
    </div>
  )
}

export default Nav
