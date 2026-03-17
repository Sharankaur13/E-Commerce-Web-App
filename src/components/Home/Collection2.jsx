import React from 'react'
import { NavLink } from 'react-router-dom'

const Collection2 = () => {

  const data = [
    {
      img: '/calman.jpg',
      desc: "Men's fashion",
      path: '/mens',
      submenu: [
        { name: "Shirts", path: "/mens/shirts" },
        { name: "T-Shirts", path: "/mens/tshirts" },
        { name: "Jeans", path: "/mens/jeans" },
        { name: "Shoes", path: "/mens/shoes" }
      ]
    },
    {
      img: '/colwomen.jpg',
      desc: "Women's fashion",
      path: '/womens',
      submenu: [
        { name: "Suits", path: "/womens/suits" },
        { name: "Jewellery", path: "/womens/jewellery" },
        { name: "Dresses", path: "/womens/dresses" },
        { name: "Handbags", path: "/womens/bags" }
      ]
    },
    {
      img: '/colkitchen.jpg',
      desc: "Home & kitchen",
      submenu: [
        { name: "Cookware", path: "/kitchen/cookware" },
        { name: "Appliances", path: "/kitchen/appliances" },
        { name: "Storage", path: "/kitchen/storage" }
      ]
    },
    {
      img: '/colkid.jpg',
      desc: "Kid's fashion",
      submenu: [
        { name: "Boys Clothing", path: "/kids/boys" },
        { name: "Girls Clothing", path: "/kids/girls" },
        { name: "Toys", path: "/kids/toys" }
      ]
    },
    {
      img: '/colbeauty.jpg',
      desc: "Beauty & health",
      submenu: [
        { name: "Makeup", path: "/beauty/makeup" },
        { name: "Skincare", path: "/beauty/skincare" },
        { name: "Haircare", path: "/beauty/haircare" }
      ]
    },
    {
      img: '/colbook.jpg',
      desc: "Books",
      submenu: [
        { name: "Fiction", path: "/books/fiction" },
        { name: "Education", path: "/books/education" },
        { name: "Comics", path: "/books/comics" }
      ]
    },
    {
      img: '/colelectronic.jpg',
      desc: "Electronics",
      submenu: [
        { name: "Mobiles", path: "/electronics/mobiles" },
        { name: "Laptops", path: "/electronics/laptops" },
        { name: "Headphones", path: "/electronics/headphones" }
      ]
    },
    {
      img: '/colsport.jpg',
      desc: "Sports & fitness",
      submenu: [
        { name: "Gym Equipment", path: "/sports/gym" },
        { name: "Shoes", path: "/sports/shoes" },
        { name: "Accessories", path: "/sports/accessories" }
      ]
    }
  ]

  return (
    <section>
      <div className='max-w-7xl mx-auto px-6 pt-2 hidden md:flex justify-between'>

        {data.map((ele, index) => (
          
          <div key={index} className='relative group'>

            {/* Main Category */}
            <NavLink to={ele.path || "#"} className='flex gap-2 items-center text-sm font-semibold'>
              <img src={ele.img} alt="" className='h-10 w-10 rounded-full' />
              <p>{ele.desc}</p>
            </NavLink>

            {/* Dropdown */}
            <div className='absolute z-50 hidden group-hover:flex flex-col gap-3 justify-center  w-40 h-50 bg-white text-black shadow-lg p-4 top-12 '>

              {ele.submenu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className='block py-1 text-sm  hover:text-red-300'>
                  {item.name}
                </NavLink>
              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  )
}

export default Collection2