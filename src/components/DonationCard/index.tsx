import { Payment, User } from "@prisma/client";
import React, { FC } from "react";
import Image from "next/image";

const DonationCard: FC<
  Payment & {
    user: User;
  }
> = (donation) => {
  return (
    <div className="bg-white rounded-md p-4 md:w-2/4 shadow-md grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 items-center hover:shadow-lg hover:cursor-pointer transition-all duration-150">
      <div className="grid place-items-center md:block">
        <Image
          src={donation.user.image || ""}
          alt={donation.user.name + "'s image"}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="mr-4">
        <h2 className="text-xl font-semibold text-left  text-ellipsis whitespace-nowrap overflow-hidden ">
          {donation.user.name}#{donation.user.discriminator}
        </h2>
        <p className="text-gray-600 text-ellipsis whitespace-nowrap overflow-hidden">
          {donation.user.email}
        </p>
      </div>
      <div>
        <h2 className="text-md">Datum</h2>
        <p className="text-gray-600">
          {donation.date.toLocaleDateString("sr-RS")}
        </p>
      </div>
      <div>
        <h2 className="text-md">Iznos</h2>
        <p className="text-gray-600">
          <span className="font-semibold">{donation.amount}</span> EUR
        </p>
      </div>
      {donation.status === "PAID" ? (
        <div className="p-2 bg-green-500 bg-opacity-60 text-white font-bold rounded-md text-center">
          Plaćeno
        </div>
      ) : (
        <div className="p-2 bg-red-500 bg-opacity-60 text-white font-bold rounded-md text-center">
          Nije plaćeno
        </div>
      )}
    </div>
  );
};

export default DonationCard;
