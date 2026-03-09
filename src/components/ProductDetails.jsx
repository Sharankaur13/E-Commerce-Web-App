// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { DataContext } from './DataContext'400

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

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from './createContext'
import { DataContext } from './DataContext'
import { FaLeftLong } from 'react-icons/fa6'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ProductDetails = () => {
    const[currentIndex,setCurrentIndex]=useState(0);

    
  
  const navigate = useNavigate()
  const handleGoBack=()=>{
    navigate(-1)
  }
    const {id}=useParams()
    const {addToCart,cartItems,increaseQty,decreaseQty}=useContext(CartContext)
    const {Data1}=useContext(DataContext)
    const product=Data1.find(ele=>ele.id===Number(id))
    const cartItemss=cartItems.find(ele=>ele.id===product.id)

    const images = Array.isArray(product.img) ? product.img
  : [product.img]
  const nextSlide = () => {
  setCurrentIndex(prev =>
    prev === images.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex(prev =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

useEffect(() => {
  if (images.length === 0) return;

  const timer = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(timer);
}, [images.length]);
  return (
    <div className=''>

       <div className="flex flex-col gap-2">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        onClick={() => setCurrentIndex(index)}
        className={`h-16 w-16 object-cover cursor-pointer border-2
        ${currentIndex === index ? "border-blue-600" : "border-gray-300"}`}
      />
    ))}
  </div>


      <button onClick={handleGoBack} className=' text-black '><FaLeftLong/></button>
    <div className='flex flex-col  relative justify-center items-center h-[70vh]'>
       <div className='flex gap-4 relative'>
        <div className='relative'>
       <img  src={images[currentIndex]}  alt="" className='h-90 w-70 rounded-lg shadow-2xl'/>
       </div>
       <FaArrowLeft onClick={prevSlide} className='absolute top-1/2 h-7 w-9 rounded-2xl text-white ' />
             <FaArrowRight onClick={nextSlide} className='absolute top-1/2 left-60 h-7 w-9 text-black'/>
       <div className='flex flex-col gap-4  w-90 p-3 rounded-lg shadow-2xl'>
        <p>{product.desc}</p>
        
          <div className='flex gap-2 items-center'>
          <p className='text-2xl font-semibold  border border-gray- text-black '>{product.price}</p>
          <p className='text-sm font-bold text-gray-500  line-through'>{product.preprice}</p>
          <p className='text-blue-800 font-semibold text-lg'>{product.off}</p>


        </div>
        <div className='flex gap-2 '>
         <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-bold '>{product.size}</p>
          <p className='text-sm'>{product.pr}</p>

         </div>
          <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-bold '>{product.size2}</p>
          <p className='text-sm'>{product.pr2}</p>

         </div>
           <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-bold '>{product.size3}</p>
          <p className='text-sm'>{product.pr2}</p>

         </div>
           <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-semibold '>{product.size4}</p>
          <p className='text-sm'>{product.pr2}</p>

         </div>
         <div className='flex flex-col  items-center border w-15 h-13 bg-gray-50 rounded-2xl cursor-pointer'>
          <p className=' text-xl font-semibold '>{product.size5}</p>
          <p className='text-sm'>{product.pr2}</p>

         </div>
        </div>
        {
        !cartItemss?(
            <div className='flex gap-3'>
                <button onClick={()=>addToCart(product)} className='p-3 bg-pink-600 text-white'>Add to Card</button>
                 <button onClick={()=>addToCart(product)} className='p-3 text-white bg-blue-700'>Buy now</button>
            </div>
        ):
        (
         <div className='flex items-start gap-3'>
            <button onClick={()=>decreaseQty(cartItemss.id)} className='p-3 bg-amber-500'>-</button>
            <p>{cartItemss.quantity}</p>
           <button onClick={()=>increaseQty(cartItemss.id)} className='p-3 bg-amber-500'>+</button>
         </div>
        )
       }



         
         

        
       </div>
       </div>

             
    </div>
    </div>
  )
}

export default ProductDetails

