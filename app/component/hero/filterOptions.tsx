"use client"
import { useAppContext } from "@/app/context/context";
import { categoryType } from "@/app/types/categoriesType";
import React, { useState } from "react";

const FilterOptions = ({store, categories}:{store:boolean, categories:categoryType[]}) => {
  const [active, setActive] = useState("All");
  const {setFilterCategory}=useAppContext();
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
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

      {categories.map((category)=>(
        <span
        key={category.id}
        onClick={() => {
          setActive(category.name);
          setFilterCategory(active==="All"?"":category.id)
        }}
        className={`${
          active === category.name
            ? store?"border-black text-textPrimaryColor": "border-white text-white font-bold"
            : " border-[#79878F] text-[#79878F]"
        } border py-2 px-4 rounded-2xl text-xs font-medium cursor-pointer`}
      >
       {category.name}
      </span>
      ))}
    </div>
  );
};

export default FilterOptions;
