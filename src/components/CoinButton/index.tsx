import React, { FC } from "react";

type CoinButtonProps = {
  currentAmount: number;
  coinsAmount: number;
  onClick: (amount: number) => void;
};

const CoinButton: FC<CoinButtonProps> = ({
  currentAmount,
  coinsAmount,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(coinsAmount)}
      className={`flex flex-col items-center justify-center text-2xl p-12  text-white font-semibold rounded-full w-5 h-5 hover:bg-[#0070BA] transition-all duration-75 ${
        currentAmount === coinsAmount
          ? "bg-[#0070BA] outline outline outline-blue-400"
          : "bg-[#467BA5]"
      }`}>
      {coinsAmount}
    </button>
  );
};

export default CoinButton;
