import React, { FC, HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (
  { children, className, onClick, disabled },
  { ...props }
) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex mx-auto text-white items-center justify-center bg-[#467BA5] border-0 py-[.5em] px-[2em] focus:outline-none hover:bg-[#3d74a1] rounded ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
