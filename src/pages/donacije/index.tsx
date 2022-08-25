import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header } from "../../widgets";
import creditCards from "../../assets/credit-cards.svg";
import { CoinButton, Input } from "../../components";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { trpc } from "../../utils/trpc";
import { useRef, useState } from "react";
import { env } from "../../env/client.mjs";
import { Toaster } from "react-hot-toast";
import { showAlert } from "../../utils/alert";

const Donacije: NextPage = () => {
  const [coinsAmount, setCoinsAmount] = useState(5);
  const coinsReference = useRef<number>();
  coinsReference.current = coinsAmount;

  const createOrder = trpc.useMutation("paypal.createOrder");
  const captureOrder = trpc.useMutation("paypal.captureOrder");

  const createPayPalOrder = async (): Promise<string> => {
    if (!coinsReference.current) coinsReference.current = 5;

    const { orderId } = await createOrder.mutateAsync({
      amountOfCoins: coinsReference.current,
    });

    return orderId;
  };

  const onApprove = async (data: OnApproveData): Promise<void> => {
    captureOrder.mutate({ orderId: data.orderID });
  };
  const handleAmountChange = (amount: number) => {
    setCoinsAmount(amount);
  };
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
              <Image src={creditCards} alt="credit cards" />
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
              <CoinButton
                currentAmount={coinsReference.current}
                onClick={handleAmountChange}
                coinsAmount={5}
              />
              <CoinButton
                currentAmount={coinsReference.current}
                onClick={handleAmountChange}
                coinsAmount={10}
              />
              <CoinButton
                currentAmount={coinsReference.current}
                onClick={handleAmountChange}
                coinsAmount={25}
              />
              <CoinButton
                currentAmount={coinsReference.current}
                onClick={handleAmountChange}
                coinsAmount={50}
              />
              <CoinButton
                currentAmount={coinsReference.current}
                onClick={() => showAlert("Ovo je info", "warning")}
                coinsAmount={100}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-8">
            <div className="w-full lg:w-1/3">
              <PayPalScriptProvider
                options={{
                  "client-id": env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                  currency: "EUR",
                }}>
                <PayPalButtons
                  style={{
                    color: "blue",
                    shape: "rect",
                    label: "buynow",
                    height: 50,
                  }}
                  createOrder={createPayPalOrder}
                  onApprove={onApprove}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Donacije;

type OnApproveData = {
  billingToken?: string | null;
  facilitatorAccessToken: string;
  orderID: string;
  payerID?: string | null;
  paymentID?: string | null;
  subscriptionID?: string | null;
  authCode?: string | null;
};
