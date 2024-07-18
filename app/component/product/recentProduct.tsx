"use server";
import React from "react";
import { Button } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import SingleProduct from "./singleProduct";
import { getAllProducts } from "./action";

const RecentProduct = async () => {
  const product = await getAllProducts(1, 10);
  return (
    <section className="p-4 w-full">
      <div className="w-full flex items-center justify-between mb-8">
        <span className="font-bold text-textPrimaryColor">
          {" "}
          Recent Products ({product.data.pagination.totalRecords || 0})
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
      <div className="w-full flex items-center justify-center md:justify-evenly gap-4 flex-wrap">
        {product.data.products.map((product) => (
          <div key={product.id}>
            <SingleProduct
              image={product.thumbnail[1]}
              price={product.unitPrice}
              name={product.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProduct;
