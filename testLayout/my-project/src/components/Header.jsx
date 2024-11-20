import React from 'react';
import profilePic from '../assets/profile.webp';
import { CiLocationOn } from 'react-icons/ci';

const Header = () => {
  return (
    <div className="w-full max-h-16   flex px-4 items-center justify-between    ">
      <div className="flex flex-col gap-1">
        <h1 className="text-gray-800 font-semibold text-2xl font-kanit">
          Current Target
        </h1>
        <p className="font-lato text-gray-700 text-sm">
          Sunday, November 15th 2024
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <span className="w-12 h-12 rounded-full ">
          <img
            src={profilePic}
            alt="profilePic"
            className="w-full h-full object-cover rounded-full"
          />
        </span>
        <div className="flex flex-col">
          <p className="font-kanit text-gray-800 text-[1rem] font-medium">
            Sara Peterson
          </p>
          <div className="flex font-lato text-sm text-gray-700">
            <CiLocationOn size={18} /> SACO-ALTAKASUSI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
