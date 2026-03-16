import React, { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
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
    <div className='max-w-7xl mx-auto px-6 py-6 flex items-center md:gap-5 gap-3'>
      
<div className="relative flex ">

  
  <button onClick={() => setShowDropdown(!showDropdown)}
    className="h-10 w-33 bg-gray-200 rounded hover:bg-gray-300 hidden  md:flex items-center justify-center ">Categories 
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
              <HiShoppingBag className='w-10 h-10 text-red-700 ' />
            </div>
            <h2 className='text-2xl font-bold '>SnapDeal</h2>
            


        </div>

    <div>
      <form action="" className='  '>
        <div className='relative hidden md:flex items-center'>
          <CiSearch className='h-10 w-7 absolute left-2 font-bold  '/>
          <input type="search" placeholder='Search item here ' className=' relative   text-center p-2 w-110 h-13 border border-mauve-600 rounded ' />
        
        </div>


      </form>
    </div>
 <div className=' flex gap-3 md:gap-4'>
    {
        navData.map(ele=>(
          
            <NavLink to={ele.path} className='p-2 text-lg hidden md:flex font-semibold  rounded hover:bg-gray-100 underline '>
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
        <NavLink to={'/login'}><FcContacts className='h-6 w-6 md:h-8 md:w-8' /></NavLink>
      }
      

    </div>
    <div className='relative'>
       
        <NavLink to={'/cart'}><IoCart className='h-7 w-7 md:h-10 md:w-10'/></NavLink>
        <span className='absolute -top-2 -right-2 h-5 w-5 rounded bg-amber-500 flex justify-center items-center'>{cartItems.length}</span>
       

    </div>

    <div>
      {
        <NavLink to={'/wishlist'}><FaRegHeart className=' h-6 w-6 md:h-9 md:w-9 '/></NavLink>
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
