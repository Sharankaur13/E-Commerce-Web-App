import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='bg-neutral-400'>
        <div className='flex p-10 gap-10 '>

          {/* shopping choice */}

          <div className='flex flex-col gap-4'>
            <p className='text-xl  '>Shop</p>
            <div className='flex flex-col gap-2 text-sm '>
            <NavLink >Men</NavLink>
            <NavLink >Women</NavLink>
            <NavLink >Snapdeal group </NavLink>
            <NavLink >Kids</NavLink>
            <NavLink >Home</NavLink>
            <NavLink >Beauty</NavLink>

          

          </div>

          </div>


          {/* corporate info */}
          <div className='flex flex-col gap-4'>
            <p className='text-xl'>Corporate info</p>
            <div className='flex flex-col gap-2 text-sm'>
            <NavLink >Career at Snapdeal</NavLink>
            <NavLink >About Snapdeal</NavLink>
            <NavLink >Snapdeal group </NavLink>
            <NavLink >Invstor relations</NavLink>
            <NavLink >Press</NavLink>
            <NavLink >Corporate governance</NavLink>

          

          </div>

          </div>

          {/* Help */}

          <div className='flex flex-col gap-4'>
            <p className='text-xl'>Help</p>
            <div className='flex flex-col gap-2 text-sm'>
            <NavLink >Customer service</NavLink>
            <NavLink >Find store</NavLink>
            <NavLink >Legal & privacy</NavLink>
            <NavLink >Contact</NavLink>
            <NavLink >Secure shopping</NavLink>
            <NavLink >Cookie setting</NavLink>

          

          </div>

          </div>



        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer
