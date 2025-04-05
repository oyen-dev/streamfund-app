import React from "react";
import Image from "next/image";

interface TokenListProps {
  token: Token;
  selectedToken: Token | undefined;
  setSelectedToken: (token: Token | undefined) => void;
  setOpen: (open: boolean) => void;
}

const TokenList = ({
  token,
  selectedToken,
  setSelectedToken,
  setOpen,
}: TokenListProps) => {
  const handleTokenSelect = () => {
    if (selectedToken?.id === token.id) {
      setSelectedToken(undefined);
      return;
    } else {
      setSelectedToken(token);
    }
    setOpen(false);
  };
  return (
    <div
      className="group flex flex-row space-x-2 items-center justify-between px-5 py-2.5 hover:bg-neutral-800 cursor-pointer"
      onClick={handleTokenSelect}
    >
      <div className="flex relative flex-row space-x-2 items-center justify-start">
        <div className="flex w-full h-full">
          <div className="relative w-10 h-10 bg-neutral-800 rounded-full p-2">
            <Image
              src={token.image}
              alt={token.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-5 h-5 -bottom-5 -left-5 bg-background-base rounded-full">
            <Image
              src={token.chain.image}
              alt={token.chain.name}
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col w-full whitespace-nowrap items-start justify-start space-y-0">
          <p className="text-neutral-20 group-hover:text-violet-500 font-inter text-body-sm font-semibold">
            {token.name}
          </p>
          <p className="text-neutral-80 font-inter text-body-sm">
            {token.symbol}
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col items-end justify-end space-y-0">
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
      </div> */}
    </div>
  );
};

export default TokenList;
