import { User } from "@prisma/client";
import Image from "next/image";
import React, { FC } from "react";
import { showAlert } from "../../utils/alert";
import { trpc } from "../../utils/trpc";
import Button from "../Button";

type IssueCardProps = {
  id: string;
  title: string;
  description: string;
  author: User;
  date: Date;
};

const IssueCard: FC<IssueCardProps> = ({
  id,
  title,
  description,
  author,
  date,
}) => {
  const ctx = trpc.useContext();

  const { mutateAsync: updateIssueStatusAsync, isLoading } = trpc.useMutation(
    ["issue.updateStatus"],
    {
      onSuccess: () => {
        showAlert("Problem uspešno zatvoren!");
        ctx.invalidateQueries(["issue.getIssues"]);
      },
      onError: (error) => {
        showAlert(error.message, "error");
      },
    }
  );

  const handleCloseIssue = async () => {
    await updateIssueStatusAsync({ id: id });
  };

  return (
    <div className="relative flex flex-col p-8 overflow-hidden border border-gray-100 rounded-lg min-w-[350px] max-h-80 bg-white">
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-gray-900">{title}</h5>
          <p className="mt-1 text-xs font-medium text-gray-600">
            {author.name} #{author.discriminator}
          </p>
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <Image
            className="object-cover rounded-lg shadow-sm"
            src={(author && author.image) || ""}
            width={64}
            height={64}
            alt=""
          />
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="flex-grow" />
      <dl className="flex flex-row mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Postavljeno</dt>
          <dd className="text-xs text-gray-500">
            {date.toLocaleDateString("sr-RS")}
          </dd>
        </div>

        <div className="flex-grow" />

        <div className="flex flex-row ml-3 sm:ml-6">
          <Button
            disabled={isLoading}
            className="bg-red-700 hover:bg-red-600 transition-all duration-150 text-sm disabled:bg-gray-400"
            onClick={() => handleCloseIssue()}>
            Zatvori
          </Button>
        </div>
      </dl>
    </div>
  );
};

export default IssueCard;
