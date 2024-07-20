import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Icon } from "@iconify/react";
import React from "react";
import FilterOptions from "./filterOptions";

const HeroSection = ({
  background,
  store,
  totalItems,
}: {
  background?: string;
  store: boolean;
  totalItems: number;
}) => {
  return (
    <section
      className={`${
        background === "dark" ? " bg-textTitlesColor" : "bg-[#F7F8FB]"
      } sm:rounded-lg w-full flex flex-col gap-4 items-center justify-center p-8`}
    >
      <div className="font-extrabold text-2xl">
        <span className={store ? "text-textDefaultGreen" : "text-white"}>
          {store ? "Mark8 " : " Welcome to"}{" "}
        </span>{" "}
        <span
          className={store ? "text-textTitlesColor" : "text-textDefaultGreen"}
        >
          {store ? " Stores" : "Mark 8"}
        </span>
      </div>
      <div className={store ? "text-textSubTitlesColor" : "text-[#DBDBDB]"}>
        {" "}
        {totalItems} {store ? "Stores" : "Products"}
      </div>
      <div className="w-full sm:w-2/3 md:w-1/2">
        <Input
          type="text"
          size="large"
          className={
            store
              ? "bg-textSubTitlesColor bg-opacity-5  py-3 border-0 text-textTitlesColor"
              : "bg-[#FFFFFF0A] bg-opacity-5 py-3  border-0 text-[#F4F5F6] focus:bg-[#FFFFFF0A]  hover:bg-[#FFFFFF0A]"
          }
          placeholder="What are you looking for?"
          prefix={<SearchOutlined className="text-textDefaultGreen pr-2" />}
          suffix={
            <Icon
              icon="hugeicons:filter-horizontal"
              width="15"
              height="15"
              className="text-textPrimaryColor font-extrabold rotate-90"
            />
          }
        />
      </div>
      <FilterOptions store={store} />
    </section>
  );
};

export default HeroSection;
