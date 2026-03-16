import React, { Children, createContext, useState } from 'react'
export const CartContext=createContext()

const CartProvider = ({children}) => {
    const[cartItems,setCartItems]=useState([])
    const [wishlist, setWishlist] = useState([])
    

    const addToCart=(items)=>{
        setCartItems(prev=>{
          const existingItems=prev.find(ele=>ele.id===items.id)
          if(existingItems){
            return prev.map(ele=>
              ele.id===items.id?{...ele,quantity:ele.quantity+1}:ele
            )
          }
          return[...prev,{...items,quantity:1}]
        }

        
      
      )


    }

    const removeFromCart=(id)=>{
        setCartItems(prev=>prev.filter(ele=>ele.id!==id))
    }

    
        const increaseQty=(id)=>{
          setCartItems(prev=>
            prev.map(ele=>
              ele.id===id?{...ele,quantity:ele.quantity+1}:ele
            )
          )
        }
        const decreaseQty=(id)=>{
          setCartItems(prev=>
            prev.map(ele=>
              ele.id===id?{...ele,quantity:ele.quantity-1}:ele
            )
          )
        }
        const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exist = prev.find(item => item.id === product.id)

      if (exist) {
        return prev.filter(item => item.id !== product.id)
      } else {
        return [...prev, product]
      }
    })
  }
  return (
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart,increaseQty,decreaseQty,toggleWishlist,wishlist}}>
    {children}
      
    </CartContext.Provider>
  )
}

export default CartProvider
