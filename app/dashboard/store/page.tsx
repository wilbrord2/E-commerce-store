import ContactUs from "@/app/component/contactUs/contactUs";
import HeroSection from "@/app/component/hero/hero";
import { getAllStores } from "@/app/component/product/action";
import Loading from "@/app/loading";
import React, { Suspense } from "react";
import StoresPage from "./storePage";
import { redirect } from "next/navigation";

const Store = async () => {
  const stores = await getAllStores({});
  if (stores.statusCode === 401) {
    redirect("/");
  }
  return (
    <main className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <HeroSection totalItems={stores.data?.pagination.totalRecords} store />
      <Suspense fallback={<Loading />}>
        <StoresPage stores={stores} />
      </Suspense>
      <ContactUs />
    </main>
  );
};

export default Store;
