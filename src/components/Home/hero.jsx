import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Hero = () => {
  const[currentIndex,setCurrentIndex]=useState(0);

  const data=[
    {
       
      img: "/hero3.jpeg",
         
    },
    {
      img: "/makeup.jpg",
     
      
    },
     {
      img: "/heroshoe.png",
     
      
    },

  ];

   const nextSlide=()=>{
    setCurrentIndex(prev=>prev===data.length-1?0:prev+1)
  }

  const prevSlide=()=>{
    setCurrentIndex(prev=>prev===0?data.length-1:prev-1)
  }
 

  useEffect(()=>{
    const timer=setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);

         
      
      
    }, 3000);

    return()=>clearInterval(timer)
  },[])

  
  return (
    <div>

      <div className='relative w-full h-30 md:h-[70vh] overflow-hidden'> 
        <img src={data[currentIndex].img} alt="" className='w-full h-full object-cover  duration-700'/>
        <div className='flex flex-col gap-2 absolute top-1/2 left-10 transform -translate-y-1/2'>
        <h2 className='text-2xl md:text-3xl md:w-96 font-bold text-amber-100'> {data[currentIndex].head}</h2>
        <p className='text-xl md:text-2xl md:w-150 font-semibold text-[#FFFFFF]'>{data[currentIndex].desc}</p>
      </div>
      <FaArrowLeft onClick={prevSlide} className='absolute top-90 h-7 w-9 rounded-2xl text-white ' />
      <FaArrowRight onClick={nextSlide} className='absolute top-90 right-0 h-7 w-9 text-white'/>
      
        


    
      

      </div>
      

    </div>
  );
};
     
    

  


export default Hero



