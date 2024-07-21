import ButtonComponent from "@/app/component/Button";
import SingleProduct from "@/app/component/product/singleProduct";
import { StoresType } from "@/app/types/storeTypes";
import { HeartOutlined, PhoneOutlined, StarOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import Image from "next/image";

import React from "react";

const StoresPage = ({ stores }: { stores: StoresType }) => {
  const { data } = stores;
  return (
    <section className="w-full flex flex-col gap-4">
      {data?.stores.map((store) => (
        <div key={store.id} className="w-full border rounded-lg">
          <div className="w-full border-b py-2 px-4 flex items-center max-sm:flex-wrap gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 relative overflow-hidden">
                <Image
                  src={store.image}
                  fill
                  alt="Store image"
                  className="object-cover rounded-2xl"
                ></Image>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-extrabold text-textColorButton text-sm">
                  {store.name}
                </span>
                <span className="text-textSubTitlesColor text-xs">
                  {10} products
                </span>
              </div>
            </div>
            <span className="flex items-center gap-2">
              <ButtonComponent
                title={"View Profile"}
                iconPosition="left"
                color={"default"}
                icon={
                  <Icon
                    icon="solar:user-outline"
                    width="20"
                    height="20"
                    className="text-textPrimaryColor"
                  />
                }
              />
              <Button
                className="p-5"
                icon={<PhoneOutlined className="rotate-90" />}
              ></Button>
              <Button className="p-5" icon={<HeartOutlined />}></Button>
            </span>
          </div>
          <div className="p-4 w-full flex items-center flex-col lg:flex-row gap-4 sm:gap-2">
            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-3">
              <div className="flex flex-col gap-3">
                <span className="text-base text-textTitlesColor font-extrabold">
                  About
                </span>
                <p className="text-sm text-textSubTitlesColor">
                  {store.description}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-base text-textTitlesColor font-extrabold">
                  Categories
                </span>
                <div className="inline-flex gap-2">
                  <span className="border rounded-3xl text-center px-4 py-2 text-textSubTitlesColor">
                    Vectors
                  </span>
                  <span className="border rounded-3xl text-center px-4 py-2 text-textSubTitlesColor">
                    Background
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-base text-textTitlesColor font-extrabold">
                  Reviews
                </span>
                <span className="block">
                  <StarOutlined className="text-textDefaultGreen pr-2" />
                  <span className="text-sm text-textSubTitlesColor">
                    4.9 (14 Reviews)
                  </span>
                </span>
              </div>
              <div>
                <ButtonComponent
                  title={"Explore Products"}
                  iconPosition="left"
                  color={""}
                  icon={
                    <Icon
                      icon="iconamoon:box"
                      width="20"
                      height="20"
                      className="text-textDefaultGreen"
                    />
                  }
                />
              </div>
            </div>
            <div className="w-full flex gap-3 items-center max-md:flex-wrap max-sm:justify-center lg:justify-end">
              <SingleProduct
                removeCart
                productId={"ecc5384a-bf4e-4121-860b-2416cedcff0d"}
                image={store.image}
                price={16000}
                name={"Product 1"}
              />
              <SingleProduct
                removeCart
                productId={"ecc5384a-bf4e-4121-860b-2416cedcff0d"}
                image={store.image}
                price={16000}
                name={"Product 2"}
              />
              <SingleProduct
                removeCart
                productId={"ecc5384a-bf4e-4121-860b-2416cedcff0d"}
                image={store.image}
                price={16000}
                name={"Product 2"}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StoresPage;
