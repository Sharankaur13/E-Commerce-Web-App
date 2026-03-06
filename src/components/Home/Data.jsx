import React, { useContext } from 'react'
import { CartContext } from '../createContext'
import { DataContext } from '../DataContext'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Data = () => {
//   const product=[
  
//     {
//         id:1,
//         img:"/clean.jpeg",
//         btn:"Add to cart"
//     },
//      {
//         id:2,
//         img:"/clean.jpeg",
//         btn:"Add to cart"
//     },
//      {
//         id:3,
//         img:"/clean.jpeg",
//         btn:"Add to cart"
//     },
//      {
//         id:4,
//         img:"/clean.jpeg",
//         btn:"Add to cart"
//     },
//      {
//         id:5,
//         img:"/clean.jpeg",
//         btn:"Add to cart"
//     },
//      {
//         id:6,
//         img:"/clean.jpeg",
//         btn:"Add to cart"
//     }
  
//   ]

  const {addToCart}=useContext(CartContext)
  const{Data1}=useContext(DataContext)


  return (
   <div className='bg-olive-100 '>
     <div className='grid grid-cols-3  gap-5 p-15 '>
        {
            Data1.map(ele=>(
                <div key={ele.id} className='   flex flex-col gap-4 items-center bg-white rounded-sm shadow-lg text-center p-3 '>
                  <Link to={`${ele.id}` }> <img 
  src={Array.isArray(ele.img) ? ele.img[0] : ele.img} 
  alt="" 
  className='h-70 w-70 rounded-lg ' 
/></Link>
                    
                        <p className='text-sm px-0.5'>{ele.desc}</p>
                        <div className='flex items-center gap-6'>
                            <div className='flex gap-3'>
                                <img src={ele.img2} alt="" className='w-6 h-6' />
                                 <img src={ele.img2} alt=""  className='w-6 h-6'/>
                                  <img src={ele.img2} alt="" className='w-6 h-6' />
                                   <img src={ele.img2} alt="" className='w-6 h-6' />
                                    <img src={ele.img2} alt="" className='w-6 h-6' />


                            </div>
                         
                           <div className='flex flex-col '>
                             <p className='text-sm text-gray-400  line-through'>{ele.preprice}

                             </p>
                             <p className='text-sm font-bold text-blue-800 border p-0.5 '>{ele.price}

                             </p>

                           </div>

                        </div>
        
                    <Link to={`${ele.id}` } className='p-3  rounded-2xl border border-pink-400' >{ele.btn}</Link>
                    {/* <button onClick={()=>addToCart(ele)} className='p-2 bg-amber-500'>{ele.btn}</button> */}

                </div>
            ))
        }
      
    </div>

   </div>  )
}

export default Data
