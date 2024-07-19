"use client"
import { useAppContext } from "@/app/context/context";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
const SearchIcon = () => {
  const { setOpenSearch } = useAppContext();
  return (
    <div onClick={() => setOpenSearch(true)} className="cursor-pointer">
      <SearchOutlined />
    </div>
  );
};

export default SearchIcon;
