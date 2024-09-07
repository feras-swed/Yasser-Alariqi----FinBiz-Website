import React, { useState, useEffect } from "react";
import HeadingTitle from "../ui/HeadingTitle";
import HeadingDescription from "../ui/HeadingDescription";
import TestimonialCard from "../ui/TestimonialCard";

function TestimonialsCardSlider() {
  const testimonials = [
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
        " “We align our success with the success of our customers which is why our offering transcends our software”.",
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
    {
      id: 4,
      name: "Sarah Jenkins",
      image: "./user2.svg",
      description:
        "“Crypt Land has truly changed the way we manage our finances. The support team is excellent as well!”.",
      starts: 4,
    },
    {
      id: 5,
      name: "John Doe",
      image: "./user1.svg",
      description:
        "“This service exceeded our expectations. We would definitely recommend it to others in our industry.”.",
      starts: 5,
    },
  ];

  // State for the current index and window width
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // Handler for updating width on resize
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  // Determine the number of testimonials per page based on width
  const testimonialsPerPage = window.innerWidth > 768 ? 3 : 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Function to get the correct testimonials to display
  const getTestimonialsToShow = () => {
    const testimonialsToShow = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      testimonialsToShow.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return testimonialsToShow;
  };

  return (
    <>
      <div className="container mx-auto py-10 md:py-20 px-4 lg:px-24">
        <HeadingTitle icon="fa-regular fa-message" title="Testimonials" />
        <HeadingDescription
          mainTitle="What are people saying"
          subTitle="Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us."
        />

        <div
          data-aos="fade-up"
          className={`grid grid-cols-${testimonialsPerPage} gap-6 mt-16 transition-transform duration-500 ease-in-out`}
        >
          {getTestimonialsToShow().map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div data-aos="zoom" className="flex justify-center mt-10 gap-3">
          <button
            className="w-12 h-12 rounded-full bg-white dark:bg-dark-buttonBg text-black dark:text-white"
            onClick={prevSlide}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="w-12 h-12 rounded-full bg-dark-lightGreen text-black"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TestimonialsCardSlider;
