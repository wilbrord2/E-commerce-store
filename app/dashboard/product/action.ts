import { SingleProductType } from "@/app/types/productTypes";
import { cookies } from "next/headers";

export const getProduct = async (id:string): Promise<SingleProductType> => {
    const accessToken = cookies().get("accessToken")?.value;
    const api = `https://api.mark8.awesomity.rw/products/${id}`;
    
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const stores = response.json();
    return stores;
  };