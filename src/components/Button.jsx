import React from 'react'

const Button = ({text, href}) => {
  return (
    <a href={href} className='px-4 py-2 font-semibold text-red-500 border-2 border-red-500 rounded-full sm:px-6 hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>{text}</a>
  )
}

export default Button
