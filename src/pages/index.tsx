import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { Header } from "../widgets";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Utopia Roleplay</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-screen h-screen">
        <Header />
      </main>
    </>
  );
};

export default Home;
