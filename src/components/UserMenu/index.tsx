import React, { Fragment } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const UserMenu = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const user = trpc.useQuery(["user.getUser"]);
  return (
    <Menu as="div" className="md:inline-block relative">
      <Menu.Button className="mt-2">
        <Image
          src={session?.user?.image || ""}
          width={48}
          height={48}
          className="rounded-full hover:cursor-pointer"
          alt="user image"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute left-0 md:right-0 mt-2 w-56 origin-top-left md:origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {user.data?.role === "admin" && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-[#467BA5] text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/admin")}>
                    Admin Panel
                  </button>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-[#467BA5] text-white"
                  } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => router.push("/problemi")}>
                  Prijavi problem
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-red-500 text-white"
                  } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => signOut()}>
                  Odjava
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
