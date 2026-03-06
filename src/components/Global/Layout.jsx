import React from 'react'

import { Outlet } from 'react-router-dom'
import CartProvider from '../createContext'
import DataProvider from '../DataContext'
import Nav2 from './Nav2'
import Nav from './Nav'

const Layout = () => {
  return (
    <div>
      <CartProvider>
        <DataProvider>
           <Nav/>
          {/* <Nav2/> */}
         <Outlet/>
        </DataProvider>
        

      </CartProvider>
     
    </div>
  )
}

export default Layout
