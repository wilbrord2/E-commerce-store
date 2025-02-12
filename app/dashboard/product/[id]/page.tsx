import React from "react";
import { getProduct } from "../action";
import { redirect } from "next/navigation";
import ContactUs from "@/app/component/contactUs/contactUs";
import ImageContainer from "./imageContainer";
import ButtonComponent from "@/app/component/Button";
import { HeartOutlined, PhoneOutlined, StarOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import CartButtons from "./cartButtons";
import SingleProduct from "@/app/component/product/singleProduct";
import SaveProductBtn from "./saveProductBtn";
interface props {
  params: {
    id: string;
  };
}
const SingleProductDetails = async ({ params: { id } }: props) => {
  const product = await getProduct(id);
  const array = [1, 2, 3, 4];
  if (product.statusCode === 401) {
    redirect("/");
  }
  return (
    <section className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 max-sm:px-2 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <div></div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <ImageContainer images={product.data?.thumbnail} />
        <div className="w-full lg:w-[60%]  border rounded-2xl flex flex-col">
          <div className="flex gap-2 justify-between max-lg:flex-wrap items-center py-4 px-8">
            <span className="text-lg font-bold">
              Product Details{" "}
              <span className="font-bold p-2 bg-[#F4F5F6] rounded-lg text-xs">
                IN STOCK
              </span>{" "}
            </span>
            <SaveProductBtn name={product.data.name} image={product.data?.thumbnail[0]} price={product.data.unitPrice} productId={product.data.id} />
          </div>
          <div className="border-y p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <span className="text-2xl text-textTitlesColor font-extrabold">
                {product.data.name}
              </span>
              <span className="text-base text-textDefaultGreen font-bold">
                {product.data.unitPrice.toLocaleString()}{" "}
                {product.data.createdBy.currency}{" "}
                <span className="font-bold text-[#DBDBDB] line-through ml-2">
                  12,000{product.data.createdBy.currency}
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-xl text-textTitlesColor font-extrabold">
                Description
              </span>
              <span className="text-sm text-textSubTitlesColor">
                {product.data.description}
              </span>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-xl text-textTitlesColor font-extrabold">
                Reviews
              </span>
              <span className="text-sm text-textSubTitlesColor">
                {" "}
                <StarOutlined className="text-textDefaultGreen pr-1" />
                {product.data?.reviews[0]?.rating || 0}
                {"   "}({product.data.reviews.length} Reviews)
              </span>
            </div>
            <CartButtons
              name={product.data.name}
              image={product.data.thumbnail[1]}
              price={product.data.unitPrice}
              productId={product.data.id}
            />
          </div>
          <div className="px-8 py-4 flex items-center justify-between max-lg:flex-wrap gap-2">
            <span className="inline-flex gap-2 items-center text-textTitlesColor font-bold">
              <span className="text-base text-nowrap ">Store info: </span>
              <span className="inline-flex gap-2 items-center text-xs text-nowrap">
                <span className="w-5 h-5 rounded-full block bg-textDefaultGreen"></span>{" "}
                Awesome Shop 1
              </span>
            </span>
            <ButtonComponent
              title={"Contact store"}
              color={""}
              iconPosition="left"
              icon={
                <PhoneOutlined className="rotate-90 text-textDefaultGreen" />
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-textTitlesColor text-2xl font-extrabold">
          You might also like
        </span>
        <div className="w-full flex items-center justify-evenly lg:justify-start flex-wrap gap-4">
          {array.map((item) => (
            <div key={item}>
              <SingleProduct
                removeCart={false}
                productId={product.data.id}
                image={product.data?.thumbnail[1]}
                price={16000}
                name={product.data.name}
              />
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </section>
  );
};

export default SingleProductDetails;
