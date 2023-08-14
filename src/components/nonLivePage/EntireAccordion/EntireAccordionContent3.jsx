import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBetSlipData } from "reducers/nonLive-reducer";

const EntireAccordionContent3 = ({ card }) => {
  const dispatch = useDispatch();
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const hoverStyle = {
    background: "linear-gradient(to top, #5423a0, #9d3bbb)",
    color: "#eeeeee",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <div
      style={{
        background: "#ffffff",
        borderColor: "#bbbbbb",
        width: "630px",
        borderBottomRightRadius: `${card.id !== 0 ? "4px" : "0px"}`,
        borderBottomLeftRadius: `${card.id !== 0 ? "4px" : "0px"}`,
      }}
      className="flex items-center h-31px border-t"
    >
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "210px",
          background: leftActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: leftActive ? "#eeeeee" : "#444444",
          ...(isHovered ? hoverStyle : null),
          borderBottomLeftRadius: `${card.id !== 0 ? "4px" : "0px"}`,
        }}
        className="flex items-center justify-between border-r h-30px cursor-pointer"
        onClick={() => {
          dispatch(
            setBetSlipData({
              data: card,
            })
          );
          setLeftActive((prev) => !prev);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="-mt-2px font-malgun ml-9px"
        >
          {card.team1}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: leftActive || isHovered ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="mr-8px mb-2px font-malgun"
        >
          {card.score1}
        </p>
      </div>
      <div
        style={{
          borderColor: "#bbbbbb",
          width: "209px",
          background: centerActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: centerActive ? "#eeeeee" : "#444444",
          ...(isHovered1 ? hoverStyle : null),
        }}
        className="flex items-center justify-between border-r h-30px cursor-pointer"
        onClick={() => {
          dispatch(
            setBetSlipData({
              data: card,
            })
          );
          setCenterActive((prev) => !prev);
        }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-10px mb-2px font-malgun"
        >
          {card.team3}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: centerActive || isHovered1 ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className=" mr-7px mb-2px font-malgun"
        >
          {card.score2}
        </p>
      </div>
      <div
        style={{
          width: "211px",
          height: "100%",
          background: rightActive
            ? "linear-gradient(to top, rgb(84, 35, 160), rgb(157, 59, 187))"
            : "#ffffff",
          color: rightActive ? "#eeeeee" : "#444444",
          ...(isHovered2 ? hoverStyle : null),
          borderBottomRightRadius: `${card.id !== 0 ? "4px" : "0px"}`,
        }}
        className="flex items-center justify-between cursor-pointer"
        onClick={() => {
          dispatch(
            setBetSlipData({
              data: card,
            })
          );
          setRightActive((prev) => !prev);
        }}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "-0.031em",
          }}
          className="ml-11px mb-2px font-malgun"
        >
          {card.team2}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: rightActive || isHovered2 ? "#eeeeee" : "#682aa7",
            letterSpacing: "-0.031em",
          }}
          className="font-malgun mb-2px mr-9px"
        >
          {card.score3}
        </p>
      </div>
    </div>
  );
};

export default EntireAccordionContent3;
