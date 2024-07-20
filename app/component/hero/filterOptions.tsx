"use client"
import React, { useState } from "react";

const FilterOptions = ({store}:{store:boolean}) => {
  const [active, setActive] = useState("All");
  return (
    <div className="flex gap-4 items-center justify-center max-sm:flex-wrap">
      <span
        onClick={() => setActive("All")}
        className={`${
          active === "All"
            ? store?"border-black text-textPrimaryColor": "border-white text-white font-bold"
            : " border-[#79878F] text-[#79878F]"
        } border py-2 px-4 rounded-2xl text-xs font-medium cursor-pointer`}
      >
        All
      </span>
      <span
        onClick={() => setActive("Vectors")}
        className={`${
          active === "Vectors"
            ? store?"border-black text-textPrimaryColor": "border-white text-white font-bold"
            : " border-[#79878F] text-[#79878F]"
        } border py-2 px-4 rounded-2xl text-xs font-medium cursor-pointer`}
      >
        Vectors
      </span>
      <span
        onClick={() => setActive("Icons")}
        className={`${
          active === "Icons"
            ? store?"border-black text-textPrimaryColor": "border-white text-white font-bold"
            : " border-[#79878F] text-[#79878F]"
        } border py-2 px-4 rounded-2xl text-xs font-medium cursor-pointer`}
      >
        Icons
      </span>
      <span
        onClick={() => setActive("Backgrounds")}
        className={`${
          active === "Backgrounds"
            ? store?"border-black text-textPrimaryColor": "border-white text-white font-bold"
            : " border-[#79878F] text-[#79878F]"
        } border py-2 px-4 rounded-2xl text-xs font-medium cursor-pointer`}
      >
        Backgrounds
      </span>
    </div>
  );
};

export default FilterOptions;
