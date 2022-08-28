import React, { useState, FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { showAlert } from "../../utils/alert";
import { trpc } from "../../utils/trpc";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  content: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [captchaToken, setCaptchaToken] = useState("");
  const onVerifyCaptcha = (token: string) => {
    setCaptchaToken(token);
  };
  const { mutate: sendMessageMutation } = trpc.useMutation(
    ["contact.sendMessage"],
    {
      onSuccess: () => {
        showAlert("Poruka uspešno poslata");
        reset();
      },
      onError: (error) => {
        showAlert(error.message, "error");
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendMessageMutation({
      name: data.name,
      email: data.email,
      message: data.content,
      captchaToken: captchaToken,
    });
  };
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <h2 className="font-bold text-4xl">Kontaktiraj nas</h2>
      <form
        className="lg:w-1/2 md:w-2/3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm ">Ime</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("name")}
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm ">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("email")}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label className="leading-7 text-sm ">Poruka</label>
              <textarea
                id="message"
                {...register("content")}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
        </div>
        <HCaptcha
          sitekey="b708aea8-0817-4093-b736-331cbfa5d44e"
          onVerify={onVerifyCaptcha}
        />
        <div className="p-2 w-full">
          <button
            type="submit"
            className="flex mx-auto text-white bg-[#467BA5] border-0 py-2 px-8 focus:outline-none hover:bg-[#3d74a1] rounded text-lg">
            Pošalji
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
