import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
const Logo = () => {
  return (
    <div>
      <Image src={logo} width={50} height={50} alt="logo"></Image>
    </div>
  );
}

export default Logo