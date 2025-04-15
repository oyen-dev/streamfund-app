"use client";

import React, { useState } from "react";
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
import {
  cn,
  roundToTwoDigits,
  truncateUsernameOrWalletAddress,
} from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import DialogSteps from "./steps";

interface DialogAlertSupportProps {
  disabled: boolean;
  support: SupportState;
}

const DialogAlertSupport = ({ disabled, support }: DialogAlertSupportProps) => {
  // const [isTriggered, setIsTriggered] = useState(false);
  const pathname = usePathname();
  const { address } = useAccount();
  const [triggered, setTriggered] = useState(true);
  const [progress, setProgress] = useState<ProgressState>({
    approve: "done",
    sign: "waiting",
    confirm: "not-started",
  });
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
        {support?.token && support?.amount && (
          <div className="w-full flex flex-col space-y-3 py-4 px-5">
            <div className="flex flex-row items-center justify-between">
              <p className="text-neutral-20 font-inter text-body-sm font-semibold">
                To:
              </p>
              <p className="text-neutral-20 font-inter text-body-sm font-semibold">
                {truncateUsernameOrWalletAddress(pathname.split("/")[2])}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-neutral-20 font-inter text-body-sm font-semibold">
                From:
              </p>
              <p className="text-neutral-20 font-inter text-body-sm font-semibold">
                {support.from}
              </p>
            </div>
            <div className="flex flex-row items-start justify-between">
              <p className="text-neutral-20 font-inter text-body-sm font-semibold">
                Message:
              </p>
              <p className="text-neutral-20 font-inter text-overline font-light text-right pl-10">
                {support.message}
              </p>
            </div>

            <Separator
              className={cn(
                "w-full h-[1px] bg-neutral-800",
                triggered === true && "hidden"
              )}
            />

            <div className="flex flex-row w-full h-full items-center justify-between">
              <div className="flex w-fit h-fit">
                <div className="relative w-14 h-14 bg-neutral-800 rounded-full p-2">
                  <Image
                    src={support.token.image}
                    alt={support.token.name}
                    fill
                    sizes="100%"
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="relative w-7 h-7 -bottom-7 -left-7 bg-background-base rounded-full">
                  <Image
                    src={support.token.chain.image}
                    alt={support.token.chain.name}
                    fill
                    sizes="100%"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end justify-center space-y-1 text-neutral-20">
                <p className="text-body font-semibold text-neutral-20">
                  {new Intl.NumberFormat("en-US", {
                    currency: "USD",
                    style: "currency",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(
                    roundToTwoDigits(
                      parseFloat(support.amount.toString()) *
                        (support.token.price ?? 0)
                    )
                  )}
                </p>
                <p className="text-underline font-light text-neutral-20">
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: support.token.decimal,
                  }).format(Number(support.amount))}{" "}
                  {support.token.symbol}
                </p>
              </div>
            </div>

            <Separator
              className={cn(
                "w-full my-5 h-[1px] bg-neutral-800",
                triggered === false && "hidden"
              )}
            />

            {triggered && (
              <DialogSteps
                symbol={support.token.symbol}
                variant="approve"
                progress={progress}
              />
            )}
          </div>
        )}
        <DialogFooter className="flex flex-row items-center justify-between w-full h-fit">
          <Button
            type="submit"
            disabled={
              isAllowanceLoading || allowance === undefined || triggered
            }
            className={cn(
              "w-full font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[0%] rounded-lg p-7 cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0",
              triggered && "hidden"
            )}
          >
            {isAllowanceLoading ? (
              <Spinner className="w-5 h-5 animate-spin text-neutral-20" />
            ) : allowance !== undefined &&
              support?.token &&
              allowance <
                BigInt(
                  Number(support.amount) * Number(10 ** support.token.decimal)
                ) ? (
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
