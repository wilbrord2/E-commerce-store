"use client";
import { CheckOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import Link from "next/link";
import React from "react";

interface ForgetFormValues {
  email: string;
}
const ForgetPassword = () => {
  const onFinish = (values: ForgetFormValues) => {
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Submission Failed",
      description: "Please check your email.",
      placement: "topRight",
    });
  };
  return (
    <section className="bg-bgDefaultColor w-full py-8 h-screen flex items-center justify-center">
      <div className="bg-white w-2/3 lg:w-1/3 flex flex-col gap-4 rounded-2xl justify-center p-8">
        <h1 className="text-textPrimaryColor font-extrabold text-2xl">
          Forget Password
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

          <div className="mt-6 flex justify-between flex-wrap space-y-4 items-center">
            <Link href={"/"}>
              <span className="underline text-textTitlesColor font-bold cursor-pointer hover:opacity-60">
                Login Instead
              </span>
            </Link>
            <Form.Item>
              <Button
                href="/dashboard"
                htmlType="submit"
                className="bg-textDefaultGreen hover:bg-textDefaultGreen hover:text-black rounded-md text-black white p-5 font-extrabold text-sm"
              >
                Submit
                <CheckOutlined />
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ForgetPassword;
