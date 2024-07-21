"use client";
import React from "react";
import Logo from "../logo";
import Title from "../logo/title";
import {
  CustomerServiceOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Dropdown, MenuProps, Space } from "antd";
import dynamic from "next/dynamic";
import SearchIcon from "./searchIcon";
import CartIcon from "./cartIcon";
import { Logout } from "@/app/helpers/logout";

const items: MenuProps["items"] = [
  {
    label: (
      <div className="py-6 px-8 border-b flex items-center gap-4 hover:bg-none cursor-auto">
        <span className="w-10 h-10 rounded-md block bg-textDefaultGreen"></span>
        <div className="flex flex-col gap-2">
          <span className="text-textTitlesColor text-sm">username</span>
          <span className="text-textSubTitlesColor text-sm">email</span>
        </div>
      </div>
    ),
    key: "1",
  },
  {
    label: (
      <div className="px-6 py-1 flex gap-4">
        <UserOutlined />
        <span className="text-textSubTitlesColor text-sm">My Account</span>
      </div>
    ),
    key: "2",
  },
  {
    label: (
      <div className="px-6 py-1 flex gap-4">
        <ShoppingCartOutlined />
        <span className="text-textSubTitlesColor text-sm">My Orders</span>
      </div>
    ),
    key: "3",
  },
  {
    label: (
      <div className="px-6 py-1 flex gap-4">
        <CustomerServiceOutlined />
        <span className="text-textSubTitlesColor text-sm">Helps</span>
      </div>
    ),
    key: "4",
  },
  {
    label: (
      <div className="px-6 py-1 flex gap-4">
        <ExclamationCircleOutlined />
        <span className="text-textSubTitlesColor text-sm">About</span>
      </div>
    ),
    key: "5",
  },
  {
    label: (
      <div className="px-6 pt-1 pb-4 border-b flex gap-4">
        <SettingOutlined />
        <span className="text-textSubTitlesColor text-sm">Settings</span>
      </div>
    ),
    key: "6",
  },
  {
    label: (
      <Link onClick={()=>Logout()} href={"/"}>
        <div className="px-6 py-3 flex gap-4">
          <LogoutOutlined />
          <span className="text-textSubTitlesColor text-sm">Logout</span>
        </div>
      </Link>
    ),
    key: "7",
  },
];

const Navbar = () => {
  return (
    <>
      {/* mobile navbar */}
      <section className="sticky top-0 bg-white z-30 lg:hidden w-full h-16 py-2 px-4 flex items-center justify-between border-b border-[#DBDBDB]">
        <div>
          <Link href={"/dashboard"}>
            <div className="flex gap-2 cursor-pointer">
              <Logo />
              <Title size={"small"} />
            </div>
          </Link>
        </div>
        <div className="flex items-center rounded-lg  border-2 border-[#DBDBDB] font-bold">
          <div className="border-r-2 py-3 px-4">
            <UserOutlined className="text-[#DBDBDB]" />
          </div>
          <div>
            <Dropdown menu={{ items }} trigger={["click"]} className="p-3">
              <span onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined className="text-textColorButton" />
                </Space>
              </span>
            </Dropdown>
          </div>
        </div>
      </section>

      {/* Desktop navbar */}
      <section className="sticky z-30 top-0 w-full border-b border-[#DBDBDB]">
        <div className="max-w-[2500px] mx-auto   bg-white max-lg:hidden w-full py-2 lg:px-4 xl:px-12 flex items-center justify-between ">
          <div className="flex items-center justify-between gap-12">
            <Link href={"/dashboard"}>
              <div className="flex gap-2 cursor-pointer">
                <Logo />
                <Title size={"small"} />
              </div>
            </Link>
            <div className="flex justify-between gap-8">
              <Link href={"/dashboard"}>
                {" "}
                <span className="font-bold text-textTitlesColor">
                  {" "}
                  <HomeOutlined className="text-textDefaultGreen pr-2 font-bold" />
                  Home
                </span>
              </Link>
              <Link href={"/dashboard/store"}>
                {" "}
                <span className="text-textSubTitlesColor">
                  <ShopOutlined className="text-textSubTitlesColor pr-2 font-bold" />
                  Stores
                </span>
              </Link>
            </div>
          </div>
          <div className="text-textSubTitlesColor flex items-center gap-8 ">
            <SearchIcon />
            <CartIcon />
            <Link href={"/dashboard/saved"}>
            <div className="flex items-center gap-1">
              <HeartOutlined className="pr-2" />
              <span>Saved </span>
            </div>
            </Link>
            <Link href={"#openstore"}>
              <div className="text-textTitlesColor p-3 rounded-lg border-2 border-[#DBDBDB] font-bold">
                Open A Store
                <ShopOutlined className="text-textDefaultGreen pl-2 font-bold" />
              </div>
            </Link>
            <div className="flex items-center rounded-lg  border-2 border-[#DBDBDB] font-bold">
              <div className="border-r-2 py-3 px-4">
                <UserOutlined className="text-[#DBDBDB]" />
              </div>
              <div>
                <Dropdown menu={{ items }} trigger={["click"]} className="p-3">
                  <span onClick={(e) => e.preventDefault()}>
                    <Space>
                      <DownOutlined className="text-textColorButton" />
                    </Space>
                  </span>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
