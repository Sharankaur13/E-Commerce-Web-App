import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { id: 1, img: "/image.jpg" },
    { id: 2, img: "/image2.jpg" },
    { id: 3, img: "/image3.jpg" },
    { id: 4, img: "/image3.jpg" },
    { id: 5, img: "/image4.jpg" },
    { id: 6, img: "/image5.jpg" },
    { id: 7, img: "/image6.jpg" },
    { id: 8, img: "/image7.jpg" }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === data.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % data.length);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[30vh] md:h-[65vh] overflow-hidden relative">

      {/* SLIDER WRAPPER */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {data.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt=""
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <FaArrowLeft
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 h-8 w-8 bg-black/40 p-2 rounded-full text-white cursor-pointer hover:bg-black transition"
      />

      {/* Right Arrow */}
      <FaArrowRight
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 h-8 w-8 bg-black/40 p-2 rounded-full text-white cursor-pointer hover:bg-black transition"
      />

     {/* dots */}
      <div className="absolute bottom-5 right-2 -translate-x-1/2 flex gap-1">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[4px] w-2 rounded 
              ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;