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
    <div className="py-10 md:py-10 border-b border-gray-100">
      <div className="pb-10 md:pb-12 w-full text-center ">
        <h2 className="sm:text-3xl font-medium w-full text-center text-2xl">
          Questions and answer
        </h2>
      </div>

      <div className="">
        {faqs.map((faqs, index) => (
          <AccordionSection
            faqs={faqs}
            key={index}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        ))}
      </div>

      <div>
        <div className="mt-10 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 text-center m-10">
            <h1 className="text-3xl font-semibold mb-4">
              Still have questions about how Logo Craftsmen can help you?
            </h1>
            <p className="text-lg mb-6">Ask us Out Now</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
