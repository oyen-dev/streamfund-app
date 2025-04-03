import React from "react";
import Image from "next/image";

interface TokenListProps {
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: string;
  tokenAmount: string;
}

const TokenList = ({
  tokenAmount,
  tokenName,
  tokenPrice,
  tokenSymbol,
}: TokenListProps) => {
  return (
    <div className="group flex flex-row space-x-2 items-center justify-between px-5 py-2.5 hover:bg-neutral-800 cursor-pointer">
      <div className="flex flex-row space-x-2 items-center justify-start">
        <div className="flex w-full h-full">
          <div className="relative w-10 h-10">
            <Image
              src="/icons/streamfund.svg"
              alt={tokenName}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col w-full whitespace-nowrap items-start justify-start space-y-0">
          <p className="text-neutral-20 group-hover:text-violet-500 font-inter text-body-sm font-semibold">
            {tokenName}
          </p>
          <p className="text-neutral-80 font-inter text-body-sm">
            {tokenSymbol}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end space-y-0">
        <p className="text-neutral-20 group-hover:text-violet-500 font-inter text-body-sm font-semibold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(Number(tokenPrice) * Number(tokenAmount))}
        </p>
        <p className="text-neutral-80 font-inter text-body-sm">
          {new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 18,
          }).format(Number(tokenAmount))}
        </p>
      </div>
    </div>
  );
};

export default TokenList;
