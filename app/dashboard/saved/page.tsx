"use client"
import ContactUs from "@/app/component/contactUs/contactUs";
import { savedProduct } from "@/app/helpers/arrays";
import React from "react";
import SavedSingleProduct from "./savedSingleProduct";

const SavedProduct = () => {
  console.log({savedProduct})
  return (
    <section className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <div className="bg-[#F7F8FB] flex flex-col items-center justify-center gap-4 p-8 rounded-xl">
        <span className="font-extrabold text-2xl">Saved Products</span>
        <span className="text-sm text-textSubTitlesColor">{savedProduct.length} Saved</span>
      </div>
      {savedProduct.length < 1 ? (
        <div className="w-full flex items-center justify-center font-bold text-3xl text-textTitlesColor h-60">
          {" "}
          <span className="p-8 rounded-lg border bg-gray-100">Save a Product</span>{" "}
        </div>
      ) : (
        <div className="w-full flex items-center justify-evenly flex-wrap gap-4">
          {savedProduct.map((item) => (
            <div key={item.id}>
              <SavedSingleProduct
                productId={item.id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            </div>
          ))}
        </div>
      )}
      <ContactUs />
    </section>
  );
};

export default SavedProduct;
