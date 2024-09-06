import React from 'react'

function HeadingTitle({icon, title}) {
  return (
    <div data-aos="zoom-in" className='flex items-center mx-auto gap-1 px-2 py-1 bg-dark-greenBg w-fit p-0.5 rounded-3xl text-dark-lightGreen  border border-dark-lightGreen '>
      <i className={`${icon} text-[12px]`} ></i>
      <h1 className="text-sm font-semibold text-[9px] tracking-widest">{title}</h1>
    </div>
  )
}

export default HeadingTitle
