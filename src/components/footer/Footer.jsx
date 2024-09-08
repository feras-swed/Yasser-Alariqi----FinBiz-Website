import React from "react";
import Button from "../ui/Button";

function Footer() {
  return (
    <footer className="bg-light-navbarBg dark:bg-dark-navbarBg pb-6 text-white overflow-hidden">
      <div data-aos="fade-down" className="container mx-auto grid grid-cols-12 gap-8 pt-20 pb-2 lg:px-28 md:px-12 px-4">
        
        {/* Left Section: Logo and Socials */}
        <div  className="lg:col-span-4 col-span-12">
          <figure className="flex items-center gap-3 cursor-pointer mb-5">
            <img src="/logo.svg" alt="logo" className="w-8" />
            <h3 className="dark:text-dark-headingText text-light-headingText font-medium text-xl">
              FinBiz
            </h3>
          </figure>
          <p className="dark:text-dark-paragraphText text-light-paragraphText text-base mt-4">
            Data analysis software is a type of software tool used for data
            analysis and reporting.
          </p>
          
          {/* Social Media Icons */}
          <article className="flex gap-2 mt-4">
            <a href="#">
              <img
                src="/twitter-logo.svg"
                alt="Twitter"
                className="w-8 h-8 rounded-full bg-dark-iconsBgColor p-2"
              />
            </a>
            <a href="#">
              <img
                src="/facebook-logo.svg"
                alt="Facebook"
                className="w-8 h-8 rounded-full bg-blue-600 p-2"
              />
            </a>
            <a href="#">
              <img
                src="/instagram-logo.svg"
                alt="Instagram"
                className="w-8 h-8 rounded-full bg-dark-iconsBgColor p-2"
              />
            </a>
            <a href="#">
              <img
                src="/github-logo.svg"
                alt="GitHub"
                className="w-8 h-8 rounded-full bg-dark-iconsBgColor p-2"
              />
            </a>
          </article>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-2 col-span-12">
          <h3 className="font-semibold text-lg mb-3 dark:text-dark-headingText text-black">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-base dark:text-dark-paragraphText hover:underline text-black"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base dark:text-dark-paragraphText hover:underline text-black"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base dark:text-dark-paragraphText hover:underline text-black"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="lg:col-span-2 col-span-12">
          <h3 className="font-semibold text-lg mb-3 dark:text-dark-headingText text-black">
            Help
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-base dark:text-dark-paragraphText hover:underline text-black"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base dark:text-dark-paragraphText hover:underline text-black"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base dark:text-dark-paragraphText hover:underline text-black"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="lg:col-span-4 col-span-12 hidden lg:block">
        <h3 className="font-semibold text-lg mb-3 dark:text-dark-headingText text-black">
          Subscribe to Newsletter
        </h3>

        {/* Newsletter input and button */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg dark:bg-dark-cardBg bg-white w-full sm:max-w-full md:max-w-lg my-8 mx-auto shadow-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-transparent text-xs sm:text-sm md:text-base border-none flex-1 outline-none dark:text-white text-gray-700 placeholder-gray-700 dark:placeholder-white pl-4 py-2 sm:py-3 w-full"
          />
          <Button
            text="Join"
            className="bg-dark-lightGreen font-medium text-xs sm:text-sm md:text-base sm:w-full md:w-auto lg:w-32 py-2 sm:py-3 text-light-buttonText"
          />
        </div>
      </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500 mx-20">
        <p  className="dark:text-white text-black py-2 text-sm">  
          © Copyright 2024, All Rights Reserved by FinBiz
        </p>
      </div>
    </footer>
  );
}

export default Footer;
