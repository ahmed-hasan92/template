import React from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiCalendarDate } from 'react-icons/ci';
import { IoCardOutline } from 'react-icons/io5';

const departmentInfo = [
  { label: 'Outdoor & Garden', icon: HiOutlineUserGroup },
  { label: '01/11/2024 - 30/11/2024', icon: CiCalendarDate },
  { label: 'Total sales', icon: IoCardOutline, amount: null },
];
const OtherDepatmentCard = () => {
  return (
    <>
      <div className="flex flex-col w-full px-4 py-4 rounded-lg shadow-md h-fit bg-gradient-to-tr from-blue-500 to-blue-700 shadow-gray-400 ring-2 ring-orange-500 ">
        <ul className="space-y-4 ">
          {departmentInfo.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-xs font-medium text-gray-100 sm:text-sm"
            >
              <item.icon size={18} />
              <span>{item.label}:</span>
              <span
                className={`${
                  item.label === 'Total sales' ? 'block font-bold' : 'hidden'
                } `}
              >
                {(item.amount = 700)} SAR
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full px-4 py-4 rounded-lg shadow-md h-fit bg-gradient-to-tr from-blue-500 to-blue-700 shadow-gray-400 ">
        <ul className="space-y-4 ">
          {departmentInfo.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-xs font-medium text-gray-100 sm:text-sm"
            >
              <item.icon size={18} />
              <span>{item.label}:</span>
              <span
                className={`${
                  item.label === 'Total sales' ? 'block font-bold' : 'hidden'
                } `}
              >
                {(item.amount = 700)} SAR
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full px-4 py-4 rounded-lg shadow-md h-fit bg-gradient-to-tr from-blue-500 to-blue-700 shadow-gray-400 ">
        <ul className="space-y-4 ">
          {departmentInfo.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-xs font-medium text-gray-100 sm:text-sm"
            >
              <item.icon size={18} />
              <span>{item.label}:</span>
              <span
                className={`${
                  item.label === 'Total sales' ? 'block font-bold' : 'hidden'
                } `}
              >
                {(item.amount = 700)} SAR
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full px-4 py-4 rounded-lg shadow-md h-fit bg-gradient-to-tr from-blue-500 to-blue-700 shadow-gray-400 ">
        <ul className="space-y-4 ">
          {departmentInfo.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-xs font-medium text-gray-100 sm:text-sm"
            >
              <item.icon size={18} />
              <span>{item.label}:</span>
              <span
                className={`${
                  item.label === 'Total sales' ? 'block font-bold' : 'hidden'
                } `}
              >
                {(item.amount = 700)} SAR
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OtherDepatmentCard;
