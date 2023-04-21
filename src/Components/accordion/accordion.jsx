import React, { useState } from "react";
import { items } from "./accordionItem"
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <section className="max-w-2xl mx-auto bg-color-bg_primary-500 rounded-lg space-y-12 p-6 md:px-16 md:rounded-3xl lg:max-w-4xl">
      {items.map((item, index) => (
        <div key={index}>
          <div className="accordion-item">
            <div className="accordion-title flex justify-between cursor-pointer font-bold text-xs sm:text-base md:text-xl" onClick={() => handleClick(index)}>
              {item.title}
              {activeIndex === index
              ? <span className="pl-4"><ChevronUpIcon className="h-6 w-6 font-extrabold" /></span> 
              : <span className="pl-4"><ChevronDownIcon className="h-6 w-6" /></span>}
            </div>
            {activeIndex === index && (
              <div className="accordion-content pt-2 text-xs sm:text-base md:pt-4 md:text-2xl">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;