
import React from "react";
import { HiMiniCorrencyDollar } from "react-icons/hi2";
import { HiCorrencyRupee } from "react-icons/hi2";
import { HiMiniCorrencyEuro } from "react-icons/hi2";
import { HiMiniCorrencyPound } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 px-4 py-2 text-3xl text-white text-center flex justify-center items-center gap-4">
        <HiCorrencyRupee className="animate-bounce" />
        <HiMiniCorrencyDollar className="animate-spin"/>
        <span className="font-bold">Corrency Convertor</span>
        <HiMiniCorrencyEuro className="animate-pulse"/>
        <HiMiniCorrencyPound className="animate-ping"/>
      </div>
    </>
  );
};

export default Header;
