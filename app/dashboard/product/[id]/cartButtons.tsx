"use client";
import ButtonComponent from "@/app/component/Button";
import { useAppContext } from "@/app/context/context";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import React, { useState } from "react";

const CartButtons = () => {
  const [totalNumber, setTotalNumber] = useState(1);
  const { setaAddedToCart } = useAppContext();
  return (
    <div className=" flex items-center gap-2 ">
      <Button
        disabled={totalNumber <= 1 ? true : false}
        onClick={() => setTotalNumber(totalNumber - 1)}
        className="border rounded-md cursor-pointer"
        icon={<MinusOutlined />}
      ></Button>
      <div className="bg-[#F7F8FB] border rounded-md px-8 py-1">
        {totalNumber}
      </div>
      <Button
        onClick={() => setTotalNumber(totalNumber + 1)}
        className="border rounded-md cursor-pointer"
        icon={<PlusOutlined />}
      ></Button>
      <div onClick={() => setaAddedToCart(true)}>
        <ButtonComponent
          title={"Add To Cart"}
          color={"default"}
          iconPosition="left"
          icon={
            <Icon
              icon="hugeicons:shopping-cart-check-in-02"
              width="15"
              height="15"
              className="text-textPrimaryColor"
            />
          }
        />
      </div>
    </div>
  );
};

export default CartButtons;
