import { ArrowRightOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import ButtonComponent from "../Button";

const ContactUs = () => {
  return (
    <section className="bg-[rgb(247,248,251)] rounded-md p-8 flex items-center max-md:flex-wrap gap-4 justify-between ">
      <div className="font-extrabold text-2xl">
        <span className="text-textDefaultGreen pr-2">Open</span>
        <span className="text-textTitlesColor">your Store</span>
      </div>
      <div className="flex items-center gap-2 w-full md:w-1/2 2xl:w-1/3">
        <Input
          type="email"
          allowClear
          placeholder="Enter your Email"
          prefix={
            <MailOutlined className="site-form-item-icon pl-1 pr-2 text-textDefaultGreen" />
          }
          className="bg-textPrimaryColor bg-opacity-[4%] border-none text-xs py-3"
        />
        <ButtonComponent
          title="Submit"
          color="default"
          icon={<ArrowRightOutlined />}
        />
      </div>
    </section>
  );
};

export default ContactUs;
