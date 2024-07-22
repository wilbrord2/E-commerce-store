"use client";
import { useAppContext } from "@/app/context/context";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CartResponse = () => {
  const { addedToCart, setaAddedToCart } = useAppContext();
  setTimeout(() => {
    setaAddedToCart(false);
  }, 4000);
  return (
    <>
      {addedToCart && (
        <div
          onClick={() => setaAddedToCart(false)}
          className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 w-full h-auto flex items-center justify-center"
        >
          <div className="flex flex-col gap-2 items-center justify-center animate-slideDown">
            <Icon
              icon="hugeicons:shopping-cart-check-in-02"
              width="30"
              height="30"
              className="text-textDefaultGreen"
            />
            <div className="text-white font-bold">Added To Cart</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartResponse;
