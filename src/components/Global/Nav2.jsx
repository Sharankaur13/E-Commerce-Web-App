import React, { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../createContext'
import { HiShoppingBag } from 'react-icons/hi'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FiMenu } from "react-icons/fi"

const Nav2 = () => {

  const { cartItems, wishlist } = useContext(CartContext)

  const [showDropdown, setShowDropdown] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const navData = [
    { element: 'Home', path: '/' },
    { element: 'Deal', path: '/deal' }
  ]

  return (
    <div className='sticky top-0 z-50'>

      <nav className='bg-white shadow-md'>

        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>

          {/* LEFT SECTION */}
          <div className='flex items-center gap-4'>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className='md:hidden text-2xl'
            >
              <FiMenu />
            </button>

            {/* CATEGORY DROPDOWN */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Categories
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col z-50">
                  <NavLink to="/mens" className="px-4 py-2 hover:bg-gray-100">Mens</NavLink>
                  <NavLink to="/womens" className="px-4 py-2 hover:bg-gray-100">Womens</NavLink>
                  <NavLink to="/kids" className="px-4 py-2 hover:bg-gray-100">Kids</NavLink>
                  <NavLink to="/home" className="px-4 py-2 hover:bg-gray-100">Home</NavLink>
                </div>
              )}
            </div>

            {/* LOGO */}
            <div className='flex items-center gap-1'>
              <HiShoppingBag className='w-8 h-8 text-red-700' />
              <h2 className='text-xl md:text-2xl font-bold'>SnapDeal</h2>
            </div>

          </div>

          {/* SEARCH BAR */}
          <div className='hidden md:block w-1/2'>
            <div className='relative flex items-center'>
              <CiSearch className='h-6 w-6 absolute left-3' />
              <input
                type="search"
                placeholder='Search item here'
                className='w-full p-2 pl-10 border rounded'
              />
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className='flex items-center gap-4'>

            {/* USER */}
            <NavLink to='/login'>
              <FaRegCircleUser className='h-7 w-7' />
            </NavLink>

            {/* CART */}
            <div className='relative'>
              <NavLink to='/cart'>
                <IoCart className='h-7 w-7' />
              </NavLink>
              <span className='absolute -top-2 -right-2 h-5 w-5 rounded bg-amber-500 flex justify-center items-center text-xs'>
                {cartItems.length}
              </span>
            </div>

            {/* WISHLIST */}
            <div className='relative'>
              <NavLink to='/wishlist'>
                <FaRegHeart className='h-7 w-7' />
              </NavLink>

              <span className='absolute -top-2 -right-2 h-5 w-5 rounded bg-red-500 text-white flex justify-center items-center text-xs'>
                {wishlist?.length || 0}
              </span>
            </div>

          </div>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className='md:hidden flex flex-col gap-3 p-4 bg-white border-t'>

            {navData.map((ele, index) => (
              <NavLink
                key={index}
                to={ele.path}
                className='text-lg font-semibold'
              >
                {ele.element}
              </NavLink>
            ))}

            <NavLink to='/mens'>Mens</NavLink>
            <NavLink to='/womens'>Womens</NavLink>
            <NavLink to='/kids'>Kids</NavLink>
            <NavLink to='/home'>Home</NavLink>

          </div>
        )}

      </nav>

    </div>
  )
}

export default Nav2