import React from 'react'

function HeadingDescription({ mainTitle, subTitle }) {
  return (
    <div data-aos="zoom-in" className='text-center mt-4'>
        <h3 className='text-4xl font-medium dark:text-white text-black mb-6'>{mainTitle}</h3>
        <p className='text-sm dark:text-dark-paragraphText text-light-paragraphText' dangerouslySetInnerHTML={{ __html: subTitle }}></p>
    </div>
  )
}

export default HeadingDescription
