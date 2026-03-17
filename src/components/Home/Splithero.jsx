import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Splithero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { id: 1, img: "/blueimage.jpg" },
   
  ];



  return (
    <div className="w-full h-[60vh] md:h-[70vh] flex flex-col  md:flex-row pt-0 p-10 md:gap-5">

      {/* LEFT SIDE  */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Beauty Starts Here 
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-600">
          Discover the best products for your daily glow and confidence.
        </p>

        <button className="w-40 bg-blue-800 text-white flex rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* RIGHT SIDE (ONLY IMAGE SLIDER) */}
      <div className="w-full md:w-1/2 h-full relative overflow-hidden">

        <img
          src={data[currentIndex].img}
          alt="slider"
          className="w-full h-full object-cover duration-700 rounded-lg"
        />

        

      </div>

    </div>
  );
};

export default Splithero;