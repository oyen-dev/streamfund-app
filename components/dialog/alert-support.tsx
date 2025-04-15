"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner, X } from "@phosphor-icons/react/dist/ssr";
import { useAccount, useReadContract } from "wagmi";
import { ERC20_ABI } from "@/constants/erc20-abi";
import { Address } from "viem";
import {
  getStreamFundAddresses,
  NATIVE_TOKEN_ADDRESS,
} from "@/constants/common";

interface DialogAlertSupportProps {
  disabled: boolean;
  support: SupportData;
}

const DialogAlertSupport = ({ disabled, support }: DialogAlertSupportProps) => {
  const { address } = useAccount();
  const { data: allowance, isLoading: isAllowanceLoading } = useReadContract({
    abi: ERC20_ABI,
    address: support.token?.address as Address,
    functionName: "allowance",
    args: [
      address as Address,
      getStreamFundAddresses(support.token?.chain.chain_id ?? 0),
    ],
    chainId: support.token?.chain.chain_id,
    query: {
      enabled:
        !!address &&
        support.token?.address !== NATIVE_TOKEN_ADDRESS &&
        support.to !== undefined &&
        getStreamFundAddresses(support.token?.chain.chain_id ?? 0) !== "0x",
      staleTime: 0,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          type="submit"
          className="w-full font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[0%] rounded-lg p-7 cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
          disabled={disabled}
        >
          Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-background-base border border-neutral-800 rounded-2xl">
        <DialogHeader className="flex flex-row items-center justify-between w-full h-fit">
          <DialogTitle className="text-neutral-20">
            You&apos;re supporting
          </DialogTitle>
          <DialogClose>
            <X className="w-8 h-8 text-neutral-20 cursor-pointer hover:bg-neutral-800 rounded-full p-1" />
          </DialogClose>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex">
            <p>
              You&apos;re about to submit a support request. Please make sure
              you have provided all the necessary information to help us assist
              you better.
            </p>
          </div>
        </div>
        <DialogFooter className="flex flex-row items-center justify-between w-full h-fit">
          <Button
            type="submit"
            disabled={isAllowanceLoading || allowance === undefined}
            className="w-full font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[0%] rounded-lg p-7 cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
          >
            {isAllowanceLoading ? (
              <Spinner className="w-5 h-5 animate-spin text-neutral-20" />
            ) : allowance !== undefined && allowance < support.amount ? (
              "Approve and Support"
            ) : (
              "Support"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAlertSupport;
