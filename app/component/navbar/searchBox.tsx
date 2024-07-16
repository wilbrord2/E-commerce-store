"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";
import ButtonComponent from "../Button";
import { useAppContext } from "@/app/context/context";

const SearchBox = () => {
  const { openSearch, setOpenSearch } = useAppContext();
  const [inputFocused, setInputFocused] = useState(false);

  const handleBlur = () => {
    if (!inputFocused) {
      setOpenSearch(false);
    }
  };

  return (
    <>
      {openSearch && (
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-50 w-full h-screen flex items-center justify-center"
          onClick={handleBlur}
        >
          <div
            className="p-8 w-4/5 lg:w-1/2 2xl:w-1/3 flex items-center justify-center gap-2 bg-white border rounded-2xl animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Search</span>
            <span className="w-full">
              <Input
                type="text"
                size="large"
                className="bg-[#0C0C0D] bg-opacity-5 py-3 border-0"
                placeholder="What are you looking for?"
                prefix={
                  <SearchOutlined className="text-textDefaultGreen pr-2" />
                }
                onBlur={() => setInputFocused(false)}
                onFocus={() => setInputFocused(true)}
              />
            </span>
            <span onClick={handleBlur}>
              <ButtonComponent
                title="Search"
                color="default"
                link="#"
                icon={<SearchOutlined />}
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBox;
