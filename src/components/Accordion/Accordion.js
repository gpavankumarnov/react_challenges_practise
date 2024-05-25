import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Accordion.css";

const Accordion = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const accordionData = [
    {
      text: "Section-1",
      value:
        "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.",
    },
    {
      text: "Section-2",
      value:
        "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.",
    },
    {
      text: "Section-3",
      value:
        "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.",
    },
    {
      text: "Section-4",
      value:
        "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.",
    },
  ];

  const handleClick = (index) => {
    setCurrentTab((prev) => (prev = index));
  };

  return (
    <div className="accordion-wrapper">
      {accordionData.map((data, index) => (
        <section
          onClick={() => handleClick(index)}
          
          active={index === currentTab}
        >
          <div className="text">
            <h4>{data.text}</h4>
            <IoMdArrowDropdown style={index === currentTab ? {"transform":"rotate(180deg)"} : ""}/>
          </div>
          {currentTab === index && (
            <div>
              <p>{data.value}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Accordion;
