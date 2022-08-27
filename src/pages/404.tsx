import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components";
import pageNotFound from "../assets/page-not-found.svg";
const NotFoundPage = () => {
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col justify-center gap-8 px-4">
      <Image src={pageNotFound} alt="Page not found" width={400} height={400} />
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="font-bold text-3xl text-center">
          Došlo je do greške!
          <br /> Ova stranica ne postoji ili je izbrisana.
        </h1>
        <Link href="/" passHref>
          <Button>Nazad na početnu</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
