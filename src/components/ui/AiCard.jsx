import React from "react";

function AiCard() {
  return (
    <article  data-aos="fade-up"  className="flex items-center gap-2 mx-auto border border-black w-fit py-0.5 px-1.5 rounded-2xl cursor-pointer dark:bg-dark-greenBg bg-white ">
      <div className="bg-dark-lightGreen text-white py-0.5  rounded-2xl w-9 text-center text-[12px]">New</div>
      <p className="dark:text-dark-lightGreen text-black text-[12px] ">Introducing AI Automation</p>
      <i className="fa-solid fa-arrow-right text-dark-lightGreen text-[10px] mt-0.5"></i>
    </article>
  );
}

export default AiCard;
