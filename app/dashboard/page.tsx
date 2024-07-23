import { Suspense } from "react";
import ContactUs from "@/app/component/contactUs/contactUs";
import HeroSection from "@/app/component/hero/hero";
import RecentProduct from "@/app/component/product/recentProduct";
import Loading from "@/app/loading";
import { getAllProducts } from "../component/product/action";

const Dashboard=async()=> {
  const products= await getAllProducts({pageNumber:1, recordsPerPage:10})
  return (
    <main className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <HeroSection background={"dark"} store={false} totalItems={products.data?.pagination.totalRecords} />
      <Suspense fallback={(<Loading/> )}>
        <RecentProduct />
      </Suspense>
      <ContactUs />
    </main>
  );
}
export default Dashboard 
