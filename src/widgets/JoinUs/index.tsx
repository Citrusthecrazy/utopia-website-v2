import React from "react";
import { JoinStep } from "../../components";

const JoinUs = () => {
  return (
    <article className="mt-36 flex flex-col items-center justify-center">
      <h2 className="font-bold text-4xl">Kako da nam se pridružiš</h2>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <JoinStep
          step={1}
          title="Instaliran GTAV"
          description="Neophodno je da imaš instaliranu originalnu kopiju Grand Theft Auto V igre na bilo kojoj platformi, Steam kao i FiveM"
        />
        <JoinStep
          step={2}
          title="Pokrenut Steam"
          description="Da bi igrao ne serveru neophodno je da imaš Steam otvoren u pozadini"
        />
        <JoinStep
          step={3}
          title="Otvori FiveM"
          description="Otvori FiveM i pritisni veliko dugme Play"
        />
        <JoinStep
          step={4}
          title="Pronađi server"
          description="U polje za pretraživanje ukucaj “Utopia Roleplay” (bez navodnika)"
        />
        <JoinStep
          step={5}
          title="Poveži se"
          description="Nakon što pronadješ naš server (onaj koji ima naš logo), pritisni dugme connect"
        />

        <JoinStep
          step={6}
          title="Novi početak"
          description="To je to, nakon toga sledi registracija na samom serveru i tvoj novi početak"
        />
      </div>
    </article>
  );
};

export default JoinUs;
