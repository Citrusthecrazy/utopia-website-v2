import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import MessageCard from "../../../components/MessageCard";
import { trpc } from "../../../utils/trpc";
import { Loading, Unauthorized } from "../../../widgets";
import Sidebar from "../../../widgets/Sidebar";

const Poruke = () => {
  const { data: session, status } = useSession();
  const user = trpc.useQuery(["user.getUser"]);
  const { data: messages, isLoading } = trpc.useQuery(["contact.getAll"]);
  if (status === "loading") {
    return <Loading />;
  }
  if (!session?.user || user.data?.role !== "admin") {
    return <Unauthorized />;
  }

  return (
    <>
      <Head>
        <title>Utopia Roleplay - Poruke</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-screen h-screen overflow-x-hidden flex flex-col">
        <Toaster position="bottom-center" />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <div className="mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 md:grid-rows-5 gap-4 flex-grow">
            {isLoading && <div>Ucitavanje...</div>}
            {messages &&
              !isLoading &&
              messages.map((message) => (
                <MessageCard key={message.id} {...message} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Poruke;
