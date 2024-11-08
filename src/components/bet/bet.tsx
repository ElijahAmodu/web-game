import React from "react";
import { useMoonStore } from "@/store/store";
import ManualBet from "../bet-type/manual";
import AutoBet from "../bet-type/auto";

enum betTab {
  manual = "manual",
  auto = "auto",
}

const Bet = () => {
  const activeBetTab = useMoonStore((state) => state.activeBetTab);
  const setaActiveBetTab = useMoonStore((state) => state.setActiveBetTab);

  return (
    <div className="bg-blue-950 rounded-xl mt-[13px]">
      <div className="bg-blue-100 border-b border-[#39426D] flex justify-around rounded-t-xl py-[10px]">
        <span
          onClick={() => setaActiveBetTab(betTab.manual)}
          onKeyDown={() => setaActiveBetTab(betTab.manual)}
          className={` text-sm font-bold cursor-pointer py-[3.5px] ${
            activeBetTab === betTab.manual ? "text-white" : "text-blue-800"
          }`}
        >
          Manual
        </span>
        <span
          onClick={() => setaActiveBetTab(betTab.auto)}
          onKeyDown={() => setaActiveBetTab(betTab.auto)}
          className={` text-sm font-bold cursor-pointer py-[3.5px] ${
            activeBetTab === betTab.auto ? "text-white" : "text-blue-800"
          }`}
        >
          Auto
        </span>
      </div>

      {activeBetTab === "manual" ? <ManualBet /> : <AutoBet />}
    </div>
  );
};

export default Bet;
