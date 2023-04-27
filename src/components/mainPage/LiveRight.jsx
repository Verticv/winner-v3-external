import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Dowin from '../../images/live/right/1.png';
import DowinLogo from '../../images/live/right/1_logo.png';

import Tg from '../../images/live/right/2.png';
import TgLogo from '../../images/live/right/2_logo.png';

import Preparing from '../../images/live/right/3.png';
import PreparingLogo from '../../images/live/right/3_logo.png';

import Circle from '../../images/slotCarousel/circle.png';

const LiveRight = () => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const gamesArray = [
    {
      id: 0,
      background: Dowin,
      logo: DowinLogo,
      imgText: '두윈카지노',
    },
    {
      id: 1,
      background: Tg,
      logo: TgLogo,
      imgText: '보타카지노',
      path: '/esports/single',
    },
    {
      id: 2,
      background: Preparing,
      logo: PreparingLogo,

      imgText: '준비중',
      path: '/esports/multi',
    },
  ];

  function GamesList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`relative group cursor-pointer flex items-center flex-shrink-0 h-68px rounded-6px`}
        style={{
          width: '360px',
          height: '130px',
          background: 'linear-gradient(to right, #9c3bbb, #411d99)',
        }}
        onMouseEnter={() => setHover(item.id)}
        onClick={() => history.push(item.path)}
      >
        {isHover === item.id && (
          <button
            style={{
              boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)',
              background: 'linear-gradient(to right, #df52ff, #6c22ff)',
              width: '102px',
            }}
            className='absolute z-30 top-51px right-130px flex items-center justify-center h-28px text-white rounded-14px cursor-pointer font-spoqaMedium text-15px tracking-tighter'
          >
            게임시작
          </button>
        )}
        {isHover === item.id && (
          <div className='w-full h-full bg-black opacity-60 z-20 rounded-6px'></div>
        )}
        <img
          className={`absolute bottom-0 object-none h-auto z-0`}
          src={item.background}
          alt='game_image'
        />
        <div
          style={{ width: '132px' }}
          className='absolute flex flex-col justify-center items-center h-full left-0 top-0 z-10'
        >
          <img src={item.logo} alt='game_image_logo' />
          <p className='text-white text-12px -mb-8px tracking-tighter font-spoqa'>
            {item.imgText}
          </p>
        </div>
      </div>
    ));
  }

  return (
    <div className='flex flex-col'>
      <div className='flex items-center'>
        <img src={Circle} alt='' />
        <p className='text-white text-22px font-spoqaBold tracking-tight'>
          호텔카지노
        </p>
      </div>
      <div
        style={{
          width: '390px',
          height: '440px',
          background:
            'linear-gradient(to top, rgb(204,196,255), rgb(255,216,245))',
          boxShadow:
            '0px 5px 10px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)',
        }}
        className='rounded-8px w-auto h-full bg-white'
      >
        <div
          style={{ minHeight: '254px' }}
          className='h-full w-auto flex justify-center'
        >
          <div
            // style={{ width: '360px' }}
            className='p-15px grid gap-10px grid-cols-1 limit:grid-cols-1'
          >
            <GamesList items={gamesArray} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRight;
