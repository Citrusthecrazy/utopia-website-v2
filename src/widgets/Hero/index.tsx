import Image from "next/image";
import React from "react";
import heroImage from "../../assets/hero-image.svg";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-end  ">
      <div className="flex flex-col gap-2 items-start lg:w-1/2">
        <h1 className="font-bold text-3xl lg:hidden">Utopia Roleplay</h1>
        <h1 className="font-bold text-5xl hidden lg:block">
          Najbolji FiveM roleplay server za najbolje roleplay igrače
        </h1>
        <p className="lg:mt-8 max-w-xl">
          Utopia roleplay je unikatno roleplay iskustvo kakvo ne postoji na
          balkanskoj FiveM sceni. Sa preko 15 jedinstvenih poslova, 200+ DLC
          vozila, 18.000+ DLC odeće i mnogo zabave.
        </p>
        <button className="rounded-[5px] bg-[#467BA5] px-[1.75em] py-[.5em] text-white font-semibold shadow-lg lg:text-4xl lg:mt-16 hover:bg-[#3771a1] transition-all duration-150">
          Pridruži se
        </button>
      </div>
      <div className="hidden lg:block">
        <Image src={heroImage} alt="ps5 controller" />
      </div>
    </div>
  );
};

export default Hero;
