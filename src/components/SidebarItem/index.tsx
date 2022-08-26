import React, { FC, ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

const SidebarItem: FC<SidebarItemProps> = ({ label, icon, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group hover:cursor-pointer">
      <>
        {React.createElement("svg", { className: "w-5 h-5 opacity-75" }, icon)}

        <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
          {label}
        </span>
      </>
    </li>
  );
};

export default SidebarItem;
