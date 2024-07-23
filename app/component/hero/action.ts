import { categoriesType } from "@/app/types/categoriesType";
import { cookies } from "next/headers";

interface categoriesParams{
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
    
}
export const getAllCategories = async ({
    pageNumber,
    recordsPerPage,
    name,
    address,
    description,
    createdFromDate,
    createdToDate,
    numberOfProducts,
    sortBy,
    sortOrder
    }:categoriesParams): Promise<categoriesType> => {
  
    const accessToken = cookies().get("accessToken")?.value;
    const api = `https://api.mark8.awesomity.rw/categories?${name ? `name=${name}` : ""}&${description ? `description=${description}` : ""}&${address ? `address=${address}` : ""}&${createdFromDate ? `createdFromDate=${createdFromDate}` : ""}&${createdToDate ? `createdToDate=${createdToDate}` : ""}&${pageNumber? `pageNumber=${pageNumber}`:""}&${recordsPerPage?`recordsPerPage=${recordsPerPage}`:""}&${numberOfProducts ? `numberOfProducts=${numberOfProducts}` : ""}&${sortBy ? `sortBy=${sortBy}` : ""}&${sortOrder ? `sortOrder=${sortOrder}` : ""}`;
    
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