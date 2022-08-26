import React from "react";
import { SidebarItem } from "../../components";
import {
  HomeIcon,
  EnvelopeIcon,
  CreditCardIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-16 h-full bg-white border-r">
      <div>
        <div className="border-t border-gray-100">
          <div className="inline-flex items-center justify-center w-16 h-16 group">
            <Image
              src={(session?.user && session?.user?.image) || ""}
              width={40}
              height={40}
              className="rounded-full"
              alt=""
            />
          </div>
          <nav className="flex flex-col p-2 border-t border-gray-100">
            <ul className="space-y-1 flex flex-col">
              <SidebarItem
                label="Početna"
                icon={<HomeIcon />}
                onClick={() => router.push("/")}
              />
              <SidebarItem label="Problemi" icon={<WrenchIcon />} />
              <SidebarItem label="Donacije" icon={<CreditCardIcon />} />
              <SidebarItem label="Poruke" icon={<EnvelopeIcon />} />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
