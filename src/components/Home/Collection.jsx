import React from 'react'
import { NavLink } from 'react-router-dom'

const Collection = () => {
    const data=[
        {
            img:'/calman.jpg',
            desc:"Men's fashion",
            path:'/mens'
        },
        {
            img:'/colwomen.jpg',
            desc:"Women's fashion",
            path:'/womens'
        },
        {
            img:'/colkitchen.jpg',
            desc:"Home & kitchen"

        },
        {
            img:'/colkid.jpg',
            desc:"Kid's fashion"
        },
        {
            img:'/colbeauty.jpg',
            desc:"Beuty & health"
        },
         {
            img:'/colbook.jpg',
            desc:"Books"
        },
        {
            img:'/colelectronic.jpg',
            desc:"Electronics"
        },
        {
            img:'/colsport.jpg',
            desc:"Sports & fitness"
        }

    ]
  return (
    <div>
      <section className=''>
        <div className='max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between '>
    {
        data.map(ele=>(
          
           <div className='flex justify-around'>
             <NavLink to={ele.path} className=' text-sm font-semibold  rounded  '>
              <div className='flex gap-2 items-center'>
                <img src={ele.img} alt="" className='h-10 w-10 rounded-full ' /> 
                     <p className=''>{ele.desc}</p>
               </div> 
            </NavLink>
           </div>
            
            
            
            
          //   <NavLink to={ele.path} className={({ isActive }) = `${isActive ? "text-red-700 font-semibold" : ""}`
          //   }>
          //   {ele.element}
          // </NavLink>

        ))
    }
   

    

    
   


 </div>

      </section>
    </div>
  )
}

export default Collection
