import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header } from "../../widgets";
import creditCards from "../../assets/credit-cards.svg";
import { Button, Input } from "../../components";
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
        <div className="container px-6 py-12 mx-auto flex-grow">
          <div className=" flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h1 className="font-bold text-4xl lg:text-6xl text-[#467BA5]">
                Donacije
              </h1>
              <p className="mt-4 lg:mt-8 max-w-xl">
                Vaše donacije imaju direktan uticaj u dalji razvoj i unapređenje
                servera. One nam omogućuju da nastavimo da ulažemo trud i vreme
                kako bi podizali Utopia Roleplay server na nove nivoe,a zauzvrat
                Vi dobijate novac u posebnoj valuti kojom kupujete premium
                stvari na serveru. Donacije su dobrodošle ali ne i obavezne.
              </p>
            </div>
            <div className="hidden lg:block max-w-md">
              <Image src={creditCards} />
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:justify-between items-center xl:px-64">
            <form>
              <Input label="Ime i prezime" />
              <Input label="E-mail" />
              <Input label="Država" />
              <Input label="Adresa" />
              <Input label="Server ID" />
            </form>
            <div className="flex flex-row justify-center gap-4 max-w-xs flex-wrap">
              <button className="flex flex-col items-center justify-center text-2xl p-12 bg-[#467BA5] text-white font-semibold rounded-full w-5 h-5 hover:bg-[#3d74a1]">
                5
              </button>
              <button className="flex flex-col items-center justify-center text-2xl p-12 bg-[#467BA5] text-white font-semibold rounded-full w-5 h-5 hover:bg-[#3d74a1]">
                10
              </button>
              <button className="flex flex-col items-center justify-center text-2xl p-12 bg-[#467BA5] text-white font-semibold rounded-full w-5 h-5 hover:bg-[#3d74a1]">
                25
              </button>
              <button className="flex flex-col items-center justify-center text-2xl p-12 bg-[#467BA5] text-white font-semibold rounded-full w-5 h-5 hover:bg-[#3d74a1]">
                50
              </button>
              <button className="flex flex-col items-center justify-center text-2xl p-12 bg-[#467BA5] text-white font-semibold rounded-full w-5 h-5 hover:bg-[#3d74a1]">
                100
              </button>
            </div>
          </div>

          {/* <h1>TODO: Paypal checkout</h1> */}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Donacije;
