import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Header } from "../../widgets";

const Donacije: NextPage = () => {
  return (
    <>
      <Head>
        <title>Utopia Roleplay - Donacije</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-screen h-screen overflow-x-hidden flex flex-col">
        <Header />
        <div className="container px-6 py-12 mx-auto flex-grow"></div>
        <Footer />
      </main>
    </>
  );
};

export default Donacije;
