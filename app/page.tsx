import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = async () => {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen p-5 text-neutral-20">
      <h1 className="text-4xl font-bold text-center">Welcome to StreamFund!</h1>
      <p className="mt-4 text-lg">
        Engage with your favorite creators and support them through donations.
      </p>

      <Link href={"/dashboard"}>
        <Button
          variant="default"
          type="submit"
          className="w-fit font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[0%] rounded-lg p-7 cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
        >
          Access Dashboard for Streamers
        </Button>
      </Link>
    </div>
  );
};

export default Home;
