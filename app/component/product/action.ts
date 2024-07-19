'use server'
import { ProductListType } from "@/app/types/productTypes";
import { StoresType } from "@/app/types/storeTypes";
import { cookies } from "next/headers";

const accessToken = cookies().get("accessToken")?.value;
export const getAllProducts=async(pageNumber:number,
    recordsPerPage:number,
    name?: string, 
    description?:string,
    FromDate?:string,
    ToDate?:string,
    createdBy?:string,
    categoryId?:string,
    code?:string,
    minUnitPrice?:number,
    maxUnitPrice?:number,
    sortBy?:string,
    sortOrder?:string): Promise<ProductListType> => {
        
    const api = `https://api.mark8.awesomity.rw/products?${name ? `name=${name}` : ""}&${description ? `description=${description}` : ""}&${FromDate?`createdFromDate=${FromDate}`:""}&${ToDate?`createdToDate=${ToDate}`:""}&${createdBy? `createdBy=${createdBy}`:""}&${categoryId?`categoryId=${categoryId}`:""}&${code?`code=${code}`:""}&pageNumber=${pageNumber}&recordsPerPage${recordsPerPage}&${minUnitPrice? `minUnitPrice=${minUnitPrice}`:""}&${maxUnitPrice? `maxUnitPrice=${maxUnitPrice}`:""}&${sortBy?`sortBy=${sortBy}`:""}&${sortOrder?`sortOrder=${sortOrder}`:""}`;
  
     const response = await fetch(api, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${accessToken}`,
       },
     });
     const product = response.json();
     return product;
   
}
export const getAllStores = async (
  pageNumber?: number,
  recordsPerPage?: number,
  name?: string,
  address?: string,
  description?: string,
  createdFromDate?: string,
  createdToDate?: string,
  numberOfProducts?: number,
  sortBy?: string,
  sortOrder?: string
): Promise<StoresType> => {
  const api = `https://api.mark8.awesomity.rw/store?${name ? `name=${name}` : ""}&${description ? `description=${description}` : ""}&${address ? `address=${address}` : ""}&${createdFromDate ? `createdFromDate=${createdFromDate}` : ""}&${createdToDate ? `createdToDate=${createdToDate}` : ""}&${pageNumber? `pageNumber=${pageNumber}`:""}&${recordsPerPage?`recordsPerPage=${recordsPerPage}`:""}&${numberOfProducts ? `numberOfProducts=${numberOfProducts}` : ""}&${sortBy ? `sortBy=${sortBy}` : ""}&${sortOrder ? `sortOrder=${sortOrder}` : ""}`;
  
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