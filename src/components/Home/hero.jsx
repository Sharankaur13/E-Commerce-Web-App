import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      img: "/hero3.jpeg",
      head: "New Fashion Collection",
      desc: "Discover trendy outfits for every season"
    },
    {
      img: "/makeup.jpg",
      head: "Beauty Products",
      desc: "Premium makeup for glowing skin"
    },
    {
      img: "/heroshoe.png",
      head: "Stylish Shoes",
      desc: "Comfortable and fashionable footwear"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => prev === data.length - 1 ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? data.length - 1 : prev - 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(timer)
  }, [])

  return (
    <div>

      <div className='relative w-full h-[30vh] md:h-[70vh] overflow-hidden'>

        {/* Image */}
        <img
          src={data[currentIndex].img}
          alt=""
          className='w-full h-full object-cover duration-700'
        />

        {/* Text */}
        <div className='flex flex-col gap-2 absolute top-1/2 left-10 transform -translate-y-1/2'>
          <h2 className='text-2xl md:text-3xl md:w-96 font-bold text-amber-100'>
            {data[currentIndex].head}
          </h2>

          <p className='text-xl md:text-2xl md:w-[500px] font-semibold text-white'>
            {data[currentIndex].desc}
          </p>
        </div>

        {/* Left Arrow */}
        <FaArrowLeft
          onClick={prevSlide}
          className='absolute top-1/2 left-3 -translate-y-1/2 h-8 w-8 bg-black/40 p-2 rounded-full text-white cursor-pointer hover:bg-black transition'
        />

        {/* Right Arrow */}
        <FaArrowRight
          onClick={nextSlide}
          className='absolute top-1/2 right-3 -translate-y-1/2 h-8 w-8 bg-black/40 p-2 rounded-full text-white cursor-pointer hover:bg-black transition'
        />

        {/* Slider Lines */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">

          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[4px] w-10 rounded transition-transform duration-500
              ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default Hero