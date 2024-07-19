import ContactUs from "@/app/component/contactUs/contactUs";
import HeroSection from "@/app/component/hero/hero";
import RecentProduct from "../component/product/recentProduct";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "../loading";

const Dashboard=()=> {
  
  return (
    <main className="max-w-[2500px] w-full mx-auto flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <HeroSection background={"dark"} />
      <Suspense fallback={(<Loading/> )}>
        <RecentProduct />
      </Suspense>
      <ContactUs />
    </main>
  );
}
export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
