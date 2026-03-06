import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Hero4 = () => {

    const data=[{
      img: "/filbag1.jpg",
      title: "Fill Your bag with favourite",
      subtitle: "Elevate Your Everyday Style",
      title2: "Your option are our responsibility from deliver to destination",
      subtitle2: "Elevate ",
      
      desc: "Shop premium fashion and beauty products designed to make you shine.",
      desc2:'Shop premium fashion and beauty products designed to make you shine.',
      bigText: "Style"
    },
    {
      img: "/makeup.jpg",
      title: "Beauty Collection",
      subtitle: "Glow Every Day",
      title2: "Sharan",
      subtitle2: "Elevate ",
      desc: "Discover makeup products that enhance your natural beauty.",
      desc2:'Shop premium fashion and beauty products designed to make you shine.',
      bigText: "Beauty"
    },
    {
      img: "/heroshoe.png",
      title: "Shoe Trends",
      title2: "Sharan",
      
      subtitle2: "Elevate ",
      subtitle: "Walk With Confidence",
      desc: "Step into comfort and fashion with our latest shoes.",
      desc2:'Shop premium fashion and beauty products designed to make you shine.',
      bigText: "Shoes"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>

        <main
      key={currentIndex}   
      style={{
        backgroundImage: "url('/bghero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-3 items-center  h-full px-3">

        {/* left text */}
        <div className="text-amber-100 mt-[100px] md:mt-0 p-4 space-y-28">

          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1
                 }}
            className="text-5xl font-bold"
          >
            {data[currentIndex].title}
          </motion.h1>

          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1.2}}
          >
            <h2 className="text-xl">{data[currentIndex].subtitle}</h2>
            <p className="opacity-70 w-72">
              {data[currentIndex].desc}
            </p>
          </motion.div> */}
        </div>

        {/* Center Image */}
        <div className="relative flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{type:"spring",
                        stiffness:100,
                        damping:15,
                        delay:0.4
             }}
            src={data[currentIndex].img}
            alt=""
            className="h-[400px] w-[300px] rounded-2xl"
          />

          {/* <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:0.8}}
            className="absolute -top-10 left-40 text-[70px] font-bold text-black opacity-20"
          >
            {data[currentIndex].bigText}
          </motion.h2> */}
        </div>

        {/* right text */}

         <div className="text-amber-100 mt-[100px] md:mt-0 p-4 space-y-28">

          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:0.8
             }}
            className="text-6xl  font-bold hidden">
            {data[currentIndex].title2}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1 }}
          >
            <h2 className="text-xl">{data[currentIndex].subtitle2}</h2>
            <p className="opacity-70 w-72">
              {data[currentIndex].title2}
            </p>
          </motion.div>
        </div>


      </div>
    </main>
      
    </div>
  )
}

export default Hero4
