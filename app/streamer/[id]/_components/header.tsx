import { truncateWalletAddress } from "@/lib/utils";
import {
  InstagramLogoIcon,
  YoutubeLogoIcon,
  XLogoIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { isAddress } from "viem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StreamerHeaderProfileProps {
  streamer: Streamer;
}

const StreamerHeaderProfile = ({ streamer }: StreamerHeaderProfileProps) => {
  return (
    <div className="flex flex-col items-center justify-start w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
      <div className="flex">
        <Avatar className="relative w-24 h-24 border-4 rounded-full md:w-30 md:h-30 lg:w-36 lg:h-36 border-violet-500">
          <AvatarImage
            src={
              streamer.bio.image ||
              `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${streamer.bio.username}`
            }
            sizes="100%"
            alt="Profile"
            className="object-cover rounded-full"
          />
          <AvatarFallback>{streamer.bio.username}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
        <h6 className="font-semibold text-heading-6 text-neutral-20">
          {isAddress(streamer.bio.username)
            ? truncateWalletAddress(streamer.bio.username)
            : streamer.bio.username}
        </h6>

        <p className="font-normal text-center text-body md:text-left text-neutral-80">
          {streamer.bio.bio}
        </p>

        <div className="grid grid-flow-col gap-2 md:gap-3 auto-cols-auto">
          {streamer.bio.instagram && (
            <Link
              href={streamer.bio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
            >
              <InstagramLogoIcon className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
            </Link>
          )}

          {streamer.bio.youtube && (
            <Link
              href={streamer.bio.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
            >
              <YoutubeLogoIcon className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
            </Link>
          )}

          {streamer.bio.x && (
            <Link
              href={streamer.bio.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
            >
              <XLogoIcon className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
            </Link>
          )}

          {streamer.bio.website && (
            <Link
              href={streamer.bio.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
            >
              <GlobeIcon className="w-6 h-6 cursor-pointer text-neutral-80 hover:text-violet-500" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StreamerHeaderProfile;
