import React, { useContext } from 'react'
import { CartContext } from '../createContext'
import { NavLink } from 'react-router-dom'

const HeroCart = () => {
const {cartItems,removeFromCart}=useContext(CartContext)
  return (
    <div>
      <div>
        {
            cartItems.length===0?
                <div className='flex justify-center   items-center'>
               <div className='flex flex-col gap-4 bg-white items-center shadow-lg rounded-md w-150 h-96'>
              <p className='text-3xl font-bold text-gray-500 text-center'>Shopping cart is empty</p>
              <p className='text-2xl text-gray-500 font-semibold text-center'>Browse Category</p>
              <div className="  grid grid-cols-5 gap-3  text-center">

      <NavLink to="/mens" className="" >-Mens </NavLink>

      <NavLink to="/womens" className="">-Womens</NavLink>

      <NavLink to="/kids" className="" >-Kids</NavLink>

      <NavLink to="/home" className="">-Home</NavLink>

      
      <NavLink to="/mens" className="" >-Mens
      </NavLink>

      <NavLink to="/womens" className="">-Watch</NavLink>

      <NavLink to="/kids" className="" >-Footwear</NavLink>

      <NavLink to="/home" className="">-Bags </NavLink>

      <NavLink to="/mens" className="" >-Mobile
      </NavLink>

      <NavLink to="/womens" className="">-Tablets</NavLink>

      <NavLink to="/kids" className="" >-Decorative</NavLink>

      <NavLink to="/home" className="">-Eye Wear</NavLink>
      <NavLink to="/mens" className="" >-Furniture
      </NavLink>

      <NavLink to="/womens" className="">- Jawellery</NavLink>

      <NavLink to="/kids" className="" >-Kurti</NavLink>

      <NavLink to="/home" className="">-Boys shoes</NavLink>
      <NavLink to="/mens" className="" >-Girls shoes
      </NavLink>

      <NavLink to="/womens" className="">-Electronic</NavLink>

      <NavLink to="/kids" className="" >-Hair Accessories</NavLink>

      <NavLink to="/home" className="">-Cleaner</NavLink>
</div>

<NavLink  to='/' className='w-70 bg-rose-700 text-white flex justify-center items-center text-center h-10 cursor-pointer font-bold text-lg'>START SHOPPING NOW</NavLink>
             </div>
</div>

            :
            <div className='flex gap-5 items-center justify-center pt-10 '>
              {
            cartItems.map(ele=>(
              <div className='flex '>
                <div key={ele.id} className='  '>
                    <img 
  src={Array.isArray(ele.img) ? ele.img[0] : ele.img} 
  alt="" 
  className='w-90 h-130 rounded-lg' />

                    

                </div>
                <div className='flex flex-col gap-4  w-90 p-3 rounded-lg shadow-2xl'>
        <p>{ele.desc}</p>
        
          <div className='flex gap-2 items-center'>
          <p className='text-2xl font-semibold  border border-gray- text-black '>{ele.price}</p>
          <p className='text-sm font-bold text-gray-500  line-through'>{ele.preprice}</p>
          <p className='text-blue-800 font-semibold text-lg'>{ele.off}</p>


        </div>
        <div className='flex gap-2 '>
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
        <p>Qty:{ele.quantity}</p>

                    <button onClick={()=>removeFromCart(ele.id)} className='p-2 bg-gray-300'>Remove item</button>
        </div>
        
                
                </div>
            ))
        }
                
            </div>
        }
      </div>
    </div>
  )
}

export default HeroCart

