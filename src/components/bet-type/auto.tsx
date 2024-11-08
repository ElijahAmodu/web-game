import React from "react";

const AutoBet = () => {
  return (
    <div className="pb-[29px]">
      <div className="bg-blue-200 py-[19.5px] grid place-content-center mx-[57px] text-sm font-bold rounded-[8px] mt-[30px] mb-6">
        <p>Cash Out</p>
      </div>

      <div className="grid grid-cols-2 gap-x-[13px] gap-y-4 mx-4">
        <div className="bg-blue-100 flex items-center justify-between py-[10px] pl-2 pr-1 rounded-[8px]">
          <p className="text-xs font-bold">Simple</p>

          <div className="flex  gap-1">
            <div className="py-[4px] px-[14px]">
              <img src="/icons/eye.svg" alt="eye" className="w-4 h-4" />
            </div>

            <span className="rounded-[4px] bg-[#39426D] text-xs font-bold py-[5px] px-[11px]">
              Run
            </span>
          </div>
        </div>

        <div className="bg-blue-100 flex items-center justify-between py-[10px] pl-2 pr-1 rounded-[8px]">
          <p className="text-xs font-bold">Martingale</p>

          <div className="flex  gap-1">
            <div className="py-[4px] px-[14px]">
              <img src="/icons/eye.svg" alt="eye" className="w-4 h-4" />
            </div>

            <span className="rounded-[4px] bg-[#39426D] text-xs font-bold py-[5px] px-[11px]">
              Run
            </span>
          </div>
        </div>

        <div className="bg-blue-100 flex items-center justify-between py-[10px] pl-2 pr-1 rounded-[8px]">
          <p className="text-xs font-bold">Payout Martingale</p>

          <div className="flex  gap-1">
            <div className="py-[4px] px-[14px]">
              <img src="/icons/eye.svg" alt="eye" className="w-4 h-4" />
            </div>

            <span className="rounded-[4px] bg-[#39426D] text-xs font-bold py-[5px] px-[11px]">
              Run
            </span>
          </div>
        </div>

        <div className="bg-[#39426D] grid place-content-center py-[10px] pl-2 pr-1 rounded-[8px]">
          <p className="text-sm font-bold">Add Script</p>
        </div>
      </div>

      <div className="flex items-center gap-1 pl-[14px] mt-[19px]">
        <img src="/icons/alert.svg" alt="alert" className="" />
        <p className="text-[#A4A9C2] text-[10px] font-normal">
          Use of script is optional and players must take full responsibility
          for any attendant risks. We will not be held liable in this regard.{" "}
        </p>
      </div>
    </div>
  );
};

export default AutoBet;
