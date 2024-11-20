import React from 'react';
import itemImage from '../assets/out1.png';
import itemImage2 from '../assets/out2.png';
import itemImage3 from '../assets/out3.png';
import itemImage4 from '../assets/out4.png';
const OtherItemsCard = () => {
  return (
    <>
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
              Living Accents 5-Piece Rattan and Aluminum 3-Chairs and 2-Tables
              Outdoor Seating Set White and Ivory
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
            src={itemImage2}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              Living Accents 6-Piece Durable High Grade Aluminium Outdoor
              Seating Set Blue and Brown
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
            src={itemImage3}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              Charbroil Lid Mounted Convective 4 Burner Gas Grill with Double
              Door Cabinet Silver and Black 468402518
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
            src={itemImage4}
            alt="itemImage"
            className="object-cover w-full h-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3 px-4 py-2 font-lato">
          <p className="text-sm font-medium text-gray-700">
            Item name:{' '}
            <span className="font-bold text-blue-600">
              Weber Heavy Duty Steel Easy to Use Performer Deluxe GBS Charcoal
              Grill Black and Silver
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

export default OtherItemsCard;
