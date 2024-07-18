export type userAccountType = {
  status: string;
  message: string;
  data: {
    id: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    isActive: true;
    createdAt: string;
    updatedAt: string;
    shippingAddress: string;
    stripeAccountId: string;
    currency: string;
  };
};
