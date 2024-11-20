import React from 'react';

const TransactionCard = () => {
  return (
    <>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300">
        <div className="flex flex-col items-center justify-center min-h-full gap-1 px-4 bg-gray-200 rounded-md w-fit">
          <p className="text-sm font-medium text-gray-700 font-lato">
            12/11/2024
          </p>
          <p className="text-sm text-gray-700 font-lato ">15:24</p>
        </div>
        <div className="flex flex-col justify-center flex-1 gap-2 px-4 py-2 font-lato">
          <p className="text-sm text-gray-800">
            Transaction code: <span className="font-semibold">123456</span>
          </p>
          <p className="text-sm text-gray-800">
            Qantity: <span className="font-semibold">8</span>
          </p>

          <p className="mt-auto ml-auto text-sm text-gray-800">
            Totla amount:{' '}
            <span className="font-semibold text-blue-600">123456</span>
          </p>
        </div>
      </div>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300 ring-2 ring-blue-600">
        <div className="flex flex-col items-center justify-center min-h-full gap-1 px-4 bg-gray-200 rounded-md w-fit">
          <p className="text-sm font-medium text-gray-700 font-lato">
            12/11/2024
          </p>
          <p className="text-sm text-gray-700 font-lato ">15:24</p>
        </div>
        <div className="flex flex-col justify-center flex-1 gap-2 px-4 py-2 font-lato">
          <p className="text-sm text-gray-800">
            Transaction code: <span className="font-semibold">123456</span>
          </p>
          <p className="text-sm text-gray-800">
            Qantity: <span className="font-semibold">8</span>
          </p>

          <p className="mt-auto ml-auto text-sm text-gray-800">
            Totla amount:{' '}
            <span className="font-semibold text-blue-600">123456</span>
          </p>
        </div>
      </div>
      <div className="flex w-full px-2 py-2 bg-gray-100 rounded-md shadow-sm min-h-32 shadow-gray-300">
        <div className="flex flex-col items-center justify-center min-h-full gap-1 px-4 bg-gray-200 rounded-md w-fit">
          <p className="text-sm font-medium text-gray-700 font-lato">
            12/11/2024
          </p>
          <p className="text-sm text-gray-700 font-lato ">15:24</p>
        </div>
        <div className="flex flex-col justify-center flex-1 gap-2 px-4 py-2 font-lato">
          <p className="text-sm text-gray-800">
            Transaction code: <span className="font-semibold">123456</span>
          </p>
          <p className="text-sm text-gray-800">
            Qantity: <span className="font-semibold">8</span>
          </p>

          <p className="mt-auto ml-auto text-sm text-gray-800">
            Totla amount:{' '}
            <span className="font-semibold text-blue-600">123456</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
