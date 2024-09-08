import React from 'react'
import HeadingTitle from '../ui/HeadingTitle'
import HeadingDescription from '../ui/HeadingDescription'
import PriceCard from '../ui/PriceCard'



function Prices() {

  return (
    <section className='bg-light-pageBg dark:bg-dark-pageBg py-14 px-4'>
        <div className='container mx-auto'>
          <HeadingTitle icon="fa-solid fa-tag" title="Pricing" /> 
          <HeadingDescription mainTitle="Find the right plan"    subTitle={`Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can <br> help you streamline your finances and reach your business goals.`}   />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto lg:px-20 md:px-12 px-2 mt-16'>
            <PriceCard title="Basic" desc="Get a professional website designed according to your needs." price="$499" listofbenifits={["Get a fully designed Website.", "Webflow Development", "Limited Support"]} ButtonDesing="w-full bg-white text-black rounded-3xl py-4 mt-2 dark:bg-dark-buttonBg dark:text-white bg-light-buttonBg text-black " isSpical={false} />
            <PriceCard title="Pro" desc="Get a professional website designed according to your needs." price="$499" listofbenifits={["Get a fully designed Website.", "Webflow Development", "Limited Support", "Standart integrations" , "Email support" , "Email support"]} ButtonDesing="w-full dark:bg-white text-black rounded-3xl py-4 mt-2  dark:bg-light-buttonBg dark:text-black bg-dark-buttonBg text-white" isSpical={true} isPopular={true}/>
            <PriceCard title="Enterprise" desc="Get a professional website designed according to your needs." price="$999" listofbenifits={["Get a fully designed Website.", "Webflow Development", "Limited Support", "Standart integrations" , "Email support" , "Email support" , "Email support" ]} ButtonDesing="w-full rounded-3xl py-4 mt-2 bg-dark-lightGreen text-black " isSpical={true} />
          </div>
        </div>
    </section>
  )
}

export default Prices