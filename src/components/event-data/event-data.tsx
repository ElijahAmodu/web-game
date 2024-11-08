import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const dummyEventData = [
  {
    user: "Deborah Og...",
    cashout: "2.5x",
    amount: "400",
    profit: "Betting",
  },
  {
    user: "Deborah Og...",
    cashout: "3.5x",
    amount: "400",
    profit: "-900 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
  {
    user: "Deborah Og...",
    cashout: "5.5x",
    amount: "1000",
    profit: "189.300 ",
  },
];

const EventData = () => {
  return (
    <div className="2xl:max-w-[348px] w-full ">
      <div className="bg-blue-100 rounded-t-xl flex justify-around items-center w-full px-4 py-[18px]">
        <p className="text-xs font-bold pr-14 ">Classic</p>
        <span className="text-yellow-400 text-[10px] font-bold flex gap-1 text-nowrap pr-6">
          <img src="/icons/user.svg" alt="user" className="w-[10px] h-[10px]" />
          6950/325964 Players
        </span>
        <p className="text-[10px] font-bold">₦34,455,689.49</p>
      </div>

      <div className="bg-blue-700 py-3 px-2 rounded-b-xl">
        <div className="text-xs font-medium text-blue-800 flex justify-around text-start">
          <span className="flex-1">
            <p>Player</p>
          </span>
          <span className="flex-1">
            <p>Cashout</p>
          </span>
          <span className="flex-1">
            <p>Amount</p>
          </span>
          <span className="flex-1">
            <p>Profit</p>
          </span>
        </div>

        <ScrollArea className="h-[809px]">
          {dummyEventData.map((item) => (
            <div
              key={item.amount}
              className="flex  justify-around text-white py-2 text-[10px] font-medium pt-5"
            >
              <span className="flex-1">
                <p>{item.user}</p>
              </span>
              <span className="flex-1">
                <p>{item.cashout}</p>
              </span>
              <span className="flex gap-1 flex-1 text-blue-800">
                <img
                  src="/icons/pepper-token.svg"
                  alt="pepper token"
                  className="w-4 h-4"
                />
                <p>{item.amount}</p>
              </span>
              <span className="flex gap-1 flex-1 text-blue-800">
                <img
                  src="/icons/pepper-token.svg"
                  alt="pepper token"
                  className="w-4 h-4"
                />
                <p>{item.profit}</p>
              </span>
            </div>
          ))}
        </ScrollArea>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default EventData;
