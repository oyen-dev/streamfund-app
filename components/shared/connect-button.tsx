"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConnectButtonProps {
  label?: string;
  className?: string;
}

const ConnectButton = ({ label, className }: ConnectButtonProps) => {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  if (isConnected) {
    return <RainbowConnectButton />;
  }

  return (
    <Button
      className={cn("button-cta", className)}
      onClick={openConnectModal}
      disabled={!openConnectModal}
    >
      {label || "Connect Wallet"}
    </Button>
  );
};

export default ConnectButton;
