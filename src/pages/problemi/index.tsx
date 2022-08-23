import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent } from "react";
import { Footer, Header } from "../../widgets";

const Problemi: NextPage = () => {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Utopia Roleplay - Problemi</title>
        <meta name="description" content="FiveM roleplay server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-screen h-screen overflow-x-hidden flex flex-col">
        <Header />
        <div className="container px-6 pt-12 mx-auto flex-grow flex flex-col items-center">
          <h1 className="font-bold text-4xl lg:text-6xl text-center text-[#467BA5]">
            Problemi
          </h1>
          <p className="lg:text-xl text-justify lg:text-center max-w-2xl">
            Ukoliko ste naišli na problem ili bag vezan za server ili ovaj
            websajt pošaljite ga koristeći obrazac ispod ovog teksta. Hvala vam
            na pomoći.
          </p>
          <form className="mt-8" onSubmit={handleFormSubmit}>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm ">
                  Naslov (ime skripte ili funkcije)
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm ">Opis</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex mx-auto text-white bg-[#467BA5] border-0 py-2 px-8 focus:outline-none hover:bg-[#3d74a1] rounded">
              Pošalji
            </button>
          </form>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Problemi;
