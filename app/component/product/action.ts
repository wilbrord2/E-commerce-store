'use server'
import { ProductListType } from "@/app/types/productTypes";
import { notification } from "antd";
import { cookies } from "next/headers";

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
        
    const accessToken = cookies().get("accessToken")?.value;
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