import React, { useContext } from 'react'
import { CartContext } from '../createContext'
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa"

const HeroWishlist = () => {

const { wishlist, toggleWishlist } = useContext(CartContext)

return (
<div>

{
wishlist.length === 0 ?

<div className='flex justify-center items-center'>
<div className='flex flex-col gap-4 bg-white items-center shadow-lg rounded-md w-150 h-96'>

<p className='text-3xl font-bold text-gray-500 text-center'>
Wishlist is empty
</p>

<p className='text-2xl text-gray-500 font-semibold text-center'>
Browse Category
</p>

<NavLink
to='/'
className='w-70 bg-rose-700 text-white flex justify-center items-center text-center h-10 cursor-pointer font-bold text-lg'>
START SHOPPING NOW
</NavLink>

</div>
</div>

:

<div className=''>

{
wishlist.map(ele => (

<div
key={ele.id}
className='flex flex-col gap-4 justify-center items-center   py-10 '>

{/* HEART ICON */}

<div className='flex gap-3 relative  '>
    <FaHeart
onClick={() => toggleWishlist(ele)}
className="absolute top-2 left-8 text-red-500 cursor-pointer text-xl"
/>

<div>
    <img
src={Array.isArray(ele.img) ? ele.img[0] : ele.img}
alt=""
className='w-80 h-80 rounded-lg'
/>
</div>

<div className='flex flex-col text-center p-4 gap-5  shadow-2xl w-80 h-80'>
    <p className='text-sm '>{ele.desc}</p>
     <div className='flex gap-2 items-center'>
          <p className='text-2xl font-semibold  border border-gray- text-black '>{ele.price}</p>
          <p className='text-sm font-bold text-gray-500  line-through'>{ele.preprice}</p>
          <p className='text-blue-800 font-semibold text-lg'>{ele.off}</p>
          </div>

          <div className='grid grid-cols-4 gap-3'>
         <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-bold '>{ele.size}</p>
          <p className='text-sm'>{ele.pr}</p>

         </div>
          <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-bold '>{ele.size2}</p>
          <p className='text-sm'>{ele.pr2}</p>

         </div>
           <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-bold '>{ele.size3}</p>
          <p className='text-sm'>{ele.pr2}</p>

         </div>
           <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-semibold '>{ele.size4}</p>
          <p className='text-sm'>{ele.pr2}</p>

         </div>
         <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-semibold '>{ele.size5}</p>
          <p className='text-sm'>{ele.pr2}</p>

         </div>
        </div>



<button
onClick={() => toggleWishlist(ele)}
className='p-2 bg-rose-500  text-white rounded'
>
Remove from Wishlist
</button>
</div>

</div>
</div>

))
}

</div>


}

</div>
)
}

export default HeroWishlist