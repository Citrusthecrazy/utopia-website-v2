import React, { FC } from "react";

type InputProps = {
  label: string;
  type?: string;
  id?: string;
  name?: string;
  className?: string;
};

const Input: FC<InputProps> = ({
  label,
  type = "text",
  id,
  name,
  className,
}) => {
  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label className="leading-7 text-sm">{label}</label>
        <input
          type={type}
          id={id || ""}
          name={name || ""}
          className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
