import ContactUs from "@/app/component/contactUs/contactUs";
import HeroSection from "@/app/component/hero/hero";
import RecentProduct from "../component/product/recentProduct";


export default function Dashboard() {
  
  return (
    <main className="flex flex-col gap-4 pt-4 sm:gap-8 sm:px-12 sm:pt-8">
      <HeroSection background={"dark"} />
      <RecentProduct/>
      <ContactUs />
    </main>
  );
}
