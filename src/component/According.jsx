import React, { useState } from "react";

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="border-b border-gray-200 mb-2">
            <button
              className="w-full text-left p-4 font-bold text-lg bg-white hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span
                className={`float-right transition-transform transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-4 text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-700">
          Select a service to see details.
        </p>
      )}
    </div>
  );
}
