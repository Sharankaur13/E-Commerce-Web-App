import React, { Children, createContext, useState } from 'react'
export const CartContext=createContext()

const CartProvider = ({children}) => {
    const[cartItems,setCartItems]=useState([])
    const addToCart=(items)=>{
        setCartItems(prev=>{
          const existingItems=prev.find(ele=>ele.id===items.id)
          if(existingItems){
            return prev.map(ele=>
              ele.id===items.id?{...ele,quantity:ele.quantity+1}:ele
            )
          }
          return[...prev,{...items,quantity:1}]
        })

    }

    const removeFromCart=(id)=>{
        setCartItems(prev=>prev.filter(ele=>ele.id!==id))
    }
  return (
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
    {children}
      
    </CartContext.Provider>
  )
}

export default CartProvider
