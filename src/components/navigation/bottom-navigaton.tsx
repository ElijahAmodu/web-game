"use client";

import type React from "react";
import appRoutes from "@/lib/landing.routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavbar = () => {
  const pathname = usePathname();
  return (
    <div className=" lg:hidden flex items-center justify-center w-full mx-auto fixed z-10 bottom-0 ">
      <div className=" bg-blue-100  shadow-lg w-full p-2">
        <div className="max-w-sm mx-auto flex justify-between items-center">
          {appRoutes.map((link) => {
            const isActive = link.path ? pathname === link.path : false;
            return (
              <div className="lg:hidden flex items-center" key={`nav${link}`}>
                <Link
                  href={link.path}
                  className={`cursor-pointer  space-x-[20px] py-1 px-[10px] w-full text-nowrap ${
                    isActive
                      ? "text-pink-25 bg-gray-25 rounded-full"
                      : "text-gray-300"
                  }`}
                >
                  <img src={link?.image} alt={link?.image} className="" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
