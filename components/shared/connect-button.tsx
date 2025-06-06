"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";

const ConnectButton = () => {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  if (isConnected) {
    return <RainbowConnectButton />;
  }

  return (
    <Button
      className="button-cta"
      onClick={openConnectModal}
      disabled={!openConnectModal}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
