"use client";
import React from "react";
import { getProductList } from "@/lib/features/productSlice/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { Button } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import SingleProduct from "./singleProduct";
const RecentProduct = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product);
  useEffect(() => {
    dispatch(
      getProductList({
        pageNumber: 1,
        recordsPerPage: 30,
      })
    );
  }, [dispatch]);

  return (
    <section className="p-4 w-full">
      <div className="w-full flex items-center justify-between mb-8">
        <span className="font-bold text-textPrimaryColor">
          {" "}
          Recent Products (
          {product.ProductList.data.pagination.totalRecords || 0})
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
        {product.ProductList.data.products.map((product) => (
          <div key={product.id}>
            <SingleProduct
              image={product.thumbnail[2]}
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
