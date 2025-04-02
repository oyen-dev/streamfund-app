import {
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const StreamerHeaderProfile = () => {
  return (
    <>
      <div className="relative w-24 h-24 border-4 rounded-full md:w-30 md:h-30 lg:w-36 lg:h-36 border-violet-500">
        <Image
          src="/images/streamfund.jpg"
          fill
          alt="Profile"
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
        <h6 className="font-semibold text-heading-6 text-neutral-20">
          wildanzrrr
        </h6>

        <p className="font-normal text-center text-body md:text-left text-neutral-80">
          If you want a collaborator who can make even a cat video feel like a
          blockbuster, Alex is your person!
        </p>

        <div className="grid grid-flow-col gap-2 md:gap-3 auto-cols-auto">
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <InstagramLogo className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <YoutubeLogo className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <FacebookLogo className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
          <Link
            href="/streamer/1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
          >
            <TwitterLogo className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StreamerHeaderProfile;
