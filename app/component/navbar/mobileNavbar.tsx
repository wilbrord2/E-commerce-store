"use client";
import { useAppContext } from "@/app/context/context";
import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const { openSearch, setOpenSearch, openCart, setOpenCart } = useAppContext();
  const [active, setActive] = useState("Home");
  return (
    <section className="lg:hidden rounded-t-2xl z-40 sticky bottom-0 bg-textTitlesColor font-bold w-full">
      <div className="flex items-center p-4 justify-evenly gap-4">
        <div>
          <Link href={"/dashboard"}>
            <span
              onClick={() => setActive("Home")}
              className={`${
                active === "Home" ? "text-white" : "text-textSubTitlesColor"
              } flex justify-center items-center flex-wrap `}
            >
              <HomeOutlined className="pr-2" />
              <span>Home</span>
            </span>
          </Link>
        </div>
        <div>
          <Link href={"/dashboard/store"}>
            {" "}
            <span
              onClick={() => setActive("Stores")}
              className={`${
                active === "Stores" ? "text-white" : "text-textSubTitlesColor"
              } flex justify-center items-center flex-wrap `}
            >
              <ShopOutlined className="pr-2" />
              <span>Stores</span>
            </span>
          </Link>
        </div>
        <div
          onClick={() => {
            setActive("Cart");
            setOpenCart(true);
            setOpenSearch(false);
          }}
          className={`${
            openCart && active === "Cart"
              ? "text-white"
              : "text-textSubTitlesColor"
          } flex justify-center items-center flex-wrap `}
        >
          <ShoppingCartOutlined className="pr-2" />
          <span className="text-nowrap">My Cart </span>
        </div>
        <div
          onClick={() => setActive("Saved")}
          className={`${
            active === "Saved" ? "text-white" : "text-textSubTitlesColor"
          } flex justify-center items-center flex-wrap `}
        >
          <HeartOutlined className="pr-2" />
          <span>Saved </span>
        </div>
        <div
          onClick={() => {
            setActive("search");
            setOpenSearch(true);
            setOpenCart(false);
          }}
          className={`${
            openSearch && active === "search"
              ? "text-white"
              : "text-textSubTitlesColor"
          } flex justify-center items-center flex-wrap `}
        >
          <SearchOutlined className="pr-2" />
          <span>search </span>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(MobileNavbar), { ssr: false });
