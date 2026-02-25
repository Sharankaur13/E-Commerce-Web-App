import React, { createContext } from 'react'
export const DataContext=createContext()

const DataProvider = ({children}) => {

    const Data1=[
  
    {
        id:1,
        img:"/shirt.jpeg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'750',
        price:'399Rs',
        category:'men',
        off:'3% off onwards',
        
        btn:"View Product",
       
        
       
    },
     {
        id:2,
        img:"/women.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
        preprice:'999',
         price:'650Rs',
        btn:"View Product"
    },
    {
        id:3,
        img:"/shoes.jpeg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'1150',
         price:'650Rs',
        btn:"View Product"
    },
    {
        id:4,
        img:"/decor.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'599Rs',
        btn:"View Product"
    },
     {
        id:5,
        img:"/purse.png",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'800Rs',
        btn:"View Product"
    },
      {
        id:6,
        img:"/showrack.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'500Rs',
        btn:"View Product",
       
    },
  
  ]
   const ClothesMens=[
  
    {
        id:1,
        img:"/shirt.jpeg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'750',
        price:'399Rs',
        
        btn:"View Product",
        details:'fhfhekfejfef',
        d2:'sharanpretded'
       
    },
     {
        id:2,
        img:"/women.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
        preprice:'999',
         price:'650Rs',
        btn:"View Product",
        details:'fhfhekfejfef',
        d2:'sharanpretded'
    },
    {
        id:3,
        img:"/shoes.jpeg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'1150',
         price:'650Rs',
        btn:"View Product",
        details:'fhfhekfejfef',
        d2:'sharanpretded'
    },
    {
        id:4,
        img:"/decor.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'599Rs',
        btn:"View Product"
    },
    //  {
    //     id:5,
    //     img:"/purse.png",
    //     desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
    //     img2:"/Shape.png",
    //      preprice:'900',
    //      price:'800Rs',
    //     btn:"View Product"
    // },
    //   {
    //     id:6,
    //     img:"/showrack.jpg",
    //     desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
    //     img2:"/Shape.png",
    //      preprice:'900',
    //      price:'500Rs',
    //     btn:"View Product"
    // },
  
  ]


    
  return (
    <DataContext.Provider value={{Data1,ClothesMens}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
