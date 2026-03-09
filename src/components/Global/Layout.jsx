import React from 'react'

import { Outlet } from 'react-router-dom'
import CartProvider from '../createContext'
import DataProvider from '../DataContext'


import Footer from './Footer'
import Nav from './Nav'

const Layout = () => {
  return (
    <div>
      <CartProvider>
        <DataProvider>
           <Nav/>
          {/* <Nav2/> */}
         <Outlet/>
         <Footer/>
        </DataProvider>
        

      </CartProvider>
     
    </div>
  )
}

export default Layout
