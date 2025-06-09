import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import ConnectButton from "@/components/shared/connect-button";
import FeaturesCard from "./_components/features-card";
import { FEATURES, QUESTIONS } from "@/constants/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = async () => {
  const session = await getServerSession(authConfig);
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-full bg-background-base text-neutral-20">
      <section className="flex flex-col space-y-5 w-full h-screen pt-[150px] items-center justify-start bg-background-base bg-[url('/images/violet-spotlight.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-fit h-fit rounded-full relative p-1 bg-gradient-to-r from-violet-500 via-violet-800 to-violet-500">
          <div className="py-3 px-5 bg-violet-800 rounded-full">
            <p className="text-caption text-neutral-20">
              The future of support for content creators is here
            </p>
          </div>
        </div>

        <h1 className="text-heading-1 font-space font-bold bg-gradient-to-b gradient-text-white-violet">
          Stream, Engage, and Earn
        </h1>

        <h4 className="text-heading-4 font-space text-neutral-20 text-center max-w-sm md:max-w-xl lg:max-w-6xl">
          Your viewers aren&apos;t just fans - they&apos;re your ride-or-dies!{" "}
          <span className="font-bold text-violet-500">Stream</span>
          <span className="font-bold text-neutral-20">Fund</span> lets them
          slide you funds and hype you up in real-time, with instant cashouts
          and zero confusion. No cap!
        </h4>

        <div className="flex relative w-full h-48 md:h-72 max-w-sm md:max-w-2xl lg:max-w-6xl">
          <Image
            src="/images/prototype.png"
            alt="StreamFund App"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>

        <ConnectButton label="Connect Wallet to Get Started" className="p-7" />
      </section>

      <section className="container mx-auto flex flex-col space-y-5 py-10 items-center justify-start w-full h-full">
        <h2 className="text-heading-2 font-space font-bold bg-gradient-to-b gradient-text-white-violet">
          Features That Actually Slap
        </h2>
        <h6 className="text-heading-6 font-space text-neutral-20 text-center max-w-sm md:max-w-2xl lg:max-w-6xl">
          Get your bag secured with instant payouts and direct P2P crypto
          support - zero middlemen, zero wait time. Accept any coin that&apos;s
          bussin&apos;, connect to all your fave platforms, and keep the vibes
          lit with real-time messages from your community.
        </h6>

        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-20 md:gap-10 md:p-10 lg:gap-20 lg:p-20">
          {FEATURES.map((item, idx) => (
            <FeaturesCard
              key={idx}
              title={item.title}
              description={item.description}
              imageUrl={item.image}
              imageAlt={item.title}
            />
          ))}
        </div>
      </section>

      <section className="flex w-full h-full bg-gradient-to-r from-[#21142A] to-[#6A4086]">
        <div className="flex flex-col items-center justify-start space-y-5 py-20 w-full h-full bg-[url('/images/savana.png')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-heading-1 text-center font-space font-bold bg-gradient-to-b gradient-text-white-violet">
            Join the Web3 Streaming Revolution
          </h1>

          <ConnectButton
            label="Connect Wallet to Get Started"
            className="p-7"
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col space-y-5 py-10 items-center justify-start w-full h-full">
        <h2 className="text-heading-2 text-center font-space font-bold bg-gradient-to-b gradient-text-white-violet">
          Got Questions?
        </h2>

        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="w-full max-w-sm md:max-w-xl lg:max-w-6xl"
        >
          {QUESTIONS.map((question, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>
                <p className="text-heading-5 font-space font-medium text-neutral-20">
                  {question.title}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-body-sm font-inter text-neutral-20">
                  {question.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default Home;
