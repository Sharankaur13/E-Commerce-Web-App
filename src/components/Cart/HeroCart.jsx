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
                <div className='flex justify-center'>
               <div className='flex flex-col  bg-gray-200 shadow-lg rounded-md items-center w-150 h-96'>
              <p className='text-4xl text-gray-500'>Shoping Cart is empty</p>
              <p className='text-3xl text-gray-200'>Browse Category</p>
              <div className="   flex  justify-center items-center">

      <NavLink to="/mens" className="" >Mens
      </NavLink>

      <NavLink to="/womens" className="">
        Womens
      </NavLink>

      <NavLink to="/kids" className="px-4 py-2 hover:bg-gray-100" > Kids
      </NavLink>

      <NavLink to="/home" className="px-4 py-2 hover:bg-gray-100">Home</NavLink>
</div>
             </div>
</div>

            :
            <div>
              {
            cartItems.map(ele=>(
                <div key={ele.id} className='h-[300px] w-50 border flex flex-col items-center justify-center'>
                    <img src={ele.img} alt="" className='w-50 h-60' />
                    <p>Qty:{ele.quantity}</p>

                    <button onClick={()=>removeFromCart(ele.id)} className='p-2 bg-amber-500'>Remove item</button>

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

