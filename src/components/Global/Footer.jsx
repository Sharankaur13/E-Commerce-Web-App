import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col  gap-10 p-13'>
        
        {/* footer top */}

        <div className='flex flex-col gap-10 md:flex-row md:gap-30'>

          {/* subscribe */}

          <div className=' flex flex-col gap-3 md:gap-6 rounded-lg hover:bg-neutral-200 hover:shadow-2xl p-2 '>
            <div className='flex flex-col gap-2'>
            <p className='text-2xl md:text-3xl font-bold'>Subscribe to our awesome emails.</p>
            <p>Get our latest offers and news straight in your inbox.</p>
            </div>
 
            <div className='flex gap-1 '>
              <input type="email" placeholder='Please enter an email address' className='text-center bg-gray-200  w-90' />
              <button className='w-30 md:w-40 h-13 bg-black text-white font-bold rounded-sm text-sm md:text-lg '>Subscribe</button>

            </div>



          </div>

          {/* download our apps */}

          <div className=' flex flex-col gap-3 md:gap-6 hover:bg-neutral-200 hover:shadow-lg rounded-lg p-2'>
            <div className='flex flex-col gap-2'>
            <p className='text-xl md:text-3xl font-bold'>Download our apps</p>
            <p>Shop our products and offers on-the-go.</p>
            </div>
 
            <div className='flex gap-3  '>
              <div className='flex gap-2 items-center h-13 w-40 rounded-sm bg-black'>
              <div>
                  <FaApple className='h-8 w-8 text-white' />
              </div>
              <div className=''>
                <p className='text-xs text-white'>Download on the app</p>
                <p className='text-lg md:text-xl font-bold text-white'>App Store</p>

              </div>



              </div>



             <div className='flex gap-2 items-center h-13 w-40 rounded-sm bg-black'>
              <div>
                  <FaGooglePlay  className='h-8 w-8 text-white' />
              </div>
              <div className=''>
                <p className='text-xs text-white'>Get it on</p>
                <p className='text-lg md:text-xl font-bold text-white'>Google Pay</p>

              </div>



              </div>

            </div>



          </div>



          
        </div>

        {/* icons */}

        {/* <div className='flex flex-col gap-5'>
          <p>Connect</p>
          <div className='flex gap-3'>
            <img src="/fb2.png" alt="" />
            <img src="/call.png" alt="" />


          </div>
        </div> */}



        <div className='flex flex-col  md:flex-row  md:justify-between '>

          {/* shopping choice */}

          <div className='flex flex-col gap-4'>
            <p className='text-lg '>Shop</p>
            <div className='flex flex-col gap-2 text-sm text-gray-600'>
            <NavLink >Men</NavLink>
            <NavLink >Women</NavLink>
            <NavLink >Snapdeal group </NavLink>
            <NavLink >Kids</NavLink>
            <NavLink >Home</NavLink>
            <NavLink >Beauty</NavLink>

          

          </div>

          </div>

          {/* policy */}

          <div className='flex flex-col gap-4'>
             <p className='text-lg'>Policy info</p>
            <div className='flex flex-col gap-2 text-sm text-gray-600'>
            <NavLink >Privacy Policy</NavLink>
            <NavLink >Terms for sale </NavLink>
            <NavLink >Terms of use </NavLink>
            <NavLink >Report abuse & Takedown Policy</NavLink>
            <NavLink >Know your BIS Standard</NavLink>
            <NavLink >FAQ</NavLink>

          

          </div>

          </div>


          {/* corporate info */}
          <div className='flex flex-col gap-4'>
            <p className='text-lg'>Corporate info</p>
            <div className='flex flex-col gap-2 text-sm text-gray-600'>
            <NavLink >Career at Snapdeal</NavLink>
            <NavLink >About Snapdeal</NavLink>
            <NavLink >Snapdeal group </NavLink>
            <NavLink >Invstor relations</NavLink>
            <NavLink >Press</NavLink>
            <NavLink >Corporate governance</NavLink>

          

          </div>

          </div>

          {/* Snapdeal bussiness */}
           <div className='flex flex-col gap-4'>
            <p className='text-lg'>Snapdeal Bussiness</p>
            <div className='flex flex-col gap-2 text-sm text-gray-600'>
            <NavLink >Shopping App</NavLink>
            <NavLink >Sell on Snapdeal</NavLink>
            <NavLink >Media Enquiries</NavLink>
            {/* <NavLink >Contact</NavLink>
            <NavLink >Secure shopping</NavLink>
            <NavLink >Cookie setting</NavLink> */}

          

          </div>

          </div>


          {/* Help */}

          <div className='flex flex-col gap-4'>
            <p className='text-lg'>Help</p>
            <div className='flex flex-col gap-2 text-sm text-gray-600'>
            <NavLink >Customer service</NavLink>
            <NavLink >Find store</NavLink>
            <NavLink >Legal & privacy</NavLink>
            <NavLink >Contact</NavLink>
            <NavLink >Secure shopping</NavLink>
            <NavLink >Cookie setting</NavLink>

          

          </div>

          </div>



        </div>


        {/* large text */}
        

        <p className='text-sm text-gray-600'>Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts- thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes enabling order deliveries to more than 2500 towns and cities and expanding. Further, Snapdeal's mission is to become India’s value lifestyle omni-channel leader. We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their offline to online shopping journey. Snapdeal is part of the AceVector Group and one of India’s best-known e-commerce companies with an exclusive focus on the value segment.</p>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer
