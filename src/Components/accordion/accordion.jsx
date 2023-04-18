import React, { useState } from "react";
import { items } from "./accordionItem"
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <section className="max-w-3xl bg-color-primary rounded-lg space-y-8 p-6 md:rounded-3xl lg:mx-auto">
      {items.map((item, index) => (
        <div key={index}>
          <div className="accordion-item">
            <div className="accordion-title flex justify-between cursor-pointer font-bold text-xs" onClick={() => handleClick(index)}>
              {item.title}
              {activeIndex === index
              ? <span className="pl-4"><ChevronUpIcon className="h-6 w-6" /></span> 
              : <span className="pl-4"><ChevronDownIcon className="h-6 w-6" /></span>}
            </div>
            {activeIndex === index && (
              <div className="accordion-content pt-2 text-xs">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;