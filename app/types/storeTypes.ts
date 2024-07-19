export type StoresType = {
  status: number;
  message: string;
  data: {
    stores: Store[];
    pagination: {
      totalPages: number;
      totalRecords: number;
      currentPage: number;
      recordsPerPage: number;
    };
  };
};

export type Store = {
  id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  createdAt: string;
  manager: {
    id: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    shippingAddress: string;
  };
};