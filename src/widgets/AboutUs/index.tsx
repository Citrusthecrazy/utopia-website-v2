import Image from "next/image";
import React from "react";
import lester from "../../assets/lester.jpg";
const AboutUs = () => {
  return (
    <article className="mt-36 grid grid-cols-1 gap-8 xl:gap-44 xl:grid-cols-2">
      <div className="">
        <Image src={lester} className="rounded-[10px] object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h2 className="font-bold text-4xl">O nama</h2>
        <p>
          Utopia Roleplay server je napravljen i održava se od strane iskusnih
          roleplay igrača sa višegodišnjim iskustvom. Iako takav, na prvom mestu
          su uvek igrači koji ovaj server i čine. Utopia nije samo server,
          Utopia je zajednica koja neprestano raste i iz dana u dan se
          poboljšava.
        </p>
      </div>
    </article>
  );
};

export default AboutUs;
