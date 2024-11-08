import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { useAccount } from "wagmi";
import { truncateAddress } from "@/lib/utils";
// import useWalletIconPersist from "../providers/useWalletIconPersist";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";

const Header = () => {
  const { address } = useAccount();
  // const walletIcon = useWalletIconPersist();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return (
    <div className="flex items-center justify-between w-full p-4 ">
      <div>
        <img src="/icons/logo.svg" alt="logo" className="" />
      </div>

      <div className="grid grid-flow-col place-content-end gap-3 w-full">
        <div className="bg-blue-400 p-[7px]  rounded-[8px] w-fit relative hidden md:block">
          <img
            src="/icons/purple-star.svg"
            alt="star"
            className="absolute right-2"
          />
          <Search className="text-blue-300" />
        </div>

        <div className=" bg-blue-400 p-[8px] rounded-[8px] grid place-content-center w-fit">
          <img src="/icons/pepper-token.svg" alt="logo" className="w-4 h-4" />
        </div>

        <div className=" bg-none md:bg-blue-400 rounded-[8px] max-w-[291px] w-full flex items-center justify-between pl-2 pr-1 py-1 ">
          <div className="hidden md:flex items-center gap-[4px]">
            <img src="/icons/pepper-token.svg" alt="logo" className="w-4 h-4" />
            <p className="text-xs font-bold">0 PEPR</p>
          </div>

          <div className="flex items-center gap-[2px]">
            <ChevronDown className="hidden md:block" />
            {/* <div className="bg-blue-200 rounded-[4px] py-[9px] px-[10px]">
              <button type="button" className="text-xs font-bold">
                Connect Wallet
              </button>
            </div> */}
            {!address ? (
              <button
                type="button"
                className="text-xs font-bold bg-blue-200 rounded-[4px] py-[9px] px-[10px]"
                onClick={openConnectModal}
              >
                Connect Wallet
              </button>
            ) : (
              <div
                className="bg-blue-200 border border-gray-700/50 py-1 px-2 flex items-center rounded-[8px] gap-2 cursor-pointer"
                onClick={() => {
                  openAccountModal?.();
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openAccountModal?.();
                  }
                }}
              >
                {/* <span className="bg-black-3 p-2 rounded-full">
                  <Image src={walletIcon} alt="icon" width={20} height={20} />
                </span> */}
                <span className="text-white text-xs font-bold ">
                  {truncateAddress(address, 6, true)}
                </span>
                {/* <span>
                  <Image
                    src="/icons/arrow-down.svg"
                    alt="dwn"
                    width={20}
                    height={20}
                  />
                </span> */}
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-400 rounded-[8px] px-[9.56px] py-[9px] w-fit flex items-center">
          <img
            src="/icons/gift-box.svg"
            alt="gift"
            className="w-[13px] h-[14.2px]"
          />
        </div>

        <div className="bg-blue-400 rounded-[8px] px-[9.56px] py-[9px] w-fit relative hidden md:flex items-center ">
          <div className="bg-blue-200 w-1 h-1 rounded-full absolute top-3 right-[9px]" />
          <img
            src="/icons/notification.svg"
            alt="gift"
            className="w-[13px] h-[14.2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
