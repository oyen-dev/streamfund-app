"use client";

import { cn } from "@/lib/utils";
import { QUICK_AMOUNTS } from "@/constants/common";
import { Button } from "@/components/ui/button";

interface QuickAmountSelectionProps {
  quickAmount: number | undefined;
  handleQuickAmountChange: (amount: number) => void;
}

const QuickAmountSelection = ({
  handleQuickAmountChange,
  quickAmount,
}: QuickAmountSelectionProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full h-full bg-transparent">
      {QUICK_AMOUNTS.map((amount, index) => (
        <Button
          key={index}
          variant="secondary"
          size="sm"
          type="button"
          className={cn(
            "rounded-lg p-5 border border-neutral-800 text-neutral-20 cursor-pointer hover:bg-violet-500/10",
            quickAmount === amount
              ? "border-violet-500 bg-violet-500/10"
              : "bg-transparent"
          )}
          onClick={() => {
            handleQuickAmountChange(amount);
          }}
        >
          <p className="text-neutral-20 text-body">
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            }).format(Number(amount))}
          </p>
        </Button>
      ))}
    </div>
  );
};

export default QuickAmountSelection;
