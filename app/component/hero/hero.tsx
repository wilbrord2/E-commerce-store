"use client"
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Icon } from "@iconify/react";
import React from "react";
import FilterOptions from "./filterOptions";

const HeroSection = ({ background }: { background?: string }) => {
  return (
    <section
      className={`${
        background === "dark" ? " bg-textTitlesColor" : "bg-[#F7F8FB]"
      } sm:rounded-lg w-full flex flex-col gap-4 items-center justify-center p-8`}
    >
      <div className="font-extrabold text-2xl">
        <span className="text-white">Welcome to </span>{" "}
        <span className="text-textDefaultGreen">Mark 8</span>
      </div>
      <div className="text-[#DBDBDB]"> 12,932 Products</div>
      <div className="w-full sm:w-1/2">
        <Input
          type="text"
          size="large"
          className="bg-[#FFFFFF0A] bg-opacity-5 py-3  border-0 text-[#F4F5F6] focus:bg-[#FFFFFF0A]  hover:bg-[#FFFFFF0A]"
          placeholder="What are you looking for?"
          prefix={<SearchOutlined className="text-textDefaultGreen pr-2" />}
          suffix={
            <Icon
              icon="hugeicons:filter-horizontal"
              width="15"
              height="15"
              className="text-white font-bold rotate-90"
            />
          }
        />
      </div>
      <FilterOptions/>
    </section>
  );
};

export default HeroSection;
