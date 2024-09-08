import React, { useState, useEffect } from "react";
import HeadingTitle from "../ui/HeadingTitle";
import HeadingDescription from "../ui/HeadingDescription";
import TestimonialCard from "../ui/TestimonialCard";

function TestmoinalsCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3); // Default to 3 items per page

  const testimonials = [
    {
      id: 1,
      name: "Alfredo Lubin",
      image: "./user1.svg",
      description:
        " “I really like the system at this management, I love recommending this software to you guys”.",
      stars: 5,
    },
    {
      id: 2,
      name: "Alfredo Lubin",
      image: "./user2.svg",
      description:
        " “We align ourof our customers, which is why our offering transcends our software”.",
      stars: 5,
    },
    {
      id: 3,
      name: "Angel Mango",
      image: "./user1.svg",
      description:
        "“I really like the system at this management, I love recommending this software to you guys”.",
      stars: 5,
    },
    {
      id: 4,
      name: "Bella Swan",
      image: "./user2.svg",
      description:
        "“Their customer service is amazing, and they offer a wide range of features that are unmatched”.",
      stars: 5,
    },
    {
      id: 5,
      name: "John Doe",
      image: "./user1.svg",
      description:
        "“Crypt Land has significantly improved our team's productivity and efficiency and they offer a range of features that”.",
      stars: 5,
    },
  ];

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex > testimonials.length - testimonialsPerPage ? 0 : newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? testimonials.length - testimonialsPerPage : newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerPage(1); // Show 1 item per page for small screens
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2); // Show 2 items per page for medium screens
      } else {
        setTestimonialsPerPage(3); // Show 3 items per page for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto py-24 md:py-20 px-4 lg:px-24 overflow-hidden">
      <HeadingTitle icon="fa-regular fa-message" title="Testimonials" />
      <HeadingDescription
        mainTitle="What are people saying"
        subTitle="Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/ <br> services offered]. Read what our clients have to say about their experience with us."
      />

      <div
        data-aos="fade-up"
        className="flex transition-transform duration-500 ease-in-out gap-4 mt-10"
        style={{
          transform: `translateX(-${currentIndex * (100 / testimonialsPerPage)}%)`,
          width: `${(testimonials.length * 100) / testimonialsPerPage}%`,
          maxWidth: "100%", // Ensure the width doesn't exceed the container on small screens
        }}
      >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex-shrink-0"
          style={{
            width: `${100 / testimonialsPerPage}%`, // Set width dynamically
            flex: `0 0 ${100 / testimonialsPerPage}%`,
            maxWidth: "100%",
            height: "auto", // Ensure height auto-adjusts
          }}
        >
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}

      </div>

      <div data-aos="zoom" className="flex justify-center mt-10 gap-3">
        <button
          className="w-12 h-12 rounded-full bg-white dark:bg-dark-buttonBg text-black dark:text-white"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="w-12 h-12 rounded-full bg-dark-lightGreen text-black"
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TestmoinalsCardSlider;
