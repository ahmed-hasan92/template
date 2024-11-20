import React, { useState } from 'react';
import CircularProgress from './CircularProgress';

import TransactionCard from './TransactionCard';
import ItemCard from './ItemCard';
import MainTargetCard from './MainTargetCard';
import OtherDepatmentCard from './OtherDepatmentCard';
import OtherItemsCard from './OtherItemsCard';

const ActionArea = () => {
  const [isMainDepartment, setIsMainDepartment] = useState(true);
  const handleSwitchLayOut = () => {
    setIsMainDepartment(!isMainDepartment);
  };
  return (
    <>
      {isMainDepartment ? (
        <div className="flex flex-col justify-center w-full h-full overflow-y-auto bg-gray-200 rounded-lg">
          <div className="w-full h-[48%] flex items-center justify-between px-4 py-2 ">
            <div className="w-[40%] h-full overflow-y-auto rounded-lg bg-gray-200 shadow-md shadow-gray-400">
              <MainTargetCard />
            </div>
            <div className="w-[58%] h-full overflow-y-auto rounded-lg bg-gray-200 shadow-md shadow-gray-400 px-2 py-2 gap-2 flex flex-col">
              <TransactionCard />
            </div>
          </div>
          <div className="w-full h-[48%] flex items-center justify-between px-4 py-2 ">
            <div className="w-[80%] h-full overflow-y-auto rounded-lg bg-gray-200 shadow-md shadow-gray-400 px-2 py-2 gap-2 flex flex-col">
              <ItemCard />
            </div>
            <div className="w-[18%] h-[80%] overflow-y-auto gap-4 rounded-lg bg-gray-200 shadow-md shadow-gray-400 flex flex-col bg-gradient-to-br from-blue-500 to-blue-700 justify-center items-center">
              <h1 className="text-lg font-semibold text-center text-gray-100 font-lato text-wrap">
                Display other departments info
              </h1>
              <button
                onClick={handleSwitchLayOut}
                className="px-4 py-2 text-sm font-semibold text-gray-100 bg-orange-500 shadow-md hover:bg-orange-600 font-lato rounded-2xl shadow-gray-500"
              >
                Other departments
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center w-full h-full overflow-y-auto bg-gray-200 rounded-lg">
          <div className="w-full h-[48%] flex items-center justify-between px-4 py-2 ">
            <div className="w-[40%] h-full overflow-y-auto rounded-lg bg-gray-200 shadow-md shadow-gray-400 px-2 py-2 gap-2 flex flex-col">
              <OtherDepatmentCard />
            </div>
            <div className="w-[58%] h-full overflow-y-auto rounded-lg bg-gray-200 shadow-md shadow-gray-400 px-2 py-2 gap-2 flex flex-col">
              <TransactionCard />
            </div>
          </div>
          <div className="w-full h-[48%] flex items-center justify-between px-4 py-2 ">
            <div className="w-[80%] h-full overflow-y-auto rounded-lg bg-gray-200 shadow-md shadow-gray-400 px-2 py-2 gap-2 flex flex-col">
              <OtherItemsCard />
            </div>
            <div className="w-[18%] h-[80%] overflow-y-auto gap-4 rounded-lg bg-gray-200 shadow-md shadow-gray-400 flex flex-col bg-gradient-to-br from-blue-500 to-blue-700 justify-center items-center">
              <h1 className="text-lg font-semibold text-center text-gray-100 font-lato text-wrap">
                Display Main department info
              </h1>
              <button
                onClick={handleSwitchLayOut}
                className="px-4 py-2 text-sm font-semibold text-gray-100 bg-orange-500 shadow-md hover:bg-orange-600 font-lato rounded-2xl shadow-gray-500"
              >
                Main department
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionArea;
