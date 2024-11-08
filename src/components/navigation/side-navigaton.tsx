import { useMoonStore } from "@/store/store";
import { ChevronDown } from "lucide-react";
import React from "react";

enum SideTab {
  casino = "casino",
  lottery = "lottery",
  sport = "sport",
}

const SideNav = () => {
  const activeSideBarTab = useMoonStore((state) => state.activeSideBarTab);
  const setActiveSideBarTab = useMoonStore(
    (state) => state.setActiveSideBarTab
  );

  return (
    <div className="hidden lg:grid grid-cols-1 gap-[7px] w-fit min-w-[200px]">
      <div
        onClick={() => setActiveSideBarTab(SideTab.casino)}
        onKeyDown={() => setActiveSideBarTab(SideTab.casino)}
        className={`flex justify-between md:gap-[53px]  px-2 py-[10px] rounded-xl cursor-pointer ${
          activeSideBarTab === SideTab.casino
            ? "bg-gradient-to-l from-blue-500 to-blue-100 text-white"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        <div className=" flex gap-1">
          <img src="/icons/casino.svg" alt="casino" className="" />
          <p className="text-base font-bold ">Casino</p>
        </div>
        <ChevronDown className="text-white" />
      </div>

      <div
        onClick={() => setActiveSideBarTab(SideTab.lottery)}
        onKeyDown={() => setActiveSideBarTab(SideTab.lottery)}
        className={`flex justify-between md:gap-[53px]  px-2 py-[10px] rounded-xl cursor-pointer ${
          activeSideBarTab === SideTab.lottery
            ? "bg-gradient-to-l from-blue-500 to-blue-100 text-white"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        <div className=" flex gap-1">
          <img src="/icons/lottery.svg" alt="casino" className="" />
          <p className="text-base font-bold ">Lottery</p>
        </div>
        <ChevronDown className="text-white" />
      </div>

      <div
        onClick={() => setActiveSideBarTab(SideTab.sport)}
        onKeyDown={() => setActiveSideBarTab(SideTab.sport)}
        className={`flex justify-between md:gap-[53px]  px-2 py-[10px] rounded-xl cursor-pointer ${
          activeSideBarTab === SideTab.sport
            ? "bg-gradient-to-l from-blue-500 to-blue-100 text-white"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        <div className=" flex gap-1">
          <img src="/icons/sport.svg" alt="casino" className="" />
          <p className="text-base font-bold ">Sport</p>
        </div>
        <ChevronDown className="text-white" />
      </div>
    </div>
  );
};

export default SideNav;
