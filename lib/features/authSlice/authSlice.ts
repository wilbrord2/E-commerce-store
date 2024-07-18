import { signin, signup } from "@/API/auth/auth";
import { userAccountType } from "@/app/types/userAccount";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

interface AuthState {
  token: string;
  signinLoading: boolean;
  signinError: CustomError;
  signupLoading: boolean;
  userAccount: userAccountType;
  signupError: CustomError;
}
type CustomError = Record<"statusCode" | "message", number | string>;

const initialState: AuthState = {
  token: "",
  signinLoading: false,
  signinError: { message: "", statusCode: 0 },
  signupLoading: false,
  signupError: { message: "", statusCode: 0 },
  userAccount: {
    status: "",
    message: "",
    data: {
      id: "",
      email: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      isActive: true,
      createdAt: "",
      updatedAt: "",
      shippingAddress: "",
      stripeAccountId: "",
      currency: "",
    },
  },
};

export const SigninUser = createAsyncThunk(
  "auth/SigninUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await signin({ email, password });
      Cookies.set("accessToken", data.data.accessToken);
      return data;
    } catch (error) {
      if (error instanceof AxiosError)
        return rejectWithValue(error.response?.data);
    }
  }
);
export const SignupUser = createAsyncThunk(
  "auth/SignupUser",
  async (
    {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await signup({
        email,
        password,
        firstName,
        lastName,
        phoneNumber: "250" + phoneNumber,
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError)
        return rejectWithValue(error.response?.data);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  Cookies.remove("token");
  return;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SigninUser.pending, (state) => {
        state.signinLoading = true;
        state.signinError = { message: "", statusCode: 0 };
      })
      .addCase(SigninUser.fulfilled, (state, action) => {
        state.signinLoading = false;
        state.token = action.payload;
        notification.success({
          message: "Login Successful",
          description: "You have successfully logged in.",
          placement: "topRight",
        });
      })
      .addCase(SigninUser.rejected, (state, action) => {
        state.signinLoading = false;
        state.signinError = action.payload as CustomError;
        notification.error({
          message: "Signin Failed",
          description:
            state.signinError.statusCode === 401 &&
            "Email or password incorrect",
          placement: "topRight",
        });
      })
      .addCase(SignupUser.pending, (state) => {
        state.signupLoading = true;
        state.signinError = { message: "", statusCode: 0 };
      })
      .addCase(SignupUser.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.userAccount = action.payload;
        notification.success({
          message: " Signup Message",
          description: "Account created Successful",
          placement: "topRight",
        });
      })
      .addCase(SignupUser.rejected, (state, action) => {
        state.signupLoading = false;
        state.signinError = action.payload as CustomError;
        notification.error({
          message: "Signin Failed",
          description: state.signinError.message,
          placement: "topRight",
        });
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = " ";
        notification.success({
          message: "Logout Successful",
          description: "You have successfully logged out.",
          placement: "topRight",
        });
      });
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
