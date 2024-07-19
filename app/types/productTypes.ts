export type ProductReqType = {
    pageNumber: number,
    recordsPerPage: number,
    name?: string,
    description?: string,
    FromDate?: string,
    ToDate?: string,
    createdBy?: string,
    categoryId?: string,
    code?: string,
    minUnitPrice?: number,
    maxUnitPrice?: number,
    sortBy?: string,
    sortOrder?: string,
};

export type ProductListType = {
    error: string;
    status: number,
    message: string,
    data: {
        products: ProductType[],
        pagination: {
            totalPages: number,
            recordsPerPage: number,
            totalRecords: number,
            currentPage: number,
        },
    },
};
export type ProductType = {
    id: string,
    code: string,
    name: string,
    description: string,
    category: categoryType,
    unitPrice: number,
    thumbnail: string[],
    createdAt: string,
    updatedAt: string,
    createdBy: createdByType,
    store: storeType,
    updatedBy: updatedByType,
    inventories: inventoriesType[],
    reviews: reviewsType
};
export type categoryType = {
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    createdBy: createdByType,
    updatedBy: updatedByType,
    products: string[],
};
export type createdByType = {
    id: string,
    email: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    shippingAddress: string,
    stripeAccountId: string,
    currency: string,
    roles: [
        {
            id: string,
            name: string,
            users: [null],
            createdAt: string,
            updatedAt: string,
        }
    ],
    createdCategories: [null],
    updatedCategories: [null],
    createdProducts: [null],
    updatedProducts: [null],
    inventories: [null],
    orders: [null],
    payouts: [{}],
};
export type updatedByType = {
    id: string,
    email: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    shippingAddress: string,
    stripeAccountId: string,
    currency: string,
    roles: [
        {
            id: string,
            name: string,
            users: [null],
            createdAt: string,
            updatedAt: string,
        }
    ],
    createdCategories: [null],
    updatedCategories: [null],
    createdProducts: [null],
    updatedProducts: [null],
    inventories: [null],
    orders: [null],
    payouts: [{}],
};
export type storeType = {
    createdCategories: [null],
    updatedCategories: [null],
    createdProducts: [null],
};
export type inventoriesType = {
    id: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    code: string,
    owner: {
        id: string,
        email: string,
        phoneNumber: string,
        firstName: string,
        lastName: string,
        isActive: boolean,
        createdAt: string,
        updatedAt: string,
        shippingAddress: string,
        stripeAccountId: string,
        currency: string,
        roles: [
            {
                id: string,
                name: string,
                users: [null],
                createdAt: string,
                updatedAt: string,
            }
        ],
        createdCategories: [null],
        updatedCategories: [null],
        createdProducts: [null],
        updatedProducts: [null],
        inventories: [null],
        orders: [null],
        payouts: [{}],
    },
    updatedBy: updatedByType
    product: string,
    orderItems: [{}],
};
export type reviewsType={
        id: string,
        rating: number,
        comment: string,
        createdAt: string,
        updatedAt: string,
        ratedBy: {
            id: string,
            email: string,
            phoneNumber: string,
            firstName: string,
            lastName: string,
            isActive: boolean,
            createdAt: string,
            updatedAt: string,
            shippingAddress: string,
            stripeAccountId: string,
            currency: string,
            roles: [
                {
                    id: string,
                    name: string,
                    users: [null],
                    createdAt: string,
                    updatedAt: string,
                }
            ],
            createdCategories: [null],
            updatedCategories: [null],
            createdProducts: [null],
            updatedProducts: [null],
            inventories: [null],
            orders: [null],
            payouts: [{}],
        },
        updatedBy: updatedByType
        product: string,
    }

