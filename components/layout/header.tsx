import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-full items-center justify-between p-5 bg-background-base border-b border-2 border-neutral-800">
      <Link href="/" className="flex flex-row space-x-1 items-center">
        <Image
          src="/icons/streamfund.svg"
          alt="StreamFund"
          width={24}
          height={24}
        />
        <p className="text-xlarge-medium text-violet-200">StreamFund</p>
      </Link>

      <ConnectButton />
    </div>
  );
};

export default Header;
