import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DiscordLogo,
  TelegramLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-3 w-full h-fit bg-background-base border-t-4 border-neutral-800 p-5">
      <div className="flex flex-row items-center justify-between container mx-auto">
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

        <div className="grid grid-cols-3 gap-5">
          <Link href="https://x.com/streamfundlive" target="_blank">
            <Button
              size="icon"
              className="cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            >
              <XLogo className="size-6 text-neutral-800" />
            </Button>
          </Link>

          <Link href="#" target="_blank">
            <Button
              size="icon"
              className="cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            >
              <DiscordLogo className="size-6 text-neutral-800" />
            </Button>
          </Link>

          <Link href="#" target="_blank">
            <Button
              size="icon"
              className="cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            >
              <TelegramLogo className="size-6 text-neutral-800" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between container mx-auto">
        <div className="flex flex-row items-center justify-center">
          <ul className="flex flex-row space-x-3">
            <li>
              <Link
                href="/privacy-policy"
                className="text-overline font-inter font-medium text-neutral-20 hover:text-violet-500 whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-overline font-inter font-medium text-neutral-20 hover:text-violet-500 whitespace-nowrap"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-overline font-inter font-medium text-neutral-20 whitespace-nowrap">
          © {new Date().getFullYear()} StreamFund.
        </div>
      </div>
    </div>
  );
};

export default Footer;
