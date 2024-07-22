"use client";
import { useAppContext } from "@/app/context/context";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { cartList } from "@/app/helpers/arrays";

const CartList = () => {
  const { openCart, setOpenCart } = useAppContext();
  const [inputFocused, setInputFocused] = useState(false);
  const [totalNumber, setTotalNumber] = useState(1);
  const [updateCart, setUpdateCart] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBlur = () => {
    if (cartList.length === 0 || inputFocused) {
      setOpenCart(false);
    }
  };

  const handleDeletedItem = (index: number) => {
    setUpdateCart(Math.random() * 10);
    cartList.splice(index, 1);
  };
  useEffect(() => {
    let sum = 0;
    cartList.forEach((item) => {
      sum = sum + item.price * totalNumber;
    });
    setTotalPrice(sum);
  });

  return (
    <>
      {openCart && (
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-40 z-50 w-full h-auto flex justify-end"
          onClick={handleBlur}
        >
          <div
            className=" w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 flex flex-col h-screen justify-between gap-2 bg-white border animate-slideInRight"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-scroll">
              <div className="flex items-center justify-between gap-2 p-4">
                <div>
                  <span
                    onClick={handleBlur}
                    className="cursor-pointer text-2xl"
                  >
                    x
                  </span>
                  <span className="font-bold text-textTitlesColor pl-4">
                    My Cart ({cartList.length})
                  </span>
                </div>
                <div className=" flex items-center justify-center gap-2">
                  <ButtonComponent
                    title="Save Cart For Later"
                    color=""
                    link="/"
                    iconPosition="left"
                    icon={<HeartOutlined className="text-textDefaultGreen" />}
                  />
                  <div className="border rounded-md px-3 py-2 ">
                    <DeleteOutlined className="text-red-600" />
                  </div>
                </div>
              </div>
              <div className="bg-[#F4F5F6] p-4 text-textSubTitlesColor text-sm">
                <ExclamationCircleOutlined className="rotate-180 pl-4 " />
                <span>By proceeding you won&apos;t be charged yet</span>
              </div>
              <div
                onBlur={() => setInputFocused(false)}
                onFocus={() => setInputFocused(true)}
              >
                <div key={updateCart} className="p-4">
                  {cartList.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between flex-wrap gap-4 mb-4 p-4 border rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="p-2">{index + 1}</span>
                        <div className="w-20 h-20 relative overflow-hidden">
                          <Image
                            src={item.image}
                            fill
                            alt="Product image"
                            className="object-cover rounded-xl"
                          ></Image>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-textTitlesColor font-bold">
                            {item.name}
                          </span>
                          <span>
                            {(item.price * totalNumber).toLocaleString()} RWF
                          </span>
                        </div>
                      </div>
                      <div className=" max-sm:w-full flex items-center max-sm:justify-center gap-2 ">
                        <Button
                          disabled={totalNumber <= 1 ? true : false}
                          onClick={() => {
                            setTotalNumber(totalNumber - 1);
                          }}
                          className="border rounded-md cursor-pointer"
                          icon={<MinusOutlined />}
                        ></Button>
                        <div className="bg-[#F7F8FB] border rounded-md px-8 py-1">
                          {totalNumber}
                        </div>
                        <Button
                          onClick={() => {
                            setTotalNumber(totalNumber + 1);
                          }}
                          className="border rounded-md cursor-pointer"
                          icon={<PlusOutlined />}
                        ></Button>
                        <Button
                          onClick={() => handleDeletedItem(index)}
                          className="border rounded-md cursor-pointer"
                          icon={<DeleteOutlined className="text-red-600" />}
                        ></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t flex justify-between items-center p-4">
              <div>
                <span className="text-xs">Total:</span>
                <div className="text-textTitlesColor font-bold text-lg">
                  {totalPrice.toLocaleString()} Rwf
                </div>
              </div>
              <ButtonComponent
                title="Checkout"
                color="default"
                link="#"
                iconPosition="left"
                icon={
                  <Icon
                    icon="vaadin:dollar"
                    width="15"
                    height="15"
                    className="text-black font-bold"
                  />
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartList;
