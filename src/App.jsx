import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Global/Layout'
import Home from './App/Home/Home'
import Price from './App/Price/Price'
import Cart from './App/Cart/Cart'
import Login from './components/Login/Login'
import ProductDetails from './components/ProductDetails'
import Mens from './App/Mens/Mens'








const App = () => {
  
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>,

      
    },
    {
      path:"//:id",
      element:<ProductDetails/>,

      
    },
    {
      path:"/mens",
      element:<Mens/>,

      
    },
    {
      path:"/mens/:id",
      element:<ProductDetails/>,

      
    },

       {
      path:"/price",
      element:<Price/>,


      
    },
    {
      path:"/cart",
      element:<Cart/>,

      
    },
    {
      path:"/login",
      element:<Login/>
    }
   ]
  }
] 
)
  return (
   <>
   <RouterProvider router={router}/>

   </>
  )
      
  

}

export default App






