// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { DataContext } from './DataContext'

// const ProductDetails = () => {
//     const{id}=useParams()
//     const{Data1}=useContext( DataContext)
//     const Product=Data1.find(ele=>ele.id===Number(id))
//   return (
//     <div>
//         <h1>{Product.img}</h1>
//         <p>{Product.desc}</p>
//         <button to={}>View Product</button>
      
//     </div>
//   )
// }

// export default ProductDetails

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from './createContext'
import { DataContext } from './DataContext'

const ProductDetails = () => {
    const {id}=useParams()
    const {addToCart,cartItems,increaseQty,decreaseQty}=useContext(CartContext)
    const {Data1}=useContext(DataContext)
    const product=Data1.find(ele=>ele.id===Number(id))
    const cartItemss=cartItems.find(ele=>ele.id===product.id)
  return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
       <div className='flex gap-4'>
        <div>
        <img src={product.img} alt=""  className='h-90 w-70 rounded-lg shadow-2xl'/>
       </div>
       <div className='flex flex-col gap-3 w-90 p-3 rounded-lg shadow-2xl'>
        <p>{product.desc}</p>
        <div className='flex gap-2 items-center'>
          <p className='text-2xl font-semibold  border border-gray-400 text-black '>{product.price}</p>
          <p className='text-sm font-bold text-gray-500  line-through'>{product.preprice}</p>
          <p className='text-blue-800 font-semibold text-lg'>{product.off}</p>


        </div>
        <p></p>
       </div>
       </div>

       {
        !cartItemss?(
            <div className='flex gap-3'>
                <button onClick={()=>addToCart(product)} className='p-3 bg-amber-500'>Add to Card</button>
                 <button onClick={()=>addToCart(product)} className='p-3 text-white bg-blue-800'>Buy now</button>
            </div>
        ):
        (
         <div className='flex gap-4 items-center'>
            <button onClick={()=>decreaseQty(cartItemss.id)} className='p-3 bg-amber-500'>-</button>
            <p>{cartItemss.quantity}</p>
           <button onClick={()=>increaseQty(cartItemss.id)} className='p-3 bg-amber-500'>+</button>
         </div>
        )
       }
      
    </div>
  )
}

export default ProductDetails

