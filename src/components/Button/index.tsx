import React, { FC, HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }, { ...props }) => {
  return (
    <button
      className="flex mx-auto text-white bg-[#467BA5] border-0 py-2 px-8 focus:outline-none hover:bg-[#3d74a1] rounded"
      {...props}>
      {children}
    </button>
  );
};

export default Button;
