import React from "react";
import car from "../../assets/car.svg";
import tshirt from "../../assets/tshirt.svg";
import briefcase from "../../assets/briefcase.svg";
import { FeatureCard } from "../../components";

const WhyUs = () => {
  return (
    <article className="mt-36">
      <h2 className="font-bold text-4xl">Zašto Utopia Roleplay</h2>
      <p className=" mt-7 text-gray-500">
        Saznajte zašto je Utopia Roleplay najbolja opcija za vas.
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <FeatureCard
          title="Poslovi"
          description="Ljubitelj si adrenalina i ekstremnih sportova, ili ipak voliš mir i tišinu? Grad Utopia ima sve, od policije do ronioca, od mafijaša do rudara."
          icon={briefcase}
        />

        <FeatureCard
          title="Vozila"
          description="Želis da budeš vidjen/a i da svi pričaju o tebi? Nema boljeg načina da to uradiš nego da nabaviš jedno od naših 200+ DLC vozila."
          icon={car}
        />

        <FeatureCard
          title="Odeća"
          description="Grad Utopia nudi izbor od preko 18.000 komada DLC odeće tako da ni jedan stanovnik ne može da liči na drugog."
          icon={tshirt}
        />
      </div>
    </article>
  );
};

export default WhyUs;
