"use client";

import React, { useEffect, useState } from "react";
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
import { useAccount, useReadContract, useSwitchChain } from "wagmi";
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
import toast from "react-hot-toast";
import useWaitForTxAction from "@/hooks/useWaitForTxAction";
import { giveAllowance } from "@/web3/erc20";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { supportWithNative, supportWithToken } from "@/web3/streamfund";

interface DialogAlertSupportProps {
  disabled: boolean;
  support: SupportState;
  hanldeResetForm: () => void;
}

const DialogAlertSupport = ({
  disabled,
  support,
  hanldeResetForm,
}: DialogAlertSupportProps) => {
  const pathname = usePathname();
  const { address, chainId } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [supportState, setSupportState] = useState<"approve" | "confirm">(
    "approve"
  );
  const [isApproving, setIsApproving] = useState(true);
  const [txHash, setTxHash] = useState<Address | undefined>();
  const [progress, setProgress] = useState<ProgressState>({
    approve: "waiting",
    confirm: "not-started",
  });

  const handlePostAction = async () => {
    if (!address) return;
    if (!chainId) return;
    if (support.token === undefined) return;

    if (isApproving && supportState === "approve") {
      toast.success("Allowance has been granted, now supporting");
      setProgress((prev) => ({ ...prev, approve: "done", confirm: "waiting" }));
      setSupportState("confirm");
      setIsApproving(false);
      setTxHash(undefined);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      await handleSupport();
    } else {
      toast.success("Your support has been sent successfully");
      hanldeResetForm();
      setProgress((prev) => ({ ...prev, confirm: "done" }));
      setIsOpen(false);
      resetState();
      setTxHash(undefined);
      setTriggered(false);
      setSupportState("approve");
      setIsApproving(true);
      setProgress({
        approve: "not-started",
        confirm: "not-started",
      });
    }
  };

  useWaitForTxAction({
    action: handlePostAction,
    txHash,
    chainId: support.token?.chain.chain_id,
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
        isOpen &&
        !!address &&
        support.token?.address !== NATIVE_TOKEN_ADDRESS &&
        support.to !== undefined &&
        getStreamFundAddresses(support.token?.chain.chain_id ?? 0) !== "0x",
    },
  });

  const resetState = () => {
    setTriggered(false);
    setProgress({
      approve: "not-started",
      confirm: "not-started",
    });
  };

  const handleApprove = async () => {
    if (!address) return;
    if (!chainId) return;
    if (support.token === undefined) return;

    try {
      if (chainId !== support.token.chain.chain_id) {
        const result = await switchChainAsync({
          chainId: support.token.chain.chain_id,
        });
        if (result === undefined) return;
      }

      setProgress((prev) => ({ ...prev, approve: "waiting" }));
      const result = await giveAllowance(
        address,
        support.token.address as Address,
        support.token.chain.chain_id
      );
      if (result === false) return;
      setTxHash(result);
      toast.custom((t) => (
        <div
          className={cn(
            "flex flex-row items-center justify-start space-x-2 bg-neutral-900 text-neutral-20 p-2.5 rounded-lg border border-neutral-800",
            t.visible ? "animate-enter" : "animate-leave"
          )}
        >
          <CircleNotch
            className="text-violet-500 animate-spin w-5 h-5"
            onClick={() => toast.dismiss(t.id)}
          />
          <p className="text-neutral-20 text-label">
            Transaction submitted, waiting for confirmation...
          </p>
        </div>
      ));
    } catch (error) {
      console.error("Error approving transaction:", error);
      toast.error("Error approving transaction");
    }
  };

  const handleSupport = async () => {
    if (!address) return;
    if (!chainId) return;
    if (support.token === undefined) return;

    try {
      if (chainId !== support.token.chain.chain_id) {
        const result = await switchChainAsync({
          chainId: support.token.chain.chain_id,
        });
        if (result === undefined) return;
      }

      let result: Address;
      setSupportState("confirm");
      setProgress((prev) => ({
        ...prev,
        approve: "done",
        confirm: "waiting",
      }));

      if (support.token.address === NATIVE_TOKEN_ADDRESS) {
        result = await supportWithNative(
          Number(support.amount) * Number(10 ** support.token.decimal),
          support.to as Address,
          `${support.from},${support.message}`,
          support.token.chain.chain_id
        );
      } else {
        result = await supportWithToken(
          Number(support.amount) * Number(10 ** support.token.decimal),
          support.to as Address,
          support.token.address as Address,
          `${support.from},${support.message}`,
          support.token.chain.chain_id
        );
      }

      setTxHash(result);
      toast.custom((t) => (
        <div
          className={cn(
            "flex flex-row items-center justify-start space-x-2 bg-neutral-900 text-neutral-20 p-2.5 rounded-lg border border-neutral-800",
            t.visible ? "animate-enter" : "animate-leave"
          )}
        >
          <CircleNotch
            className="text-violet-500 animate-spin w-5 h-5"
            onClick={() => toast.dismiss(t.id)}
          />
          <p className="text-neutral-20 text-label">
            Transaction submitted, waiting for confirmation...
          </p>
        </div>
      ));
    } catch (error) {
      console.error("Error supporting transaction:", error);
      toast.error("Error supporting transaction");
    }
  };

  const handleExecute = async () => {
    if (!address) return;
    if (!chainId) return;
    if (support.token === undefined) return;
    setTriggered(true);

    try {
      if (
        allowance !== undefined &&
        allowance <
          BigInt(Number(support.amount) * Number(10 ** support.token.decimal))
      ) {
        await handleApprove();
        return;
      } else {
        await handleSupport();
      }
    } catch (error) {
      console.error("Error supporting transaction:", error);
      toast.error("Error supporting transaction");
    }
  };

  useEffect(() => {
    if (
      allowance !== undefined &&
      support?.token &&
      allowance >=
        BigInt(Number(support.amount) * Number(10 ** support.token.decimal))
    ) {
      setProgress((prev) => ({ ...prev, approve: "done" }));
      setIsApproving(false);
    } else {
      setProgress((prev) => ({ ...prev, approve: "not-started" }));
      setIsApproving(true);
    }
  }, [allowance, support]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen((prev) => !prev);
        if (triggered) {
          resetState();
        }
      }}
    >
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
      <DialogContent
        onInteractOutside={(e) => {
          if (triggered) {
            e.preventDefault();
          }
        }}
        className="sm:max-w-lg bg-background-base border border-neutral-800 rounded-2xl"
      >
        <DialogHeader className="flex flex-row items-center justify-between w-full h-fit">
          <DialogTitle className="text-neutral-20">
            You&apos;re supporting
          </DialogTitle>
          <DialogClose>
            <X className="size-8 text-neutral-20 cursor-pointer hover:bg-neutral-800 rounded-full p-1" />
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
                variant={
                  allowance !== undefined &&
                  allowance <
                    BigInt(
                      Number(support.amount) *
                        Number(10 ** support.token.decimal)
                    )
                    ? "approve"
                    : "support"
                }
                progress={progress}
              />
            )}
          </div>
        )}
        <DialogFooter className="flex flex-row items-center justify-between w-full h-fit">
          <Button
            type="button"
            onClick={() => handleExecute()}
            disabled={
              support.token?.address === NATIVE_TOKEN_ADDRESS
                ? false
                : isAllowanceLoading || allowance === undefined || triggered
            }
            className={cn(
              "w-full font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-[0%] rounded-lg p-7 cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0",
              triggered && "hidden"
            )}
          >
            {isAllowanceLoading ? (
              <Spinner className="size-8 animate-spin text-neutral-800" />
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
