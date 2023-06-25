import React, { useState } from "react";
// import CenterAccordionContent from "./CenterAccordionContent";
import Arrow from "../../../images/nonLivePage/CenterAccordion/Arrow.png";
import EntireAccordionContent3 from "./EntireAccordionContent3";

// import AccordionContent1 from "./AccordionContent1";

const EntireAccordionButton3 = ({ icon, title, card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-5px mr-5px mb-5px">
      <div
        style={{ background: "linear-gradient(to right, #9d3bbb, #5423a0)" }}
        className={`flex items-center justify-between ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer h-30px`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <p style={{ color: "#eeeeee" }} className="text-12px ml-9px">
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <img
            style={{ borderColor: "#764cbb" }}
            className="border-r pr-10px"
            src={icon}
            alt="icon"
          />
          <img
            src={Arrow}
            alt="img"
            className={`w-6 h-6 object-none text-white ml-13px mr-14px ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div style={{ background: "#420572" }} className="rounded-b-lg">
          <div
            style={{ background: "#eeeeee" }}
            className="flex items-center justify-between h-28px "
          >
            <div style={{ marginLeft: "91px" }}>
              <p style={{ color: "444444" }} className="text-12">
                아스널
              </p>
            </div>
            <div style={{}}>
              <p style={{ color: "444444" }} className="text-12">
                무 : 리버플
              </p>
            </div>
            <div style={{ marginRight: "90px" }}>
              <p style={{ color: "444444" }} className="text-12">
                리버플
              </p>
            </div>
          </div>
          {card.map((item) => (
            <EntireAccordionContent3 key={item.id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EntireAccordionButton3;
