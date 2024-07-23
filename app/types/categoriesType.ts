
export type categoriesType={
    status:number,
    message:string,
    data: {
      categories:categoryType [],
      pagination: {
        totalPages: number,
        totalRecords: number,
        currentPage:number,
        recordsPerPage:number
      }
    }
  }
  export type categoryType = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    createdBy: createdByType;
    updatedBy: updatedByType;
  };
  export type updatedByType = {
    id: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    shippingAddress: string;
    stripeAccountId: string;
    currency: string;
  };
  export type createdByType = {
    id: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    shippingAddress: string;
    stripeAccountId: string;
    currency: string;
  };