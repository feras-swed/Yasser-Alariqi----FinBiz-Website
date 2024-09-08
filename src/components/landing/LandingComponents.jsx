import React from "react";
import AiCard from "../ui/AiCard";
import EmailInput from "../ui/EmailInput";
import Reviews from "../ui/Reviews";
import ProfitGrid from "../profit/ProfitGrid";

function LandingComponents() {
  return (
    <section className="bg-light-pageBg dark:bg-dark-pageBg p-4 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center pt-16 overflow-x-hidden">
      <AiCard />
      <h1 data-aos="fade-up" className="dark:text-dark-headingText text-light-headingText text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center my-8">
        The Finance Solutions <br /> For Your Business
      </h1>

      <p data-aos="fade-up" className="dark:text-dark-paragraphText text-light-paragraphText text-sm md:text-base lg:text-lg text-center mb-8">
        Empower your finance team. The one-stop platform for all financial 
        management of {<br/>} small and medium-sized businesses.
      </p>
      <EmailInput />
      <Reviews />
      <ProfitGrid />
    </section>
  );
}

export default LandingComponents;
