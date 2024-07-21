"use client";
import { useAppContext } from "@/app/context/context";
import { cartList } from "@/app/helpers/arrays";
import { HeartFilled } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  name: string;
  image: string;
  price: number;
  productId: string;
}

const SavedSingleProduct = (params: props) => {
  const { image, name, price, productId } = params;
  const { setaAddedToCart } = useAppContext();

  return (
    <div className="flex flex-col rounded-2xl border cursor-pointer">
      <Link href={`/dashboard/product/${productId}`}>
        <div className="w-72 h-56 relative overflow-hidden">
          <Image
            src={image}
            fill
            alt="Product image"
            className="object-cover rounded-t-2xl"
          ></Image>
        </div>
      </Link>
      <div className="flex justify-between items-center border-t px-3 py-4">
        <Link href={`/dashboard/product/${productId}`}>
          {" "}
          <div>
            <h2 className="font-bold text-sm text-textTitlesColor">{name}</h2>
            <div className="font-extrabold text-base text-textDefaultGreen">
              {price.toLocaleString("en-US")} Rwf
            </div>
          </div>
        </Link>
        <div className="inline-flex gap-2">
          <Button
            onClick={() => {
              setaAddedToCart(true);
              cartList.push({
                name: name,
                image: image,
                price: price,
                id: productId,
              });
            }}
          >
            <Icon
              icon="hugeicons:shopping-cart-check-in-02"
              width="15"
              height="15"
              className="text-textPrimaryColor"
            />
          </Button>

          <Button
            icon={<HeartFilled className="text-textDefaultGreen" />}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default SavedSingleProduct;
