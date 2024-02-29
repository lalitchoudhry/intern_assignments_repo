import React from 'react'

function CategoriesChip({ icon, title, handleClick }) {
  return (
    <div className='w-32 h-32 bg-lightGreen flex flex-col justify-center items-center rounded-full cursor-pointer hover:scale-105' onClick={()=>handleClick(title)}>
        <img className='w-16' src={icon} alt="icon" />
        <span className='text-green font-bold'>{title}</span>
    </div>
  )
}

export default CategoriesChip;