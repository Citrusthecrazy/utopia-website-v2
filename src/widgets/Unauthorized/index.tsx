import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../components";
import unauthorized from "../../assets/unauthorized.svg";
const index = () => {
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col justify-center gap-8 px-4">
      <Image src={unauthorized} alt="Unauthorized" width={400} height={400} />
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="font-bold text-3xl text-center">
          Nemate pristup ili niste prijavljeni
        </h1>
        <Link href="/" passHref>
          <Button>Nazad na početnu</Button>
        </Link>
      </div>
    </div>
  );
};

export default index;
