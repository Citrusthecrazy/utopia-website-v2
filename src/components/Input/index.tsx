import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  text: string;
  type?: string;
  id?: string;
  className?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  label: string;
};

const Input: FC<InputProps> = ({
  text,
  type = "text",
  id,
  className,
  register,
  required = false,
  label,
}) => {
  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-sm">{text}</label>
        <input
          type={type}
          id={id || ""}
          className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
          {...register(label, { required })}
        />
      </div>
    </div>
  );
};

export default Input;
