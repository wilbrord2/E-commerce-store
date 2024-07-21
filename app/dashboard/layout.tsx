import Footer from "@/app/component/footer/footer";
import Navbar from "@/app/component/navbar/navbar";
import MobileNavbar from "../component/navbar/mobileNavbar";
import ContextProvider from "../context/context";
import SearchBox from "../component/navbar/searchBox";
import CartList from "../component/navbar/cartList";
import CartResponse from "../component/cart/cartResponse";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <div>
        <SearchBox />
        <CartList />
        <CartResponse/>
        <Navbar />
        {children}
        <Footer />
        <MobileNavbar />
      </div>
    </ContextProvider>
  );
}
