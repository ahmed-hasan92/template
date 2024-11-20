import React, { useState } from 'react';
import logo from '../assets/logo2.png';
import { HiOutlineHome } from 'react-icons/hi2';
import { MdOutlineHistoryToggleOff } from 'react-icons/md';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { HiLanguage } from 'react-icons/hi2';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { PiPasswordDuotone } from 'react-icons/pi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { useSpring, animated } from '@react-spring/web'; // Import react-spring

const meueOne = [
  { label: 'Dashboard', icon: HiOutlineHome },
  { label: 'Historical', icon: MdOutlineHistoryToggleOff },
];
const meueTwo = [
  { label: 'Change password', icon: PiPasswordDuotone },
  { label: 'Language', icon: HiLanguage, language: 'En' },
];
const SideBar = () => {
  const [settingsList, setSettingsList] = useState(false);

  const handleOpenSettingsList = () => {
    setSettingsList(!settingsList);
  };

  const animation = useSpring({
    opacity: settingsList ? 1 : 0,
    height: settingsList ? '100px' : '0px', // Adjust height as needed
    overflow: 'hidden',
    config: { duration: 150 },
  });
  return (
    <div className="flex-col hidden w-64 h-full p-2 overflow-y-auto bg-gray-100 rounded-lg xl:flex">
      <div className="flex items-center w-full ">
        <img src={logo} alt="logo" className="scale-75 w-28 h-14" />
      </div>
      <div className="flex flex-col w-full p-4 mt-2 h-fit">
        <p className="text-sm text-gray-600 font-kanit ">Menu</p>
        <ul className="mt-2">
          {meueOne.map((item, index) => (
            <li
              key={index}
              className={`w-full flex py-2 px-2 items-center text-gray-700 font-lato text-sm mt-1 gap-3 rounded-md ${
                item.label === 'Dashboard'
                  ? 'bg-blue-600 text-white font-medium shadow-md shadow-gray-400'
                  : ''
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-gray-600 font-kanit">Tools</p>
        <li
          onClick={handleOpenSettingsList}
          className={`w-full flex py-2 px-2 items-center text-gray-700 font-lato text-sm mt-1 gap-3 rounded-md cursor-pointer `}
        >
          <HiOutlineCog8Tooth size={18} /> Settings{' '}
          {settingsList ? (
            <MdOutlineKeyboardArrowUp size={18} />
          ) : (
            <MdOutlineKeyboardArrowDown size={18} />
          )}
        </li>
        {settingsList && (
          <animated.ul
            style={animation}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              settingsList ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {meueTwo.map((item, index) => (
              <li
                key={index}
                className={`w-full flex py-2 px-2 items-center text-gray-700 font-lato text-sm mt-1 gap-3 rounded-md `}
              >
                <item.icon size={18} />
                {item.label}
                <p className="ml-auto font-medium text-blue-600">
                  {item.language}
                </p>
              </li>
            ))}
          </animated.ul>
        )}
        <li
          className={`w-full flex py-2 px-2 items-center text-gray-700 font-lato text-sm mt-1 gap-3 rounded-md cursor-pointer `}
        >
          <MdOutlineContactSupport size={18} /> support
        </li>
      </div>
      <button
        className={`w-full flex  py-2 px-2 items-center justify-center text-gray-100 bg-red-500 font-lato   gap-3 rounded-md hover:bg-red-600 shadow-md shadow-gray-400 mt-auto `}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
