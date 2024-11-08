import React from "react";
import { ChevronLeft, ChevronRight, ChevronsUpDown } from "lucide-react";
import Image from "next/image";

const ManualBet = () => {
  return (
    <div className="pb-[33px] px-2">
      <div className="bg-blue-200 py-[19.5px] grid place-content-center mx-[57px] text-sm font-bold rounded-[8px] mt-[30px] mb-6">
        <p>Bet (Next Round)</p>
      </div>
      <div className="lg:flex justify-around items-center gap-4  w-full">
        <div className="">
          <p className="text-xs font-bold text-blue-600">Amount</p>
          <div className="bg-[#252D4A] p-2 rounded-lg w-full flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/pepper-token.svg"
                alt="token"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <input
                placeholder="0.0001"
                className="bg-transparent outline-none text-white text-sm"
              />
            </div>

            <div className="flex gap-2 ml-auto">
              <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-sm">
                <span>1/2</span>
              </div>
              <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-sm">
                <span>2x</span>
              </div>
              <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-sm flex items-center justify-center">
                <ChevronsUpDown />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <div className="text-xs font-bold text-blue-600 flex justify-between">
            <p>Auto cash out</p>
            <p>Chance 0.99%</p>
          </div>

          <div className="bg-[#252D4A] p-2 rounded-lg w-full flex items-center">
            <div className="flex items-center gap-2">
              <input
                placeholder="100"
                className="bg-transparent outline-none text-white text-sm"
              />
            </div>

            <div className="flex gap-2 ml-auto">
              <div className=" rounded-md py-1.5 text-white text-sm">
                <span>x</span>
              </div>
              <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-sm">
                <ChevronLeft />
              </div>
              <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-sm flex items-center justify-center">
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex gap-2 pl-[22px] mt-[30px] ">
        <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-center text-sm min-w-[84.5px]">
          <span>1</span>
        </div>
        <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-center text-sm min-w-[84.5px]">
          <span>10</span>
        </div>
        <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-center text-sm  min-w-[84.5px]">
          <span>100</span>
        </div>
        <div className="bg-[#39426D] rounded-md py-1.5 px-4 text-white text-center text-sm min-w-[84.5px]">
          <span>1000</span>
        </div>
      </div>
    </div>
  );
};

export default ManualBet;
