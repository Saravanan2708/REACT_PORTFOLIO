import React from 'react';

const navlist=[
  {
    id: 1,
    data: "Home"
    
  },

  {
    id: 2,
    data: "Services"
    
  },

  {
    id: 3,
    data: "Skills"
    
  },

  {
    id: 4,
    data: "Education"
    
  },

  {
    id: 5,
    data: "Experience"
    
  },

  {
    id: 6,
    data: "Contact"
    
  }
]

const Header = () => {
  return (
    <header className='fixed w-[1080px]  z-50 flex items-center justify-between md:w-full p-4 bg-transparent'>
      
      <a href='#' className='text-3xl font-extrabold text-red-500 transition duration-300 hover:scale-110 hover:border-red-500'>Saravanan</a>
      <nav className='hidden md:flex'>
        {navlist.map((item)=>(
          <a key={item.id} href='#' className='ml-8 text-lg font-medium text-white border-b-2 border-transparent hover:text-red-500'>{item.data}</a>
        ))}
        
        
      </nav>
    </header>
  )
}

export default Header