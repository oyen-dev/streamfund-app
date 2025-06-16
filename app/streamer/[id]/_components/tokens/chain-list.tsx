"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { cn, fetchProxy } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ChainListProps {
  selectedChain: Chain | undefined;
  setSelectedChain: (chain: Chain | undefined) => void;
}

const ChainList = ({ selectedChain, setSelectedChain }: ChainListProps) => {
  const { data: chainData, isLoading: isChainLoading } =
    useQuery<APIChainQueryResponse>({
      queryKey: ["chains"],
      queryFn: async () =>
        fetchProxy({
          method: "GET",
          url: `/api/v1/chains?limit=100&page=1&q=`,
        }),
      refetchInterval: 60 * 1000, // 1 minute
    });

  const handleChainSelect = (id: string) => {
    const chain = chainData?.data?.chains.find((chain) => chain.id === id);
    setSelectedChain(chain);
  };

  return (
    <div className="absolute inset-y-0 right-8 flex items-center">
      <Select
        defaultValue={selectedChain?.id || "all"}
        onValueChange={handleChainSelect}
      >
        <SelectTrigger className="w-full h-full border-0 bg-transparent focus:ring-0 focus-visible:ring-1 focus-visible:outline-1">
          <SelectValue>
            <div className="relative w-8 h-8">
              <Image
                src={
                  selectedChain === undefined
                    ? "/icons/all-networks.png"
                    : selectedChain.image
                }
                alt={
                  selectedChain === undefined
                    ? "All Networks"
                    : selectedChain.name
                }
                fill
                sizes="100%"
                className={cn("object-contain", selectedChain && "rounded-lg")}
              />
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-background-base dark:bg-background-base border border-neutral-800 dark:border-b-neutral-800 text-neutral-800 dark:text-neutral-800 rounded-2xl p-3 w-full min-w-xs max-w-md">
          <SelectItem
            value="all"
            className="flex items-center space-x-2 focus:bg-neutral-800 cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/all-networks.png"
                alt="All Networks"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
            <p className="text-neutral-20 text-body hover:text-violet-500">
              All Networks
            </p>
          </SelectItem>

          {isChainLoading ? (
            <div className="flex flex-row space-x-2 items-center py-5">
              <div className="flex">
                <Skeleton className="w-8 h-8 rounded-full bg-neutral-800" />
              </div>
              <Skeleton className="w-full h-8 rounded-lg bg-neutral-800" />
            </div>
          ) : (
            chainData?.data?.chains.map((chain) => (
              <SelectItem
                key={chain.id}
                value={chain.id}
                className="flex items-center space-x-2 focus:bg-neutral-800 cursor-pointer"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={chain.image}
                    alt={chain.name}
                    fill
                    sizes="100%"
                    className="object-contain rounded-full"
                  />
                </div>
                <p className="text-neutral-20 text-body hover:text-violet-500">
                  {chain.name}
                </p>
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChainList;
