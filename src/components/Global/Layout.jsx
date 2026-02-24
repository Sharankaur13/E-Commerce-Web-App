import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import CartProvider from '../createContext'
import DataProvider from '../DataContext'

const Layout = () => {
  return (
    <div>
      <CartProvider>
        <DataProvider>
           <Nav/>
         <Outlet/>
        </DataProvider>
        

      </CartProvider>
     
    </div>
  )
}

export default Layout
