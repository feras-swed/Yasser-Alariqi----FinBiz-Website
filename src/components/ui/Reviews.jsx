import React from 'react'

function Reviews() {

  let textOfReviwes = `(4.9 of 5)`

  return (
        <figure data-aos="fade-up" className='flex flex-col items-center' >
          <img src='/reviews.svg' />
          <p className='text-sm dark:text-dark-paragraphText text-light-paragraphText font-bold mt-2 mb-6  '>1,200+ reviews {textOfReviwes}</p>
        </figure>
    )
}

export default Reviews