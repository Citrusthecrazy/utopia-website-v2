import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import DonationCard from "../../../components/DonationCard";
import { trpc } from "../../../utils/trpc";
import { Loading, Unauthorized } from "../../../widgets";
import Sidebar from "../../../widgets/Sidebar";

const Donacije = () => {
  const { data: session, status } = useSession();
  const user = trpc.useQuery(["user.getUser"]);
  const { data: donations, isLoading } = trpc.useQuery(["donations.getAll"]);
  if (status === "loading") {
    return <Loading />;
  }
  if (!session?.user || user.data?.role !== "admin") {
    return <Unauthorized />;
  }

  return (
    <>
      <Head>
        <title>Utopia Roleplay - Donacije</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-screen h-screen overflow-x-hidden flex flex-col">
        <Toaster position="bottom-center" />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <div className="mt-16 px-4 flex flex-col items-center jusitfy-center gap-4 flex-grow">
            {isLoading && <div>Ucitavanje...</div>}
            {donations &&
              !isLoading &&
              donations.map((donation) => (
                <DonationCard key={donation.id} {...donation} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Donacije;
