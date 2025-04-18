import {
  HandHeart,
  Handshake,
  Signature,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface DialogStepsProps {
  symbol: string;
  variant: StepType;
  progress: ProgressState;
}

const DialogSteps = ({ symbol, variant, progress }: DialogStepsProps) => {
  return (
    <div className="flex flex-col space-y-2 items-start justify-start">
      <div
        className={cn(
          "flex flex-row space-x-4 items-center justify-start w-full h-fit",
          progress.approve !== "waiting" && "pl-1",
          variant === "support" && "hidden"
        )}
      >
        <div className="relative flex w-fit h-fit">
          <div
            className={cn(
              "absolute inset-0 p-2 bg-neutral-800 rounded-full animate-ping",
              progress.approve === "not-started" && "hidden",
              progress.approve === "done" && "hidden"
            )}
          />
          <div className="flex w-fit h-fit p-2 bg-neutral-800 rounded-full">
            <Handshake
              className={cn(
                "text-neutral-20",
                progress.approve === "waiting" ? "w-8 h-8" : "w-5 h-5"
              )}
              weight="fill"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p
            className={cn(
              "font-inter text-body-sm font-semibold",
              progress.approve === "waiting"
                ? "text-violet-500"
                : "text-neutral-20"
            )}
          >
            Approve in wallet
          </p>
          <p className="text-neutral-20 font-inter text-overline font-light">
            Allow StreamFund to use your {symbol} token for this transaction.
          </p>
        </div>
      </div>

      <div
        className={cn("flex h-[20px] pl-5", variant === "support" && "hidden")}
      >
        <Separator
          className="w-2 h-[5px] bg-neutral-800 border-2 border-neutral-800"
          orientation="vertical"
        />
      </div>

      <div
        className={cn(
          "flex flex-row space-x-4 items-center justify-start w-full h-fit",
          progress.sign !== "waiting" && "pl-1"
        )}
      >
        <div className="relative flex w-fit h-fit">
          <div
            className={cn(
              "absolute inset-0 p-2 bg-neutral-800 rounded-full animate-ping",
              progress.sign === "not-started" && "hidden",
              progress.sign === "done" && "hidden"
            )}
          />
          <div className="flex w-fit h-fit p-2 bg-neutral-800 rounded-full">
            <Signature
              className={cn(
                "text-neutral-20",
                progress.sign === "waiting" ? "w-8 h-8" : "w-5 h-5"
              )}
              weight="fill"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p
            className={cn(
              "font-inter text-body-sm font-semibold",
              progress.sign === "waiting"
                ? "text-violet-500"
                : "text-neutral-20"
            )}
          >
            Sign message
          </p>
          <p className="text-neutral-20 font-inter text-overline font-light">
            Sign the message to prove you are the owner of this wallet.
          </p>
        </div>
      </div>

      <div className="flex h-[20px] pl-5">
        <Separator
          className="w-2 h-[5px] bg-neutral-800 border-2 border-neutral-800"
          orientation="vertical"
        />
      </div>

      <div
        className={cn(
          "flex flex-row space-x-4 items-center justify-start w-full h-fit",
          progress.confirm !== "waiting" && "pl-1"
        )}
      >
        <div className="relative flex w-fit h-fit">
          <div
            className={cn(
              "absolute inset-0 p-2 bg-neutral-800 rounded-full animate-ping",
              progress.confirm === "not-started" && "hidden",
              progress.confirm === "done" && "hidden"
            )}
          />
          <div className="flex w-fit h-fit p-2 bg-neutral-800 rounded-full">
            <HandHeart
              className={cn(
                "text-neutral-20",
                progress.confirm === "waiting" ? "w-8 h-8" : "w-5 h-5"
              )}
              weight="fill"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p
            className={cn(
              "font-inter text-body-sm font-semibold",
              progress.confirm === "waiting"
                ? "text-violet-500"
                : "text-neutral-20"
            )}
          >
            Confirm support
          </p>
          <p className="text-neutral-20 font-inter text-overline font-light">
            Confirm the transaction in your wallet to support this creator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DialogSteps;
