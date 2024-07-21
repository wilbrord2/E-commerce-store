import React from "react";
import { getProduct } from "../action";
import { redirect } from "next/navigation";
import ContactUs from "@/app/component/contactUs/contactUs";
import ImageContainer from "./imageContainer";
import ButtonComponent from "@/app/component/Button";
import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
interface props {
  params: {
    id: string;
  };
}
const SingleProductDetails = async ({ params: { id } }: props) => {
  const product = await getProduct(id);
  if (product.statusCode === 401) {
    redirect("/signin");
  }
  return (
    <section className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <div></div>
      <div className="w-full flex items-center justify-between gap-4">
        <ImageContainer images={product.data?.thumbnail} />
        <div className="w-[60%] border rounded-2xl flex flex-col">
          <div className="flex gap-2 justify-between items-center py-4 px-8">
            <span className="text-lg font-bold">
              Product Details{" "}
              <span className="font-bold p-2 bg-[#F4F5F6] rounded-lg text-xs">
                IN STOCK
              </span>{" "}
            </span>
            <span className="inline-flex gap-2 items-center">
              <ButtonComponent
                title={"Save"}
                color={""}
                iconPosition="left"
                icon={<HeartOutlined className="text-textDefaultGreen" />}
              />
              <Icon
                icon="charm:menu-kebab"
                width="20"
                height="20"
                className="text-textTitlesColor"
              />
            </span>
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
                {product.data?.reviews[0]?.rating || 0}{' '}
                ({product.data.reviews.length} Reviews)
              </span>
            </div>

            <div></div>
          </div>
          <div className="p-8"></div>
        </div>
      </div>
      <div></div>
      <ContactUs />
    </section>
  );
};

export default SingleProductDetails;
