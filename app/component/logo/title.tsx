import React from "react";
const Title = ({size}:{size?: string}) => {
  return (
    <div>
      <h1
        className={`${
          size === "small" ? "text-base" : "text-2xl"
        } font-extrabold text-textPrimaryColor`}
      >
        Mark 8
      </h1>
      <span
        className={`${
          size === "small" ? "text-xs" : "text-sm"
        } text-textSubTitlesColor`}
      >
        By Awesomity Lab
      </span>
    </div>
  );
};

export default Title;
