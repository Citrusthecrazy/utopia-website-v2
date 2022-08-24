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
      className={`flex flex-col items-center justify-center text-2xl p-12  text-white font-semibold rounded-full w-5 h-5 hover:bg-[#3d74a1] ${
        currentAmount === coinsAmount ? "bg-[#6587a2]" : "bg-[#467BA5]"
      }`}>
      {coinsAmount}
    </button>
  );
};

export default CoinButton;
