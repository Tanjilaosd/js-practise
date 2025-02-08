import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_checking.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex items-center cursor-pointer' >
        <img className='w-7' src={tick} alt="" />
        <p className='text-slate-700 ml-4 tex-[17px]'>{text}</p>
        <img className='w-5 ml-[200px]' src={delete_icon} alt="" />

      </div>
     
    </div>
  )
}

export default Todoitems
