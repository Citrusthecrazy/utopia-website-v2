import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface NavLinkProps extends LinkProps {
  text: string;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, text, className }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <span
        className={`transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-[#467BA5] select-none hover:cursor-pointer ${
          router.pathname === href && "font-bold"
        } ${className}`}>
        {text}
      </span>
    </Link>
  );
};
