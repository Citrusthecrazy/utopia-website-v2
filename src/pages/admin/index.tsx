import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { trpc } from "../../utils/trpc";
import { Footer, Header } from "../../widgets";

const Admin = () => {
  const { data: session } = useSession();
  const user = trpc.useQuery(["user.getUser"]);
  if (!session || user.data?.role !== "admin") {
    return <div>Nemate pravo pristupa</div>;
  }
  return (
    <>
      <Head>
        <title>Utopia Roleplay - Donacije</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="relative w-screen h-screen overflow-x-hidden flex flex-col">
        <Header />
        <Toaster position="bottom-center" />
        <div className="container px-6 py-12 mx-auto flex-grow"></div>
        <Footer />
      </main>
    </>
  );
};

export default Admin;
