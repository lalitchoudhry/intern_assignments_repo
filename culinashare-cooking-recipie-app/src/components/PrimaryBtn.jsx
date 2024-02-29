import React from 'react'

function PrimaryBtn({title, handleClick}) {
  return (
    <button className='border-2 text-green mx-2 px-3 py-2 hover:text-white hover:bg-green' onClick={handleClick}>{title}</button>
  )
}

export default PrimaryBtn;