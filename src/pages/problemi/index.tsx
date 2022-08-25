import type { NextPage } from "next";
import Head from "next/head";
import { Button, Input } from "../../components";
import { Footer, Header } from "../../widgets";
import { SubmitHandler, useForm } from "react-hook-form";
import { trpc } from "../../utils/trpc";
import { showAlert } from "../../utils/alert";
import { Toaster } from "react-hot-toast";

type Inputs = {
  title: string;
  description: string;
};

const Problemi: NextPage = () => {
  const createIssue = trpc.useMutation("issue.createIssue", {
    onError: (error) => {
      showAlert(error.message, "error");
    },
    onSuccess: () => {
      showAlert("Problem uspešno poslat! Hvala na pomoći!");
      reset();
    },
  });
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createIssue.mutate({
      issueTitle: data.title,
      issueDescription: data.description,
    });
  };

  return (
    <>
      <Head>
        <title>Utopia Roleplay - Problemi</title>
        <meta
          name="description"
          content="Prijava problema vezanih za Utopia Roleplay Fivem server"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="relative w-screen h-screen overflow-x-hidden flex flex-col">
        <Header />
        <Toaster position="bottom-center" />
        <div className="container px-6 pt-12 mx-auto flex-grow flex flex-col items-center">
          <h1 className="font-bold text-4xl lg:text-6xl text-center text-[#467BA5]">
            Problemi
          </h1>
          <p className="lg:text-xl text-justify lg:text-center max-w-2xl">
            Ukoliko ste naišli na problem ili bag vezan za server ili ovaj
            websajt pošaljite ga koristeći obrazac ispod ovog teksta. Hvala vam
            na pomoći.
          </p>
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="title"
              text="Naslov (ime skripte ili funkcije)"
              type="text"
              id="title"
              register={register}
            />
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm ">Opis</label>
                <textarea
                  id="description"
                  rows={5}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                  {...register("description", { required: true })}
                />
              </div>
            </div>
            <Button type="submit">Pošalji</Button>
          </form>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Problemi;
