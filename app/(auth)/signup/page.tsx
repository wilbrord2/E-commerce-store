"use client";
import React, { useState } from "react";
import {
  LockOutlined,
  LoginOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import ButtonComponent from "@/app/component/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { SignupUser } from "@/lib/features/authSlice/authSlice";

interface SignupFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const signupinfo = useAppSelector((state) => state.auth);

  const onFinish = (values: SignupFormValues) => {
    dispatch(SignupUser(values));
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Submission Failed",
      description: "Please check the form for errors and try again.",
      placement: "topRight",
    });
  };

  const validatePassword = (_: any, value: string) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Passwords do not match!"));
  };
  return (
    <section className="bg-bgDefaultColor w-full h-full min-h-[calc(100vh)] py-8 flex items-center justify-center">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-screen-lg rounded-2xl bg-white flex flex-row">
          <div className="w-full p-8 flex flex-col">
            <h1 className="text-textPrimaryColor font-extrabold text-2xl mb-5">
              Register
            </h1>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <div className="">
                {/* names */}
                <div className="w-full flex flex-row items-center gap-4 mb-2 max-sm:flex-wrap ">
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    className="mb-2 w-full sm:w-1/2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      allowClear
                      placeholder="Enter First Name"
                      prefix={
                        <UserOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
                      }
                      className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-2"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Second Name"
                    name="lastName"
                    className="mb-2 w-full sm:w-1/2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your second name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      allowClear
                      placeholder="Enter Second Name"
                      prefix={
                        <UserOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
                      }
                      className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-2"
                    />
                  </Form.Item>
                </div>
                {/* contacts */}
                <div className="w-full flex flex-row items-center gap-4 mb-2 max-sm:flex-wrap ">
                  <Form.Item
                    label="Email"
                    name="email"
                    className="mb-2 w-full sm:w-1/2"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input
                      type="Email"
                      allowClear
                      placeholder="Enter Email"
                      prefix={
                        <MailOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
                      }
                      className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-2"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Phone number"
                    name="phoneNumber"
                    className="mb-2 w-full sm:w-1/2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      allowClear
                      maxLength={9}
                      placeholder="--- --- ---"
                      prefix={
                        <div className="flex items-center gap-2 pr-1">
                          <PhoneOutlined className="site-form-item-icon rotate-90 text-textDefaultGreen" />
                          <span className="text-textTitlesColor font-bold text-xs">
                            250
                          </span>
                        </div>
                      }
                      className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-2"
                    />
                  </Form.Item>
                </div>
                {/* password */}
                <div className="w-full flex flex-row items-center gap-4 mb-2 max-sm:flex-wrap ">
                  <Form.Item
                    label="Password"
                    name="password"
                    className="mb-2 w-full sm:w-1/2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter password"
                      prefix={
                        <LockOutlined className="site-form-item-icon text-textDefaultGreen" />
                      }
                      className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-2"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmpassword"
                    className="mb-2 w-full sm:w-1/2"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      { validator: validatePassword },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter password"
                      prefix={
                        <LockOutlined className="site-form-item-icon text-textDefaultGreen" />
                      }
                      className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-2"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center flex-wrap gap-4 ">
                <div className="flex gap-2">
                  <Checkbox
                    onChange={() => setChecked((prev) => !prev)}
                    className={
                      checked
                        ? "ant-checkbox-checked ant-checkbox-inner"
                        : "ant-checkbox ant-checkbox-inner"
                    }
                  ></Checkbox>
                  <div>
                    <span className="text-textSubTitlesColor text-sm pr-1">
                      I agree to the
                    </span>
                    <span className="underlined text-textTitlesColor font-bold text-sm cursor-pointer">
                      Terms and conditions
                    </span>
                  </div>
                </div>
                <Form.Item>
                  <Button
                    loading={signupinfo.signupLoading}
                    htmlType="submit"
                    className="bg-textDefaultGreen hover:bg-textDefaultGreen hover:text-black rounded-md text-black white p-5 font-extrabold text-sm"
                  >
                    Register
                    <LoginOutlined />
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-screen-lg p-8 bg-white rounded-2xl flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-textTitlesColor font-bold text-sm">
              Already have an account?
            </span>
            <span className="text-textSubTitlesColor text-xs">Go to login</span>
          </div>
          <ButtonComponent
            title="Login"
            color=""
            link="/signin"
            icon={<LoginOutlined className="text-textDefaultGreen font-bold" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
