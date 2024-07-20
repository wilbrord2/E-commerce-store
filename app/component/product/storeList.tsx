import { SearchOutlined, ShopOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "antd";
import { redirect } from "next/navigation";
import React from "react";
import { getAllStores } from "./action";
import SingleStore from "../store/recentStore";
import Link from "next/link";

export const getServerSideProps = async () => {
  try {
    const storesData = await getAllStores();
    return {
      stores: storesData,
      error: null,
    };
  } catch (error: any) {
    throw new error();
  }
};

const StoreList = async () => {
  const { stores } = await getServerSideProps();
  if (stores.statusCode === 401) {
    redirect("/signin");
  }
  return (
    <div className="hidden lg:block w-full xl:w-3/5 h-auto border rounded-xl">
      <div className="flex items-center justify-between  p-4 ">
        <span>
          <ShopOutlined className="text-textDefaultGreen mr-3" />
          <span className="text-textColorButton font-extrabold">
            Top 10 Stores
          </span>
        </span>
        <Link href={"/dashboard/store"}>
          <Icon
            icon="ci:external-link"
            width="20"
            height="20"
            style={{ color: "#141c24" }}
          />
        </Link>
      </div>
      <div className="w-full py-4 px-3 bg-[#F7F8FB]">
        <Input
          type="text"
          size="large"
          className=" bg-opacity-5 py-3  border-0 text-textSubTitlesColor"
          placeholder="Search a Store"
          prefix={<SearchOutlined className=" pr-2" />}
          suffix={
            <Icon
              icon="hugeicons:filter-horizontal"
              width="15"
              height="15"
              className="text-textColorButton font-bold rotate-90"
            />
          }
        />
      </div>
      <div>
        <div className="flex flex-col gap-4 p-4">
          {stores.data?.stores.map((store) => (
            <div key={store.id}>
              <SingleStore
                image={store.image}
                product={127}
                name={store.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreList;
