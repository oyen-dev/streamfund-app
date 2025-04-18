"use client";

import { useWaitForTransactionReceipt } from "wagmi";
import { useEffect } from "react";
import { wagmiConfig } from "@/config/wagmi";

interface UseWaitForTxActionProps {
  txHash: `0x${string}` | undefined;
  action: (() => void) | (() => Promise<void>);
  chainId: number | undefined;
}

const useWaitForTxAction = ({
  action,
  txHash,
  chainId,
}: UseWaitForTxActionProps) => {
  const waitTx = useWaitForTransactionReceipt({
    hash: txHash,
    config: wagmiConfig,
    chainId: chainId as 84532 | 421614 | 11155420 | 656476 | undefined,
  });

  useEffect(() => {
    const execute = async () => {
      await action();
    };
    if (waitTx?.status === "success") {
      execute();
    }
  }, [action, waitTx]);
};

export default useWaitForTxAction;
