import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Hero1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const data = [
    { img: "/hero3.jpeg" },
    { img: "/makeup.jpg" },
    { img: "/heroshoe.png" },
  ]

  const nextSlide = () => {
    setCurrentIndex(prev => prev === data.length - 1 ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? data.length - 1 : prev - 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % data.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-[80vh] flex overflow-hidden">

      {/* LEFT SECTION */}
      <div className="w-[40%] bg-gradient-to-br from-black to-gray-900 text-white flex flex-col justify-center px-16">

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Discover <span className="text-red-600">Premium</span> Collection
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Elevate your style with our latest fashion arrivals.
        </p>

        <button className="w-40 py-3 bg-red-600 rounded-full hover:bg-red-700 transition shadow-lg">
          Shop Now
        </button>

      </div>


      {/* RIGHT SLIDER */}
      <div className="w-[60%] relative">

        <img
          src={data[currentIndex].img}
          alt=""
          className="w-full h-full object-cover duration-700"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        {/* Arrows */}
        <FaArrowLeft
          onClick={prevSlide}
          className="absolute top-1/2 left-5 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full cursor-pointer hover:bg-black transition"
        />

        <FaArrowRight
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full cursor-pointer hover:bg-black transition"
        />

        {/* Indicator Buttons */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${currentIndex === index 
                  ? "bg-red-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"}
              `}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Hero1