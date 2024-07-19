import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
interface props {
  name: string;
  image: string;
  product: number;
}

const SingleStore = (params: props) => {
  const { image, name, product } = params;
  return (
    <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2 items-center">
      <div className="w-16 h-16 relative overflow-hidden">
        <Image
          src={image}
          fill
          alt="Product image"
          className="object-cover rounded-2xl"
        ></Image>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-extrabold text-textColorButton">{name}</span>
        <span className="text-textSubTitlesColor text-xs">{product} products</span>
      </div>
      </div>
      <div>
        <Icon
          icon="uim:angle-right"
          width="20"
          height="20"
          className="text-[#DBDBDB]"
        />
      </div>
    </div>
  );
};

export default SingleStore;
