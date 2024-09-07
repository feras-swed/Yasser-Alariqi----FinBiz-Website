import React from "react";
import HeadingTitle from "../ui/HeadingTitle";
import HeadingDescription from "../ui/HeadingDescription";
import TestimonialCard from "../ui/TestimonialCard";
// import NavItem from "../ui/NavItem";

function TestmoinalsCardSlider() {
  let testimonials = [
    {
      id: 1,
      name: "Alfredo Lubin",
      image: "./user1.svg",
      description:
        " “I really like the system at this management, i love recommending this software to you guys”.",
      starts: 5,
    },
    {
      id: 2,
      name: "Alfredo Lubin",
      image: "./user2.svg",
      description:
        " “We alighn our succeess with the success of our customers which is why our offering transcends our software”.",
      starts: 5,
    },
    {
      id: 3,
      name: "Angel Mango",
      image: "./user1.svg",
      description:
        "“I really like the system at this management, i love recommending this software to you guys”.",
      starts: 5,
    },
  ];

  return (
    <>
      <div className="container mx-auto py-10 md:py-20 px-4 lg:px-24">
      
          {/* <NavItem/> */}

        <HeadingTitle icon="fa-regular fa-message" title="Testimonials" />
        <HeadingDescription
          mainTitle="What are people saying"
          subTitle="Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/ <br> services offered]. Read what our clients have to say about their experience with us."
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div data-aos="zoom" className="flex justify-center mt-10 gap-3">
          <button className="w-12 h-12 rounded-full bg-white dark:bg-dark-buttonBg text-black dark:text-white">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="w-12 h-12 rounded-full bg-dark-lightGreen text-black">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TestmoinalsCardSlider;
