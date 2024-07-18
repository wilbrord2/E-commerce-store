import React from "react";
import Logo from "../logo";
import Title from "../logo/title";
import {
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="lg:sticky w-full bg-[#F4F5F6] mt-8 px-12 py-8 flex gap-4 justify-between items-center max-sm:flex-col">
      <Link href={"/dashboard"}>
        <div className="flex gap-2 cursor-pointer">
          <Logo />
          <Title size={"small"} />
        </div>
      </Link>
      <div>
        <span className="font-bold text-textTitlesColor text-sm">
          ©2024. Mark8
        </span>
        <span className="text-textSubTitlesColor text-sm pl-2">
          By Awesomity Ltd
        </span>
      </div>
      <div className="flex items-center gap-6">
        <XOutlined className="cursor-pointer" />
        <InstagramOutlined className="cursor-pointer" />
        <YoutubeOutlined className="cursor-pointer" />
        <LinkedinOutlined className="cursor-pointer" />
      </div>
    </section>
  );
};

export default Footer;
