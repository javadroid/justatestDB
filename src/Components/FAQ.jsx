import { faq } from "../Components/faq/faq"
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <section className="bg-color-bg_light py-10">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-7 text-center text-2xl font-extrabold">
          Frequently Asked Questions
        </h1>
        <div className="max-w-5xl mx-auto rounded-lg space-y-6">
        {faq.map((faqs, index) => (
        <div key={index}>
          <div className="accordion-faqs rounded-3xl bg-color-bg_primary-500 p-6 md:px-16">
            <div className="accordion-title flex justify-between cursor-pointer font-bold text-xs sm:text-base md:text-xl" onClick={() => handleClick(index)}>
              {faqs.question}
              {activeIndex === index
              ? <span className="pl-4"><ChevronUpIcon className="h-6 w-6 font-extrabold" /></span> 
              : <span className="pl-4"><ChevronDownIcon className="h-6 w-6" /></span>}
            </div>
            {activeIndex === index && (
              <div className="accordion-content space-y-4 pt-2 text-xs sm:text-base md:pt-4 md:text-2xl">
                <p>{faqs.answer1}</p>
                <p>{faqs.answer2}</p>
              </div> 
            )}
          </div>
        </div>
      ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
