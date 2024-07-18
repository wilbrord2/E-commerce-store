"use client";
import React from "react";
import Logo from "../../component/logo";
import Title from "../../component/logo/title";
import {
  ArrowRightOutlined,
  LockOutlined,
  LoginOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import ButtonComponent from "@/app/component/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {SigninUser } from "@/lib/features/authSlice/authSlice";
import Link from "next/link";

interface SigninFormData {
  email: string;
  password: string;
}

const Signin = () => {
  const dispatch = useAppDispatch()
  const loginInfo= useAppSelector(state=> state.auth)

  const onFinish = (values: SigninFormData) => {
    dispatch(SigninUser(values))
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Submission Failed",
      description: "Please check the form errors and try again !!",
      placement: "topRight",
    });
  };

  return (
    <section className="bg-bgDefaultColor w-full py-8 min-h-[calc(100vh)] flex items-center justify-center">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-2xl bg-white flex flex-row">
          <div className="max-sm:hidden w-1/2 rounded-s-2xl bg-[#F4F5F6] flex flex-col justify-between p-8">
            <Logo />
            <Title />
            <span className="text-textSubTitlesColor text-xs">
              © 2024 Awesomity Lab
            </span>
          </div>
          <div className="max-sm:w-full w-1/2 p-8 flex flex-col">
            <h1 className="text-textPrimaryColor font-extrabold text-2xl mb-5">
              Login
            </h1>
            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  type="email"
                  allowClear
                  placeholder="Enter email"
                  prefix={
                    <MailOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
                  }
                  className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-3"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
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
                    <LockOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
                  }
                  className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-3"
                />
              </Form.Item>
              <div className="mt-6 flex justify-between flex-wrap space-y-4 items-center">
                <Link href={"/forget-password"}>
                  <span className="underline text-textTitlesColor font-bold cursor-pointer hover:opacity-60">
                    Forget Password ?
                  </span>
                </Link>
                <Form.Item>
                  <Button
                  loading={loginInfo.signinLoading}
                    htmlType="submit"
                    className="bg-textDefaultGreen hover:bg-textDefaultGreen hover:text-black rounded-md text-black white p-5 font-extrabold text-sm"
                  >
                    Login
                    <LoginOutlined />
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 p-8 bg-white rounded-2xl flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-textTitlesColor font-bold text-sm">
              New Here?
            </span>
            <span className="text-textSubTitlesColor text-xs">
              Create an account
            </span>
          </div>
          <ButtonComponent
            title="Register here"
            color=""
            link="/signup"
            icon={
              <ArrowRightOutlined className="text-textDefaultGreen font-bold" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Signin;
