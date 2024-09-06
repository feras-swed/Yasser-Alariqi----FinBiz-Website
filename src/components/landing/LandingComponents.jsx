import React from "react";
import AiCard from "../ui/AiCard";
import EmailInput from "../ui/EmailInput";
import Reviews from "../ui/Reviews";

function LandingComponents() {
  return (
    <section className="bg-light-pageBg dark:bg-dark-pageBg p-4 flex flex-col items-center pt-16">
      <AiCard />
      <h1 className="dark:text-dark-headingText text-light-headingText text-4xl md:text-5xl lg:text-6xl font-bold text-center my-4 lg:leading-tight md:leading-tight sm:leading-tight">
        The Finance Solutions <br /> For Your Business
      </h1>

      <p className="dark:text-dark-paragraphText text-light-paragraphText text-sm md:text-base lg:text-lg text-center mb-8">
        Empower your finance team. The one-stop platform for all financial
        management of <br className="hidden md:block" /> small and medium-sized
        businesses.
      </p>
      <EmailInput />
      <Reviews/>
    </section>
  );
}

export default LandingComponents;
