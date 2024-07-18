import consumeAPI from "../consumeAPI"

export const getAllProducts = (
    pageNumber:number,
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
    sortOrder?:string,
    ) => {
  const api = `/products?${name ? `name=${name}` : ""}&${description ? `description=${description}` : ""}&${FromDate?`createdFromDate=${FromDate}`:""}&${ToDate?`createdToDate=${ToDate}`:""}&${createdBy? `createdBy=${createdBy}`:""}&${categoryId?`categoryId=${categoryId}`:""}&${code?`code=${code}`:""}&pageNumber=${pageNumber}&recordsPerPage${recordsPerPage}&${minUnitPrice? `minUnitPrice=${minUnitPrice}`:""}&${maxUnitPrice? `maxUnitPrice=${maxUnitPrice}`:""}&${sortBy?`sortBy=${sortBy}`:""}&${sortOrder?`sortOrder=${sortOrder}`:""}`;
  return consumeAPI().get(api);
};