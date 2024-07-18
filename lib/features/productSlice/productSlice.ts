import { getAllProducts } from "@/API/products/productApi";
import { ProductListType, ProductReqType } from "@/app/types/productTypes";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
import { AxiosError } from "axios";

interface State {
  dataFetching: boolean;
  fetchingError: CustomError;
  ProductList: ProductListType;
}
type CustomError = Record<"statusCode" | "message", number | string>;

const initialState: State = {
  dataFetching: false,
  fetchingError: { message: "", statusCode: 0 },
  ProductList: {
    status: 0,
    message: "",
    data: {
      products: [],
      pagination: {
        totalPages: 0,
        recordsPerPage: 0,
        totalRecords: 0,
        currentPage: 0,
      },
    },
  },
};

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (
    {
      pageNumber,
      recordsPerPage,
      name,
      description,
      FromDate,
      ToDate,
      createdBy,
      categoryId,
      code,
      minUnitPrice,
      maxUnitPrice,
      sortBy,
      sortOrder,
    }: ProductReqType,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await getAllProducts(
        pageNumber,
        recordsPerPage,
        name,
        description,
        FromDate,
        ToDate,
        createdBy,
        categoryId,
        code,
        minUnitPrice,
        maxUnitPrice,
        sortBy,
        sortOrder
      );

      return data;
    } catch (error) {
      if (error instanceof AxiosError)
        return rejectWithValue(error.response?.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.dataFetching = true;
        state.fetchingError = { message: "", statusCode: 0 };
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.dataFetching = false;
        state.ProductList = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.dataFetching = false;
        state.fetchingError = action.payload as CustomError;
        notification.error({
          message: "Logout",
          description: "login again Token expired",
          placement: "topRight",
        });
      });
  },
});

export default productSlice.reducer;
