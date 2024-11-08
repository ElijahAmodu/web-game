import { useState } from "react";
import ChartComponent from "../chartjs/chart";
import SideNav from "../navigation/side-navigaton";
import EventData from "../event-data/event-data";
import Bet from "../bet/bet";
import BottomNavbar from "../navigation/bottom-navigaton";

const Content = () => {
  const [oddValue, setOddValue] = useState<number>(0);
  const handleDataUpdate = (data: number) => {
    setOddValue(data);
  };
  return (
    <div className="flex relative">
      <div className="pt-10 lg:px-4 w-fit ">
        <SideNav />
      </div>
      <div className="absolute bottom-0 ">
        <BottomNavbar />
      </div>

      <div className="bg-blue-25 flex flex-col 2xl:flex-row gap-[15px] w-full pt-10 px-[10px] lg:pl-[53px] lg:pr-[79px] min-h-screen">
        <div className="w-full relative rounded-2xl">
          <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <p className="text-2xl">{oddValue}x</p>
          </div>
          <ChartComponent onDataUpdate={handleDataUpdate} />
          <Bet />
        </div>

        <EventData />
      </div>
    </div>
  );
};

export default Content;
