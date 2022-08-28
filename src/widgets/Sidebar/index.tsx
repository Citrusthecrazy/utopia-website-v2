import React, { Fragment } from "react";
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
import { Menu, Transition } from "@headlessui/react";

const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="fixed top-4 left-4 rounded-full md:rounded-none md:static flex flex-col justify-center md:justify-between items-center w-12 md:w-16 h-12 md:h-full bg-white border-r z-50 shadow-xl md:shadow-none">
      {/* Mobile menu toggle */}

      <Menu as="div" className="md:hidden">
        <Menu.Button as="div" className="w-6 h-6 ">
          <svg viewBox="0 0 24 24" className="fill-current">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute left-0 mt-4 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-[#467BA5] text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/")}>
                    Početna
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-[#467BA5] text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/admin")}>
                    Problemi
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-[#467BA5] text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/admin/donacije")}>
                    Donacije
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-[#467BA5] text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/admin/poruke")}>
                    Poruke
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Desktop menu */}
      <div className="hidden md:block">
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
              <SidebarItem
                label="Problemi"
                icon={<WrenchIcon />}
                onClick={() => router.push("/admin")}
              />
              <SidebarItem
                label="Donacije"
                icon={<CreditCardIcon />}
                onClick={() => router.push("/admin/donacije")}
              />
              <SidebarItem
                label="Poruke"
                icon={<EnvelopeIcon />}
                onClick={() => router.push("/admin/poruke")}
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
