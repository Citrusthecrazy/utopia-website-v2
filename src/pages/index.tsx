import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { AboutUs, Contact, Footer, Header, Hero, WhyUs } from "../widgets";
import JoinUs from "../widgets/JoinUs";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Utopia Roleplay</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-screen h-screen overflow-x-hidden">
        <Header />
        <div className="mt-20" /> {/* Header height */}
        <div className="container px-6 py-12 mx-auto">
          <Hero />
          <WhyUs />
          <AboutUs />
          <JoinUs />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
