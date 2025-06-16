"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import Token from "./token";
import ChainList from "./chain-list";
import { useDebounceCallback } from "usehooks-ts";
import { useQuery } from "@tanstack/react-query";
import { fetchProxy } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

interface TokenDialogProps {
  selectedToken: Token | undefined;
  handleSelectToken: (token: Token | undefined) => void;
}

const TokenDialog = ({
  selectedToken,
  handleSelectToken,
}: TokenDialogProps) => {
  const [selectedChain, setSelectedChain] = useState<Chain | undefined>();
  const [queryToken, setQueryToken] = useState<string>("");
  const [open, setOpen] = useState(false);

  const debouncedQueryToken = useDebounceCallback(setQueryToken, 500);

  const { data: tokenData, isLoading: isTokenLoading } =
    useQuery<APITokenQueryResponse>({
      queryKey: [
        "tokens",
        queryToken,
        selectedChain ? selectedChain.id : "all",
      ],
      queryFn: async () => {
        let url = `/api/v1/tokens?limit=100&page=1&q=${queryToken}`;
        if (selectedChain) {
          url += `&chain_id=${selectedChain.id}`;
        }
        const response = await fetchProxy({
          method: "GET",
          url,
        });
        return response;
      },
      refetchInterval: 60 * 1000, // 1 minute
    });

  return (
    <div className="absolute inset-y-0 right-4 flex items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogDescription className="hidden">
          Select a token to support
        </DialogDescription>
        <DialogTrigger className="flex flex-row space-x-1 items-center justify-center py-2 px-4 border border-neutral-800 bg-transparent text-neutral-20 rounded-lg cursor-pointer">
          {selectedToken ? (
            <div className="flex flex-row space-x-2 items-center justify-start">
              <div className="flex w-full h-full">
                <div className="relative w-10 h-10 bg-neutral-800 rounded-full p-2">
                  <Image
                    src={selectedToken.image}
                    alt={selectedToken.name}
                    fill
                    sizes="100%"
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="relative w-5 h-5 -bottom-5 -left-5 bg-background-base rounded-full">
                  <Image
                    src={selectedToken.chain.image}
                    alt={selectedToken.chain.name}
                    fill
                    sizes="100%"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <p className="text-neutral-20 font-inter text-body-sm font-semibold whitespace-nowrap">
                {selectedToken.symbol}
              </p>
            </div>
          ) : (
            <p className="text-neutral-20 font-inter text-body-sm">
              Select a token
            </p>
          )}
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
                onChange={(e) => {
                  debouncedQueryToken(e.target.value);
                }}
                className="border border-neutral-800 bg-neutral-900 text-neutral-20 selection:bg-violet-500 selection:text-neutral-800 not-focus:text-neutral-20 rounded-lg py-8 font-inter text-body pr-[20%] focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
              {isTokenLoading ? (
                <div className="flex flex-row space-x-2 items-center px-5 py-2.5 hover">
                  <div className="flex">
                    <Skeleton className="w-10 h-10 rounded-full bg-neutral-800" />
                  </div>
                  <Skeleton className="w-full h-10 rounded-lg bg-neutral-800" />
                </div>
              ) : (
                tokenData?.data?.tokens.map((token) => (
                  <Token
                    key={token.id}
                    token={token}
                    handleSelectToken={handleSelectToken}
                    selectedToken={selectedToken}
                    setOpen={setOpen}
                  />
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TokenDialog;
