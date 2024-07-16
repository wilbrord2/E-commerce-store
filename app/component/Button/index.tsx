import { Button } from "antd";
import { ReactNode } from "react";

interface Props {
  title: string;
  color: string;
  link?: string;
  icon: ReactNode;
}
const ButtonComponent = (params: Props) => {
  const { title, color, link, icon } = params;
  return (
    <Button htmlType="submit"
      href={link}
      className={`${
        color === "default"
          ? "bg-textDefaultGreen hover:bg-textDefaultGreen border-none rounded-md text-black"
          : "white"
      } p-5 font-extrabold text-sm `}
    >
      {title}
      {icon}
    </Button>
  );
};
{/* <ButtonComponent
  title="Login"
  color="default"
  link="/"
  icon={<LoginOutlined />}
/>; */}

export default ButtonComponent;
