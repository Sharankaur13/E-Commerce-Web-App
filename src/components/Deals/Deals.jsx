import React, { useEffect, useState } from 'react'
import { DiVim } from 'react-icons/di'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaAnglesLeft } from 'react-icons/fa6'

const Deals = () => {
      const data = [
        { id: 1, img:'/deal1.jpg' },
        { id: 2, img:'/deal2.jpg' },
        { id: 3, img:'/deal3.jpg' },
        { id: 4, img:'/deal8.jpg' },
        { id: 5, img:'/deal4.jpg' },
        { id: 6, img:'/deal5.jpg'},
        { id: 7, img:'/deal6.jpg'},
        { id: 8, img:'/deal1.jpg'},

    ]
    const [cardsToShow,setCardsToShow] = useState(4)
    const [index,setIndex] = useState(0)


    const prev=()=>{
      if(index>0){
        setIndex(prev=>prev-1)
      }
    }
    const next=()=>{
      if(index<data.length-cardsToShow){
        setIndex(prev=>prev+1)
      }
    }

    useEffect(()=>{
      const handleResize=()=>{
        if(window.innerWidth<640){
          setCardsToShow(1)
        }
        else if(window.innerWidth<1024){
          setCardsToShow(3)
        }
        else{
          setCardsToShow(4)
        }
      }
      handleResize()
      window.addEventListener("resize",handleResize)
    })

  return (
    <div className='flex flex-col gap-10 '>
        <p className='text-5xl font-bold text-center mt-10'>Deal of the day</p>
        <div className='relative overflow-hidden'>
      <div className='flex duration-500'
      style={{
        transform:`translateX(-${index*(100/cardsToShow)}%)`
      }}
      >
        {
          data.map(ele=>(
            <div key={ele.id} className='p-6'
            style={{
              minWidth:`${100/cardsToShow}%`
            }}
            >
              <img src={ele.img} alt="" className='w-60 h-60 rounded-2xl' />

            </div>
          ))
        }
      </div>

      <div className=''>
        <button onClick={prev} className='p-3 bg-white rounded-full absolute top-1/2 left-4'><FaAnglesLeft /></button>
        <button onClick={next} className='p-3 bg-white absolute top-1/2 rounded-full right-4 cursor-grab'><FaAngleDoubleRight /></button>
      </div>
      
    </div>

    </div>
      )
}

export default Deals
