import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

const WomensClothe = () => {
    const {Data1}=useContext(DataContext)
    const womensProduct = Data1.filter(ele => ele.category==='women')


  return (
    <div>
        <div>
            {
                womensProduct.map(ele=>(
                    <div key={ele.id} className='w-80 flex flex-col gap-4 items-center bg-white rounded-sm shadow-lg text-center p-3'>
                    <Link to={`${ele.id}`}>
                <img 
                  src={Array.isArray(ele.img) ? ele.img[0] : ele.img} 
                  alt="" 
                  className='w-60 h-70 rounded-lg' 
                />
              </Link>
              <p className='text-sm px-0.5'>{ele.desc}</p>

              <div className='flex items-center gap-6'>
                <div className='flex gap-3'>
                  <img src={ele.img2} className='w-6 h-6' />
                  <img src={ele.img2} className='w-6 h-6' />
                  <img src={ele.img2} className='w-6 h-6' />
                </div>

                <div className='flex flex-col'>
                  <p className='text-sm text-gray-400 line-through'>{ele.preprice}</p>
                  <p className='text-sm font-bold text-blue-800 border p-0.5'>{ele.price}</p>
                </div> 
                </div>
                 <Link to={`${ele.id}`} className='p-2 bg-blue-300 rounded'>
                {ele.btn}
              </Link>
              </div>

                  
                ))
            }

        </div>
      
    </div>
  )
}

export default WomensClothe

