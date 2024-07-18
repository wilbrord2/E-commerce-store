"use client";
import { useAppContext } from "@/app/context/context";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";

const CartIcon = () => {
  const { setOpenCart } = useAppContext();
  return (
    <div
      onClick={() => setOpenCart(true)}
      className="flex items-center gap-1 cursor-pointer"
    >
      <ShoppingCartOutlined />
      <span>My Cart </span>
      <span className="block w-1 h-1 bg-red-500 rounded-full"></span>
    </div>
  );
};

export default CartIcon;
