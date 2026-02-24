import React, { useContext } from 'react'
import { CartContext } from '../createContext'

const HeroCart = () => {
const {cartItems,removeFromCart}=useContext(CartContext)
  return (
    <div>
      <div>
        {
            cartItems.length===0?"Cart is Empty":
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

