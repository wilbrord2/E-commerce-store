import React from "react";
import Logo from "../../component/logo";
import Title from "../../component/logo/title";
import { ArrowRightOutlined } from "@ant-design/icons";
import ButtonComponent from "@/app/component/Button";
import SignInForm from "./form";

const Signin = () => {
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
            <SignInForm />
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
