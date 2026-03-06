import React, { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../createContext'
import { HiShoppingBag } from 'react-icons/hi'
import { FaRegCircleUser } from 'react-icons/fa6'

const Nav2 = () => {
  const { cartItems } = useContext(CartContext)
  const [showDropdown, setShowDropdown] = useState(false)

  const navData = [
    { element: 'Home', path: '/' },
    { element: 'Deal', path: '/deal' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-5 py-2 border rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              Categories
            </button>

            {showDropdown && (
              <div className="absolute mt-3 w-48 bg-white shadow-xl rounded-xl overflow-hidden animate-fadeIn">
                <NavLink to="/mens" className="block px-4 py-3 hover:bg-gray-100">Mens</NavLink>
                <NavLink to="/womens" className="block px-4 py-3 hover:bg-gray-100">Womens</NavLink>
                <NavLink to="/kids" className="block px-4 py-3 hover:bg-gray-100">Kids</NavLink>
                <NavLink to="/home" className="block px-4 py-3 hover:bg-gray-100">Home</NavLink>
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <HiShoppingBag className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-bold tracking-wide text-gray-800">
              Snap<span className="text-red-600">Deal</span>
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-10">
          <div className="relative w-full">
            <CiSearch className="absolute left-4 top-3 text-gray-500 text-xl" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Nav Links */}
          {navData.map((ele, index) => (
            <NavLink
              key={index}
              to={ele.path}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-red-600 transition ${
                  isActive ? 'text-red-600' : 'text-gray-700'
                }`
              }
            >
              {ele.element}
            </NavLink>
          ))}

          {/* User Icon */}
          <NavLink to="/login">
            <FaRegCircleUser className="h-6 w-6 text-gray-700 hover:text-red-600 transition" />
          </NavLink>

          {/* Cart */}
          <div className="relative">
            <NavLink to="/cart">
              <IoCart className="h-7 w-7 text-gray-700 hover:text-red-600 transition" />
            </NavLink>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* Wishlist */}
          <NavLink to="/wishlist">
            <FaRegHeart className="h-6 w-6 text-gray-700 hover:text-red-600 transition" />
          </NavLink>

          {/* Download Button */}
          <button className="hidden md:block px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-md">
            Download App
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Nav2