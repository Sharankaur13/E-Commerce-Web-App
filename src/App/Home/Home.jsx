import React from 'react'
import Data from '../../components/Home/Data'
import Hero from '../../components/Home/hero'
import SectionOne from '../../components/Home/SectionOne'
import Deals from '../../components/Deals/Deals'
import Hero1 from '../../components/Home/hero2'
import Hero3 from '../../components/Home/hero3'
import Hero4 from '../../components/Home/hero4'
import Collection from '../../components/Home/Collection'
import Line from '../../components/Home/Line'
import Collection2 from '../../components/Home/Collection2'

const Home = () => {
  return (
    <div>
      {/* <Collection/> */}
      <Collection2/>
      <Line/>
      
      <Hero/>
      {/* <Hero1/> */}
      {/* <Hero3/> */}
      {/* <Hero4/> */}
      
      
        <SectionOne/>
        <Deals/>
      <Data/>
    
    </div>
  )
}

export default Home
