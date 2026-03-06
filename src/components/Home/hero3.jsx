import React from 'react'
import { motion } from "framer-motion";
 


const Hero3 = () => {
    
  return (
    <div>
        <main style={{backgroundImage: "url('/bghero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",}}>

            <div className='container mx-auto grid md:grid-cols-3 items-center  h-full px-3'>
                <div className='text-amber-100 mt-[100px] md:mt-0 p-4 space-y-28'>
                    <motion.h1 
                    initial={{opacity:0,y:-100}} 
                    animate={{opacity:1,y:0}} 
                    transition={{type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1}} className='text-7xl font-bold leading-tight ml-14 text-amber-100'>Sharan Store </motion.h1>

                    <motion.div
                     initial={{opacity:0,y:100}} 
                     animate={{opacity:1,y:0}} 
                     transition={{type:"spring",
                     stiffness:100,
                     damping:10,
                     delay:1.2}} className='relative'>
                        <div className='relative z-10 space-y-4'>
                        <h2 className='text-xl text-gray-50'> Elevate Your Everyday Style</h2>
                        <h2 className='text-sm opacity-55  w-70 text-amber-100'>Shop premium fashion and beauty products designed to make you shine.</h2>
                    </div>

                    <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'>

                    </div>
                    </motion.div>


                </div>

                {/* HeroImageCenter */}
                <div className='relative'>
                    <motion.img initial={{opacity:0,scale:0}} 
                     animate={{opacity:1,scale:1}} 
                     transition={{type:"spring",
                     stiffness:100,
                     damping:10,
                     delay:0.4}} src="/tumbler.jpg" alt="" className='relative z-40 
                     h-[400px] w-50 ' />

                    {/* Orange circle div */}

                    <motion.div initial={{opacity:0,y:100}} 
                     animate={{opacity:1,y:0}} 
                     transition={{type:"spring",
                     stiffness:100,
                     damping:10,
                     delay:0.8}} className='h-[130px] w-[130px] absolute -top-12 right-17  
                    border-[20px]  z-10 rounded-full border-amber-600  '>

                    </motion.div>


                    {/* big txt */}
                    <motion.div initial={{opacity:0,y:100}} 
                     animate={{opacity:1,y:0}} 
                     transition={{type:"spring",
                     stiffness:100,
                     damping:10,
                     delay:0.8}} className='absolute -top-10 left-[300px] z-[1]'  >
                        <h2 className='text-[70px] scale-150 font-bold leading-none text-black'> Bffmkf</h2>
                    </motion.div>
                   


                </div>

               

                     <div className='text-amber-100 mt-[100px] md:mt-0 p-4 space-y-28'>
                    <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14 '>Sharan Store </h1>

                    <motion.div initial={{opacity:0,y:100}} 
                     animate={{opacity:1,y:0}} 
                     transition={{type:"spring",
                     stiffness:100,
                     damping:10,
                     delay:1.2}} className='relative'>
                        <div className='relative z-10 space-y-4'>
                        <h2 className='text-2xl text-gray-50'> Explore</h2>
                        <h2 className='text-sm opacity-55  w-70'>  Find your perfect look from our latest collection.</h2>
                    </div>

                    <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-black'>

                    </div>
                    </motion.div>


                </div>

               

            </div>

        </main>
      
    </div>
  )
}

export default Hero3
