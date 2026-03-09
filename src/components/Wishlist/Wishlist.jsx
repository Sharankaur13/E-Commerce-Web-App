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
className='w-70 bg-rose-700 text-white flex justify-center items-center text-center h-10 cursor-pointer font-bold text-lg'
>
START SHOPPING NOW
</NavLink>

</div>
</div>

:

<div className='flex gap-5 items-center justify-center flex-wrap'>

{
wishlist.map(ele => (

<div
key={ele.id}
className='h-[300px] w-50 border flex flex-col items-center justify-center relative'
>

{/* HEART ICON */}
<FaHeart
onClick={() => toggleWishlist(ele)}
className="absolute top-3 right-3 text-red-500 cursor-pointer text-xl"
/>

<img
src={Array.isArray(ele.img) ? ele.img[0] : ele.img}
alt=""
className='w-60 h-70 rounded-lg'
/>

<p className='text-sm text-center px-2'>{ele.desc}</p>

<button
onClick={() => toggleWishlist(ele)}
className='p-2 bg-rose-500 text-white rounded'
>
Remove from Wishlist
</button>

</div>

))
}

</div>

}

</div>
)
}

export default HeroWishlist