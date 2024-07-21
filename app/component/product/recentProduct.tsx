"use server";
import React from "react";
import { Button } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import SingleProduct from "./singleProduct";
import { getAllProducts } from "./action";
import { redirect } from "next/navigation";
import StoreList from "./storeList";
import ButtonComponent from "../Button";
import { DownOutlined } from "@ant-design/icons";

export const getServerSideProps = async () => {
  try {
    const productData = await getAllProducts(1, 10);
    return {
      product: productData,
      error: null,
    };
  } catch (error: any) {
    throw new error();
  }
};

const RecentProduct = async () => {
  const { product, error } = await getServerSideProps();
  if (product.statusCode === 401 || error) {
    redirect("/");
  }

  return (
    <section className="p-4 w-full">
      <div className="w-full flex items-center justify-between mb-8">
        <span className="font-bold text-textPrimaryColor">
          {" "}
          Recent Products ({product.data?.pagination.totalRecords || 0})
        </span>
        <span className="inline-flex gap-2">
          <Button>
            <Icon
              icon="ci:filter"
              width="15"
              height="15"
              className="text-textSubTitlesColor"
            />
          </Button>
          <Button>
            <Icon
              icon="la:sort-alpha-down"
              width="15"
              height="15"
              className="text-textSubTitlesColor"
            />
          </Button>
        </span>
      </div>
      <div className="w-full flex items-start gap-2">
        <div>
          <div className="w-full mb-4 flex items-center justify-center md:justify-evenly gap-4 flex-wrap">
            {product.data?.products.map((product) => (
              <div key={product.id}>
                <SingleProduct
                  productId={product.id}
                  image={product.thumbnail[1]}
                  price={product.unitPrice}
                  name={product.name}
                />
              </div>
            ))}
          </div>
          <div className="w-full text-center">
            <ButtonComponent
              title="Load more"
              iconPosition={"left"}
              icon={<DownOutlined className="text-textDefaultGreen" />}
              color={""}
            />
          </div>
        </div>
        <StoreList />
      </div>
    </section>
  );
};

export default RecentProduct;
