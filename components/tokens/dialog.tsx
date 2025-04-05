"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CaretDown,
  X,
  MagnifyingGlass,
  Coins,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import TokenList from "./token-list";
import ChainList from "./chain-list";

const TokenDialog = () => {
  const [selectedChain, setSelectedChain] = useState<Chain | undefined>();
  return (
    <div className="absolute inset-y-0 right-4 flex items-center">
      <Dialog>
        <DialogTrigger className="flex flex-row space-x-2 items-center justify-center py-2 px-4 border border-neutral-800 bg-background-base text-neutral-20 rounded-lg cursor-pointer">
          <div className="relative w-4 h-4">
            <Image
              src="/icons/streamfund.svg"
              alt="Streamfund"
              fill
              className="object-contain"
            />
          </div>
          ETH
          <CaretDown className="w-4 h-4 ml-2" />
        </DialogTrigger>
        <DialogContent className="bg-background-base border border-neutral-800 rounded-2xl px-0 py-5 h-full max-h-[80vh] flex flex-col overflow-hidden [&>button:last-child]:hidden">
          <DialogHeader className="flex flex-col w-full items-center justify-start space-y-3">
            <div className="flex flex-row w-full h-full items-center justify-between px-5">
              <DialogTitle className="text-heading-6 font-semibold text-neutral-20 font-inter">
                Select a token to support
              </DialogTitle>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="p-0 w-8 h-8 rounded-full cursor-pointer hover:bg-neutral-800"
                >
                  <X className="w-4 h-4 text-neutral-20" />
                </Button>
              </DialogClose>
            </div>

            <div className="flex relative w-full h-full px-5">
              <Input
                type="text"
                inputMode="text"
                placeholder="Search for a token"
                className="border border-neutral-800 bg-neutral-900 text-neutral-20 rounded-lg py-8 font-inter text-body pr-[20%] focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                StartIcon={MagnifyingGlass}
                startClassName="w-8 h-8"
              />
              <ChainList
                selectedChain={selectedChain}
                setSelectedChain={setSelectedChain}
              />
            </div>
          </DialogHeader>

          <div className="flex relative flex-col w-full h-full  space-y-2 py-3">
            <div className="flex flex-row space-x-2 items-center justify-start px-5">
              <Coins className="w-5 h-5 text-neutral-80" />
              <p className="text-neutral-80 font-inter text-body-sm">
                Available tokens
              </p>
            </div>

            <div className="flex flex-col w-full h-full max-h-[60vh] flex-grow space-y-2 overflow-y-auto pb-10">
              {Array.from({ length: 20 }, (_, i) => (
                <TokenList
                  key={i}
                  tokenName={`Ethereum ${i + 1}`}
                  tokenSymbol="ETH"
                  tokenPrice="1000"
                  tokenAmount="0.0032"
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TokenDialog;
