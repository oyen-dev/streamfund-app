import Image from "next/image";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const StreamerProfile = () => {
  return (
    <div className="hidden md:block">
      {/* Banner Image - Desktop Only */}
      <div className="mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/streamfund.jpg"
          width={700}
          height={300}
          alt="Banner"
          className="w-full object-cover h-[220px]"
        />
      </div>

      <Card className="mb-6 border-background-grey-2 bg-background-base">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <Avatar className="w-24 h-24 border-4 rounded-full border-violet-500">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
              />
              <AvatarFallback className="bg-gray-800">JO</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center space-y-3 md:items-start">
              <h4 className="text-xl font-bold text-neutral-20 heading-4-mobile md:heading-4-tablet lg:heading-4-desktop">
                johnlennon
              </h4>
              <p className="mt-1 mb-4 text-center text-gray-400 text-medium-medium md:text-medium-large lg:text-large-int-regular md:text-left">
                If you want a collaborator who can make even a cat video feel
                like a blockbuster, Alex is your person!
              </p>

              {/* Social Icons */}
              <div className="flex gap-6">
                <InstagramLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-neutral-20" />
                <FacebookLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-neutral-20" />
                <TwitterLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-neutral-20" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StreamerProfile;
