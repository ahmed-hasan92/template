import React from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import CircularProgress from './CircularProgress';

const departmentInfo = [
  { label: 'Tools & Hardware', icon: HiOutlineUserGroup },
  { label: '01/11/2024 - 30/11/2024', icon: CiCalendarDate },
];

const MainTargetCard = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-full p-4 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700">
      {/** Transactions Button */}
      <button className="flex items-center justify-center gap-2 px-3 py-2 ml-auto text-xs font-semibold text-blue-700 bg-white rounded-md shadow-lg sm:text-sm lg:hidden hover:bg-gray-100">
        Transactions <MdOutlineKeyboardArrowRight size={16} />
      </button>

      {/** Department Info */}
      <ul className="mt-4 space-y-2">
        {departmentInfo.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-xs font-medium text-gray-100 sm:text-sm"
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      {/** Horizontal Progress Bar */}
      <div className="flex flex-col w-full mt-6">
        <CircularProgress progress={85} size={120} strokeWidth={10} />
        <div className="flex justify-between w-full mt-1 text-xs text-gray-100 sm:text-sm">
          <span>750 SAR</span>
          <span>1000 SAR</span>
        </div>
      </div>

      {/** Footer Section */}
      <div className="flex items-center justify-between w-full mt-6 text-xs text-gray-100 sm:text-sm">
        <div>
          <h4 className="font-medium">Assigned Target</h4>
          <span className="text-sm font-bold">1000 SAR</span>
        </div>
        <div>
          <h4 className="font-medium">Achieved</h4>
          <span className="text-sm font-bold">750 SAR</span>
        </div>
      </div>
    </div>
  );
};

export default MainTargetCard;
