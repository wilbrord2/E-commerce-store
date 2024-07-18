"use server";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

interface props {
  name: string;
  image: string;
  price: number;
}

const SingleProduct = (params: props) => {
  const { image, name, price } = params;
  return (
    <div className="flex flex-col rounded-2xl border">
      <div className="w-72 h-56 relative overflow-hidden">
        <Image
          src={image}
          fill
          alt="Product image"
          className="object-cover rounded-t-2xl"
        ></Image>
      </div>
      <div className="flex justify-between items-center border-t px-3 py-4">
        <div>
          <h2 className="font-bold text-sm text-textTitlesColor">{name}</h2>
          <div className="font-extrabold text-base text-textDefaultGreen">
            {price.toLocaleString("en-US")} Rwf
          </div>
        </div>
        <div className="inline-flex gap-2">
          <Button>
            <Icon
              icon="hugeicons:shopping-cart-check-in-02"
              width="15"
              height="15"
              className="text-textPrimaryColor"
            />
          </Button>
          <Button>
            <Icon
              icon="mdi:heart-outline"
              width="15"
              height="15"
              className="text-textPrimaryColor"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
