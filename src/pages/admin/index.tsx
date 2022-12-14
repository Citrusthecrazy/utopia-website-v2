import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { trpc } from "../../utils/trpc";
import { IssueCard, Loading, Unauthorized } from "../../widgets";
import Sidebar from "../../widgets/Sidebar";

const Admin = () => {
  const { data: session, status } = useSession();
  const user = trpc.useQuery(["user.getUser"]);
  const { data: issues, isLoading } = trpc.useQuery(["issue.getIssues"]);
  if (status === "loading") {
    return <Loading />;
  }
  if (!session || user.data?.role !== "admin") {
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
          <div className="mt-16 px-4 gap-4 grid grid-cols-1 lg:grid-cols-4">
            {isLoading && <div>Ucitavanje...</div>}
            {issues &&
              !isLoading &&
              issues.map((issue) => (
                <IssueCard
                  key={issue.id}
                  id={issue.id}
                  title={issue.title}
                  description={issue.description}
                  author={issue.user}
                  date={issue.createdAt}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
