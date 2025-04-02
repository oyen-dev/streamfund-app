import React from "react";
import Link from "next/link";
import {
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MobileStreamerProfile = () => {
  return (
    <div className="flex flex-col md:hidden">
      <div className="flex w-full h-40 bg-[url('/images/streamfund.jpg')] bg-center bg-cover" />
      <div className="relative flex flex-col items-center justify-center w-full h-full py-5 space-y-6">
        <Avatar className="absolute w-24 h-24 border-4 rounded-full -top-[25%] border-violet-500">
          <AvatarImage
            src="/placeholder.svg?height=96&width=96"
            alt="Profile"
          />
          <AvatarFallback className="bg-gray-800">JO</AvatarFallback>
        </Avatar>
        <h4 className="mt-[15%] text-neutral-20 heading-4-mobile md:heading-4-tablet lg:heading-4-desktop">
          johnlennon
        </h4>
        <p className="text-center text-neutral-90 text-medium-medium md:text-medium-large lg:text-large-int-regular">
          If you want a collaborator who can make even a cat video feel like a
          blockbuster, Alex is your person!
        </p>

        <div className="grid grid-flow-col gap-2 auto-cols-auto">
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <InstagramLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <YoutubeLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <FacebookLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <TwitterLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileStreamerProfile;
