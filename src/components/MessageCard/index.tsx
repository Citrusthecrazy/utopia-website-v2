import { Message } from "@prisma/client";
import React, { FC } from "react";
import Button from "../Button";

const MessageCard: FC<Message> = (message) => {
  return (
    <div
      key={message.id}
      className="relative bg-white p-4 rounded-md min-w-[250px] shadow-md">
      <h2 className="font-semibold text-xl">{message.author}</h2>
      <p className="text-sm text-gray-500">{message.authorEmail}</p>
      <p className="text-sm mt-4 mb-12">{message.content}</p>
      <Button className="absolute bottom-[10px] right-[10px] bg-red-700 hover:bg-red-900">
        Obrisi
      </Button>
    </div>
  );
};

export default MessageCard;
