import React from 'react'
import Button from './Button'

function PriceCard({ title, desc, price, listofbenifits, ButtonDesing , isSpical ,isPopular}) {
  return (
    <div data-aos="fade-up" className='relative bg-light-priceCardBg dark:bg-dark-priceCardBg rounded-3xl p-10 shadow-xl max-w-sm mx-auto text-center flex flex-col justify-between h-full'>
      <div>
        {isPopular ? <img src='/divpopular.svg' className='absolute top-4 right-5 px-1 py-1'/> : null}
        <h4 className={`text-2xl font-normal mb-6 mt-6 ${isSpical ? 'text-dark-lightGreen' : 'text-light-headingText dark:text-white'}`}>
          {title}
        </h4>

        <p className='text-sm text-gray-500 dark:text-dark-paragraphText mb-12'>
          {desc}
        </p>

        <p className='text-3xl font-bold dark:text-white text-black mb-20'>
          {price}
          <span className='text-lg font-normal'>/month</span>
        </p>

        <hr className='border-gray-300 dark:border-gray-800 my-8' />

        <ul className='space-y-1 text-left'>
          {listofbenifits.map((benifit, index) => (
            <li key={index} className='flex items-center space-x-2 text-gray-700 dark:text-white text-sm'>
              <i className='fa-solid fa-check text-black dark:text-white'></i>
              <span>{benifit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button at the bottom */}
      <div className='mt-10 mx-3'>
        <Button text="Get Started" className={`w-full py-2.5 rounded-full ${ButtonDesing}`} />
      </div>
    </div>
  )
}

export default PriceCard
