"use client";

import React from "react";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import { cn, truncateWalletAddress } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const WalletMethod = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const session = useSession();

  return (
    <Button
      className={cn(
        "w-full flex flex-row items-center justify-between rounded-lg p-7 cursor-pointer bg-neutral-800 text-neutral-20 hover:bg-neutral-700 focus:ring-1 focus:ring-offset-0",
        openChainModal &&
          openAccountModal === undefined &&
          "border border-red-500",
        openAccountModal && "border border-violet-500"
      )}
      type="button"
      onClick={() => {
        if (openConnectModal) {
          openConnectModal();
        } else if (openAccountModal) {
          openAccountModal();
        } else if (openChainModal) {
          openChainModal();
        }
      }}
    >
      <div className="flex flex-row items-center justify-start space-x-2">
        <div className="relative w-5 h-5">
          <Image
            src="/icons/wallet-method.svg"
            alt="Connect Wallet"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <p className="text-neutral-20 text-label font-semibold flex flex-row items-center justify-center space-x-2">
          {openConnectModal ? (
            "Connect Wallet"
          ) : openAccountModal ? (
            `${truncateWalletAddress(session?.data?.user?.address)} (Connected)`
          ) : openChainModal ? (
            <span className="text-red-500">Wrong Network</span>
          ) : (
            "Wallet"
          )}
        </p>
      </div>
      <CaretRightIcon className="w-8 h-8" />
    </Button>
  );
};

export default WalletMethod;
