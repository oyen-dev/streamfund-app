import Image from "next/image";
import Link from "next/link";
import React from "react";
import ConnectButton from "@/components/shared/connect-button";

const Header = () => {
  return (
    <div className="flex w-full h-[100px] items-center justify-between p-5 bg-background-base border-b-4  border-neutral-800">
      <Link href="/" className="flex flex-row space-x-1 items-center">
        <Image
          src="/icons/streamfund.svg"
          alt="StreamFund"
          width={50}
          height={50}
        />
        <p className="text-heading-3 font-space font-bold">
          <span className="text-violet-500">Stream</span>
          <span className="text-neutral-20">Fund</span>
        </p>
      </Link>

      <nav className="hidden lg:flex flex-row space-x-5">
        <Link
          href="#products"
          className="text-label font-inter font-medium text-neutral-20 hover:text-violet-500"
        >
          Products
        </Link>
        <Link
          href="#solutions"
          className="text-label font-inter font-medium text-neutral-20 hover:text-violet-500"
        >
          Solutions
        </Link>
        <Link
          href="#contacts"
          className="text-label font-inter font-medium text-neutral-20 hover:text-violet-500"
        >
          Contacts
        </Link>
      </nav>

      <div className="flex items-center justify-center space-x-2">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
