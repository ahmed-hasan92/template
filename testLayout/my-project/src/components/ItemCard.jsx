import React from 'react';
import itemImage from '../assets/item1.png';
import itemImage2 from '../assets/item2.png';
import itemImage3 from '../assets/item3.png';
const ItemCard = () => {
  return (
    <>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300">
        <div className="w-24 min-h-full gap-1 rounded-md ">
          <img
            src={itemImage2}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              Kistenberg S Block Alu Log 45 Multi Compartment Heavy Duty Tool
              Box Black and Red
            </span>
          </p>
          <p className="text-sm font-medium text-gray-700">
            Article Code: <span className="font-bold text-blue-600">91752</span>
          </p>

          <p className="text-sm font-medium text-gray-700 ">
            Price: <span className="font-bold text-blue-600">150 SAR</span>
          </p>
        </div>
      </div>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300">
        <div className="w-24 min-h-full gap-1 rounded-md ">
          <img
            src={itemImage3}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              Bosch GMS 120 Battery Powered Professional Multi-Detector Blue and
              Black
            </span>
          </p>
          <p className="text-sm font-medium text-gray-700">
            Article Code: <span className="font-bold text-blue-600">91752</span>
          </p>

          <p className="text-sm font-medium text-gray-700 ">
            Price: <span className="font-bold text-blue-600">300 SAR</span>
          </p>
        </div>
      </div>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300">
        <div className="w-24 min-h-full gap-1 rounded-md ">
          <img
            src={itemImage}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              DeWalt 18V Cordless Combi Drill Yellow and Black DCD776D1T-GB
            </span>
          </p>
          <p className="text-sm font-medium text-gray-700">
            Article Code: <span className="font-bold text-blue-600">91752</span>
          </p>

          <p className="text-sm font-medium text-gray-700 ">
            Price: <span className="font-bold text-blue-600">499 SAR</span>
          </p>
        </div>
      </div>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300">
        <div className="w-24 min-h-full gap-1 rounded-md ">
          <img
            src={itemImage}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              DeWalt 18V Cordless Combi Drill Yellow and Black DCD776D1T-GB
            </span>
          </p>
          <p className="text-sm font-medium text-gray-700">
            Article Code: <span className="font-bold text-blue-600">91752</span>
          </p>

          <p className="text-sm font-medium text-gray-700 ">
            Price: <span className="font-bold text-blue-600">499 SAR</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
