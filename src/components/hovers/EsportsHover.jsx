import React, { useState } from "react";
import LolBanner from "../../images/navbarHover/5_1.png";
import LolBannerLogo from "../../images/navbarHover/5_1_logo.png";
import SuddenAttackBanner from "../../images/navbarHover/5_2.png";
import SuddenAttackBannerLogo from "../../images/navbarHover/5_2_logo.png";
import OverwatchBanner from "../../images/navbarHover/5_3.png";
import OverwatchBannerLogo from "../../images/navbarHover/5_3_logo.png";
import PubgBanner from "../../images/navbarHover/5_4.png";
import PubgBannerLogo from "../../images/navbarHover/5_4_logo.png";
import Preparing from "../../images/navbarHover/5_5.png";
import Image6 from "../../images/navbarHover/5_6.png";
import PreparingLogo from "../../images/navbarHover/5_5_logo.png";
import Expand from "react-expand-animated";
import { useHistory } from "react-router-dom";
import useNavButtonPosition from "hooks/useNavButtonPosition";

const EsportsHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const hoverMenuPosition = useNavButtonPosition("menu-wrapper", "navbar-4-button");

  const gamesArray = [
    {
      id: 0,
      background: LolBanner,
      logo: LolBannerLogo,
      imgText: "두윈카지노",
    },
    {
      id: 1,
      background: SuddenAttackBanner,
      logo: SuddenAttackBannerLogo,
      imgText: "이용가이드",
      path: "/",
    },
    {
      id: 2,
      background: OverwatchBanner,
      logo: OverwatchBannerLogo,
      imgText: "보타카지노",
      path: "/esports/single",
    },
    {
      id: 3,
      background: PubgBanner,
      logo: PubgBannerLogo,
      imgText: "이용가이드",
      path: "/esports/multi",
    },
    {
      id: 4,
      background: Preparing,
      logo: PreparingLogo,
      imgText: "호텔카지노",
      path: "/",
    },
    {
      id: 5,
      background: Image6,
      logo: PreparingLogo,

      imgText: "이용가이드",
      path: "/",
    },
  ];

  function GamesList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`relative group cursor-pointer flex items-center flex-shrink-0 h-68px rounded-6px`}
        style={{
          width: "210px",
          background: "linear-gradient(to right, #9c3bbb, #411d99)",
        }}
        onMouseEnter={() => setHover(item.id)}
        onClick={() => history.push(item.path)}
      >
        {isHover === item.id && isHover !== 4 && isHover !== 5 && (
          <button
            style={{
              boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)",
              background: "linear-gradient(to right, #df52ff, #6c22ff)",
              width: "90px",
              height: "26px",
              right: "60px",
            }}
            className="absolute z-50 top-20px pt-2px right-15px flex items-center justify-center h-28px text-white rounded-14px cursor-pointer font-spoqaMedium text-12px tracking-tighter"
          >
            게임시작
          </button>
        )}
        {isHover === item.id && isHover !== 4 && isHover !== 5 && (
          <div className="w-full h-full bg-black opacity-60 z-10 rounded-6px"></div>
        )}
        <img className={`absolute bottom-0 object-none h-auto z-40`} src={item.background} alt="game_image" />
        <div
          style={{ width: "132px" }}
          className="absolute flex flex-col justify-start items-center h-full right-0 top-0 z-0"
        >
          <img src={item.logo} alt="game_image_logo" />
          <div className="text-white text-12px -mb-8px tracking-tighter font-spoqa flex">
            {item.imgText} {item.path === "/" && <p style={{color:'#ebabff'}}>(준비중)</p>}{" "}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <Expand
      open={selection === 4}
      duration={200}
      styles={{
        open: { left: hoverMenuPosition },
        close: { left: hoverMenuPosition },
      }}
      className="rounded-8px absolute w-auto m-auto h-262px bg-white"
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: "254px" }}
        className="h-full w-auto flex justify-center"
      >
        <div style={{ width: "460px" }} className="p-15px grid gap-10px grid-cols-2 limit:grid-cols-2">
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default EsportsHover;
