"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ConnectButton from "@/components/shared/connect-button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible at top of page regardless of scroll direction
      if (currentScrollPos <= 10) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      // Determine if we should show or hide navbar
      const isScrollingDown = prevScrollPos < currentScrollPos;
      setVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={cn(
        "fixed w-full h-[100px] items-center justify-between p-5 bg-background-base border-b-4 border-neutral-800 transition-transform transform-gpu z-50 duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex h-full items-center justify-between container mx-auto">
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

        <ul className="hidden lg:flex flex-row space-x-5">
          <li>
            <Link
              href="/#products"
              className="text-label font-inter font-medium text-neutral-20 hover:text-violet-500"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/#solutions"
              className="text-label font-inter font-medium text-neutral-20 hover:text-violet-500"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="/#contacts"
              className="text-label font-inter font-medium text-neutral-20 hover:text-violet-500"
            >
              Contacts
            </Link>
          </li>
        </ul>

        <ConnectButton />
      </div>
    </nav>
  );
};

export default Header;
