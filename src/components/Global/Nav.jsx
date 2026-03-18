import React, { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart, FaUserCircle } from 'react-icons/fa'
import { IoCart, IoSearch } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../createContext'
import { HiShoppingBag } from 'react-icons/hi'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FcAlphabeticalSortingAz, FcContacts } from 'react-icons/fc'


const Nav = () => {
  const {cartItems}=useContext(CartContext)
  const [showDropdown, setShowDropdown] = useState(false)
  const navData=[
    {
        element:'Home',
        path:'/home'
    },
    {
      element:'Deal',
      path:'/deal'
    },
   
    {
        element:'Price',
        path:'/price'
    },
   
]
  

 
    

  
  return (
    <div className='sticky top-0 z-50'>
      <nav className=' bg-slate-900   shadow-md'>
    <div className='max-w-7xl mx-auto px-6 py-4 flex items-center md:gap-3 gap-3'>
      
<div className="relative flex ">

  
  <button onClick={() => setShowDropdown(!showDropdown)}
    className=" text-white px-2 py-3 hidden  md:flex items-center justify-center ">Categories 
  </button>
  {/* <div className='absolute right-2 top-1 '><FcAlphabeticalSortingAz className='text-2xl font-bold'/>
</div> */}
 
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
              <HiShoppingBag className='w-10 h-10 text-amber-50 ' />
            </div>
            <NavLink to="/" className='text-2xl font-bold text-gray-400'>SnapDeal</NavLink>
            


        </div>

    <div>
      <form action="" className='  '>
        <div className='relative hidden md:flex items-center'>
          <CiSearch className='h-10 w-7 absolute left-2 text-black '/>
          <input type="search" placeholder='Search item here ' className=' relative text-black   text-center p-2 w-110 h-13  rounded bg-white ' />
        
        </div>


      </form>
    </div>
 <div className=' flex gap-3 md:gap-4'>
    {
        navData.map(ele=>(
          
            <NavLink to={ele.path} className=' text-lg hidden md:flex font-semibold text-cyan-50 rounded  '>
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
        <NavLink to={'/login'}><FaUserCircle className='h-6 w-6 md:h-8 md:w-8 text-white' /></NavLink>
      }
      

    </div>
    <div className='relative'>
       
        <NavLink to={'/cart'}><IoCart className='h-7 w-7 md:h-10 md:w-10 text-white'/></NavLink>
        <span className='absolute top-1 left-4  rounded text-red-500 justify-center items-center'>{cartItems.length}</span>
       

    </div>

    <div>
      {
        <NavLink to={'/wishlist'}><FaRegHeart className=' h-6 w-6 md:h-9 md:w-9 text-red-600 '/></NavLink>
      }
    </div>

    <div>
      <button className='w-35  h-10 hidden md:flex items-center justify-center bg-red-700 text-white text-lg rounded-lg cursor-pointer'>Download App</button>
    </div>
   


 </div>

    </div>
    </nav>

    
    </div>
  )
}

export default Nav
