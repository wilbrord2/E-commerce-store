import ContactUs from "@/app/component/contactUs/contactUs";
import SingleProduct from "@/app/component/product/singleProduct";
import { MysavedProduct } from "@/app/helpers/arrays";
import React from "react";

const SavedProduct = () => {
  const array = [1, 2, 3, 4, 5, 6];
  console.log(MysavedProduct)
  return (
    <section className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <div className="bg-[#F7F8FB] flex flex-col items-center justify-center gap-4 p-8 rounded-xl">
        <span className="font-extrabold text-2xl">Saved Products</span>
        <span className="text-sm text-textSubTitlesColor">6 Saved</span>
      </div>
      <div className="w-full flex items-center justify-evenly flex-wrap gap-4">
        {array.map((item) => (
          <div key={item}>
            <SingleProduct
              removeCart={false}
              productId={"123"}
              image={"/public/assets/bg-image-auth.png"}
              price={16000}
              name={"Product 1"}
            />
          </div>
        ))}
      </div>
      <ContactUs />
    </section>
  );
};

export default SavedProduct;
