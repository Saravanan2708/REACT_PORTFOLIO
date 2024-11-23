import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

const icons=[
  {
    href:"#",
    components:<FaLinkedin/>
  },

  {
    href:"#",
    components:<FaGithub/>
  },

  {
    href:"#",
    components:<FaTwitter/>
  },
  {
    href:"#",
    components:<FaInstagram/>
  },

  
]

const Socialicons = () => {
  return (
    <div className='flex justify-center mb-6 space-x-4 md:justify-start sm:mb-6'>
      {icons.map((icons, index)=>(
        <a href={icons.href} className='flex items-center justify-center w-10 h-10 text-red-500  border-2 border-red-500 rounded-full transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)] hover:bg-red-500 hover:text-black '>{icons.components}</a>
      ))}
    </div>
  )
};

export default Socialicons;