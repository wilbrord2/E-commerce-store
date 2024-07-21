"use client";
import { useAppContext } from "@/app/context/context";
import { MysavedProduct } from "@/app/helpers/arrays";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface props {
  name: string;
  image: string;
  price: number;
  removeCart?: boolean;
  productId: string;
}

const SingleProduct = (params: props) => {
  const { image, name, price, removeCart, productId } = params;
  const [saved, setSaved] = useState(false);
  const { savedProduct, setSavedProduct } = useAppContext();
  return (
    <Link href={`/dashboard/product/${productId}`}>
    <div className="flex flex-col rounded-2xl border cursor-pointer">
      <div
        className={
          removeCart
            ? "w-44 h-48 relative overflow-hidden"
            : "w-72 h-56 relative overflow-hidden"
        }
      >
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
          {!removeCart && (
            <Button>
              <Icon
                icon="hugeicons:shopping-cart-check-in-02"
                width="15"
                height="15"
                className="text-textPrimaryColor"
              />
            </Button>
          )}
          <Button
            onClick={() => {
              setSaved((prev) => !prev);
              setSavedProduct(
                {
                  name: name,
                  image: image,
                  price: price,
                  saved: saved,
                  id: productId,
                },
              );
              MysavedProduct.push(savedProduct)
            }}
            icon={
              saved ? (
                <HeartFilled className="text-textDefaultGreen" />
              ) : (
                <HeartOutlined className="text-textPrimaryColor" />
              )
            }
          ></Button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleProduct;
