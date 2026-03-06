import React, { createContext } from 'react'
export const DataContext=createContext()

const DataProvider = ({children}) => {


    const Data1=[
  
    {
        id:1,
        img:["/shirt.jpeg","/shirtd3.png","/shirtd3.png"],
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'750',
        price:'399Rs',
        category:'men',
        off:'3% off onwards',
        
        btn:"View Product",
        size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'399rs',
         pr2:'450rs',
       
       
        
        
       
        
       
    },
     {
        id:2,
        img:["/saree1.jpg","/sareeb.jpg"],
        desc:"Shimmer Saree With Mirror Work And Chemical Lace And Diomond Hand Work",
        img2:"/Shape.png",
        preprice:'999',
         price:'650Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'650rs',
         pr2:'660rs',
    },

     {
        id:3,
        img:["/women.jpg"],
        desc:"MOST DEMAND Cotton printed unique design Straight Kurta Set",
        img2:"/Shape.png",
        preprice:'999',
         price:'650Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'650rs',
         pr2:'660rs',
    },
    {
        id:4,
        img:"/shoes.jpeg",
        desc:"Men Casual Shoes with Synthetic Upper",
        img2:"/Shape.png",
         preprice:'1150',
         price:'650Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'650rs',
         pr2:'660rs',
    },
    {
        id:5,
        img:"/decor.jpg",
        desc:"Craft Combo offer Wall Decoration , Ready to  Wall Decoration/Home DecorWall Room Trendy  ItemsWall",
        img2:"/Shape.png",
         preprice:'900',
         price:'599Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'599rs',
         pr2:'603rs',
    },
     {
        id:6,
        img:"/purse.png",
        desc:"PLAYYBAGS Kids Bag, Baby, Velvet Bag & School Backpack | School Bag (Mickey Mice) 10 L",
        img2:"/Shape.png",
         preprice:'900',
         price:'800Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'800rs',
         pr2:'810rs',
    },
      {
        id:7,
        img:"/showrack.jpg",
        desc:"Bamboo shoe rack, books rack, kitchen rack(4shelf)",
        img2:"/Shape.png",
         preprice:'900',
         price:'500Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'500rs',
         pr2:'500rs',
       
    },
     {
        id:8,
        img:"/kid1.jpg",
        desc:"Baby Panda Winter Hoodie & Jogger",
        img2:"/Shape.png",
         preprice:'900',
         price:'800Rs',
        btn:"View Product",
        size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'800rs',
         pr2:'830rs',
    },
      {
        id:9,
        img:"/home1.jpg",
        desc:"Chainlinks Hook Pots 6'' Inch Gamle Heavy, railing pot, Gardening Flower Pots Plant Container Set (Pack of 5 pcs.)",
        img2:"/Shape.png",
         preprice:'900',
         price:'500Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'500rs',
         pr2:'510rs',
       
    },
      {
        id:10,
        img:"/women1.jpg",
        desc:"MOST DEMAND Cotton printed unique design Straight Kurta Set",
        img2:"/Shape.png",
         preprice:'900',
         price:'800Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'800rs',
         pr2:'810rs',
    },
     
     {
        id:11,
        img:"/watch1.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'500Rs',
        btn:"View Product",
         size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'500rs',
         pr2:'502rs',
       
    },
     
    {
        id:12,
        img:"/women1.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'400Rs',
        btn:"View Product",
        size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'400rs',
         pr2:'503rs',
       
    },
    {
        id:13,
        img:["/shirtC2.webp","/shirtC22.webp","/shirtC23.webp"],
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'400',
        price:'299Rs',
        category:'men',
        off:'50% off onwards',
        
        btn:"View Product",
        size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'400rs',
         pr2:'413rs',
},

  {
        id:14,
        img:["/womentop12.webp","/womentop22.jpg"],
        desc:"DTR FASHION Women's Cotton Blend Crop Top ( Grey )",
        img2:"/Shape.png",
         preprice:'500',
        price:'450Rs',
        category:'men',
        off:'50% off onwards',
        
        btn:"View Product",
        size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'450rs',
         pr2:'450rs',
},

{
        id:15,
        img:["/face1.jpg","/face12.jpg","/face13.jpg"],
        desc:"FACES CANADA Weightless Matte Finish Foundation - Beige, 15ml , Anti-Ageing",
        img2:"/Shape.png",
         preprice:'500',
        price:'450Rs',
        category:'men',
        off:'50% off onwards',
        
        btn:"View Product",
        
},
{
        id:16,
        img:["/waterbottle1.jpg"],
        desc:"FACES CANADA Weightless Matte Finish Foundation - Beige, 15ml , Anti-Ageing",
        img2:"/Shape.png",
         preprice:'400',
        price:'380Rs',
        category:'men',
        off:'50% off onwards',
        
        btn:"View Product",
        
},

    
    
    
    
    
    
    
    
   



{
        id:14,
        img:"/women2.jpg",
        desc:"3d Water bottle asthetic and top material ",
        img2:"/Shape.png",
         preprice:'900',
         price:'500Rs',
        btn:"View Product",
       size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'500rs',
         pr2:'540rs',
       
    },
    {
        id:15,
        img:"/women2.jpg",
        desc:"GLORISTAR Denim Regular Fit Solids Half Sleeves Men's Casual Shirt Dark Blue Pack of 1",
        img2:"/Shape.png",
         preprice:'900',
         price:'600Rs',
        btn:"View Product",
       size:'S',
          size2:'M',
        size3:'L',
        size4:'XL',
        size5:'XXl',
        pr:'600',
         pr2:'620',
       
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
        btn:"View Product"
    },
  
  ]


    
  return (
    <DataContext.Provider value={{Data1,ClothesMens}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
