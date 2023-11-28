import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { faqs } from "../constents";

const AccordionSection = ({
  faqs,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="px-8 py-2 md:px-24 md:py-2">
      <div
        className="flex justify-between w-full cursor-pointer p-3 md:p-5 bg-slate-200 "
        onClick={toggleSection}
      >
        <div>{faqs.question}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>

      {isActiveSection && <div className="p-3 md:p-4 m-0 ">{faqs.answer}</div>}
    </div>
  );
};

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
      <div className="py-12 md:py-20 border-b border-gray-100">
        <div className="pb-10 md:pb-10 w-full text-center ">
          <h2 className="text-2xl font-medium w-full text-center">Questions and answer</h2>
        </div>
        <div className="">
          {faqs.map((faqs, index) => (
            // <div key={index}>{faqs.question}</div>
            <AccordionSection
              faqs={faqs}
              key={index}
              isActiveSection={index === activeIndex}
              setActiveIndex={setActiveIndex}
              sectionIndex={index}
            />
          ))}
        </div>
      </div>
  );
};

export default FAQs;
