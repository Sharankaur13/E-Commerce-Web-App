import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Global/Layout'
import Home from './App/Home/Home'
import Price from './App/Price/Price'
import Cart from './App/Cart/Cart'
import Login from './components/Login/Login'
import ProductDetails from './components/ProductDetails'
import Mens from './App/Mens/Mens'
import Appdeal from './App/Dealapp/Appdeal'
import Women from './App/Women/Women'
import HeroWishlist from './components/Wishlist/Wishlist'










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
      path:"/womens",
      element:<Women/>,

      
    },
    {
      path:"/womens/:id",
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
      path:"/wishlist",
      element:<HeroWishlist/>,

      
    },

    {
      path:"/login",
      element:<Login/>
    },
    {
      path:'/deal',
      element:<Appdeal/>
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






