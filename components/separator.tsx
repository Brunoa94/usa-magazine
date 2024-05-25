import React from "react";

interface Props {
  noLine?: boolean;
}

const Separator = (props: Props) => {
  return (
    <div
      className={`w-auto px-4 my-4 h-[2px] ${
        !props.noLine ? "bg-black" : "bg-white"
      }`}
    ></div>
  );
};

export default Separator;
