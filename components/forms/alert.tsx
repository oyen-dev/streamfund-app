"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ethers } from "ethers";
import TokenDialog from "../tokens/dialog";
import { Button } from "../ui/button";
import { cn, roundToTwoDigits, simplifyNumber } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { CaretRight, X } from "@phosphor-icons/react/dist/ssr";
import WalletMethod from "../rainbow/wallet-method";
import QuickAmountSelection from "../tokens/quick-amount";
import toast from "react-hot-toast";
import DialogAlertSupport from "../dialog/alert-support";

const formSchema = z.object({
  address: z.string().refine((value) => ethers.isAddress(value), {
    message: "Invalid EVM address",
  }),
  amount: z.string().refine((value) => {
    const sanitizedValue = value.replace(",", ".");
    const num = parseFloat(sanitizedValue);
    return !isNaN(num) && num > 0;
  }),
  quickAmount: z.number().optional(),
  token: z.string().refine((value) => ethers.isAddress(value), {
    message: "Invalid EVM address",
  }),
  message: z.string().min(1),
  from: z.string().min(1),
});

interface AlertFormProps {
  streamer: Streamer;
}

const AlertForm = ({ streamer }: AlertFormProps) => {
  const [quickAmount, setQuickAmount] = useState<number>();
  const [selectedToken, setSelectedToken] = useState<Token | undefined>();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [support, setSupport] = useState<SupportState>({
    to: "",
    amount: 0,
    token: selectedToken,
    message: "",
    from: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      address: streamer.address,
      quickAmount: 0,
      token: selectedToken?.address || "",
      message: "",
      from: "",
    },
  });

  const handleQuickAmountChange = (amount: number) => {
    if (selectedToken === undefined) {
      toast.custom((t) => (
        <div
          className={cn(
            "flex flex-row items-center justify-start space-x-2 bg-neutral-900 text-neutral-20 p-2.5 rounded-lg border border-neutral-800",
            t.visible ? "animate-enter" : "animate-leave"
          )}
        >
          <X
            className="text-red-500 cursor-pointer w-5 h-5"
            onClick={() => toast.dismiss(t.id)}
          />
          <p className="text-neutral-20 text-label">
            Please select a token first.
          </p>
        </div>
      ));
      return;
    }

    if (quickAmount === amount) {
      setQuickAmount(undefined);
      form.setValue("quickAmount", undefined);
      form.setValue("amount", "");
    } else {
      setQuickAmount(amount);
      form.setValue("quickAmount", amount);

      const rawAmountValue = amount / selectedToken.price;

      // Dynamically determine display decimals based on token decimals
      const simplifiedAmountValue = simplifyNumber(
        rawAmountValue,
        selectedToken.decimal
      );

      form.setValue("amount", simplifiedAmountValue, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const handleSelectToken = (token: Token | undefined) => {
    setQuickAmount(undefined);
    form.setValue("quickAmount", undefined);
    form.setValue("amount", "");
    if (token !== undefined) {
      setSelectedToken(token);
      form.setValue("token", token.address, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!selectedToken) {
      toast.custom((t) => (
        <div
          className={cn(
            "flex flex-row items-center justify-start space-x-2 bg-neutral-900 text-neutral-20 p-2.5 rounded-lg border border-neutral-800",
            t.visible ? "animate-enter" : "animate-leave"
          )}
        >
          <X
            className="text-red-500 cursor-pointer w-5 h-5"
            onClick={() => toast.dismiss(t.id)}
          />
          <p className="text-neutral-20 text-label">
            Please select a token first.
          </p>
        </div>
      ));
      return;
    }
    setSupport({
      to: data.address,
      amount: Number(data.amount),
      token: selectedToken,
      message: data.message,
      from: data.from,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-label text-neutral-20">
                Amount
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="mt-1 relative" lang="fr-fr">
                  <Input
                    type="number"
                    id="amount"
                    autoComplete="off"
                    inputMode="decimal"
                    step="any"
                    placeholder="0"
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === ",") {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      const value = e.target.value.replace(",", ".");
                      field.onChange(value);
                    }}
                    className="border border-neutral-800 bg-neutral-900 selection:bg-violet-500 selection:text-neutral-800 text-neutral-20 not-focus:text-neutral-20 rounded-lg py-10 font-inter text-input-amount focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <TokenDialog
                    handleSelectToken={handleSelectToken}
                    selectedToken={selectedToken}
                  />
                </div>
              </FormControl>
              {field.value && Number(field.value) !== 0 && selectedToken && (
                <div className="flex relative flex-row items-center justify-between w-full h-full">
                  <p className="text-neutral-80 font-inter text-overline">
                    Equivalent to{" "}
                    {new Intl.NumberFormat("en-US", {
                      currency: "USD",
                      style: "currency",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      roundToTwoDigits(
                        Number(field.value) * selectedToken.price
                      )
                    )}
                  </p>
                  <p className="text-neutral-80 font-inter text-overline">
                    1 {selectedToken.symbol} ={" "}
                    {new Intl.NumberFormat("en-US", {
                      currency: "USD",
                      style: "currency",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 10,
                    }).format(selectedToken.price)}
                  </p>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quickAmount"
          render={() => (
            <FormItem>
              <FormLabel className="text-label text-neutral-20 pt-2">
                Quick Amount
              </FormLabel>
              <QuickAmountSelection
                quickAmount={quickAmount}
                handleQuickAmountChange={handleQuickAmountChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-label text-neutral-20">
                From
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Satoshi Nakamoto"
                  readOnly={isAnonymous}
                  {...field}
                  className="border border-neutral-800 bg-neutral-900 text-neutral-20 rounded-lg py-6 font-inter text-body-sm not-focus:text-neutral-20 focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent"
                />
              </FormControl>

              <div className="flex flex-row items-center justify-start space-x-2 mt-2">
                <Checkbox
                  id="alert-from-me"
                  className={cn(
                    "h-5 w-5 bg-neutral-900 text-violet-500 focus:ring-violet-500 focus:ring-offset-0 cursor-pointer border-2 data-[state=checked]:border-violet-500 data-[state=unchecked]:border-neutral-800"
                  )}
                  checked={isAnonymous}
                  onCheckedChange={(checked) => {
                    setIsAnonymous(checked === true);
                    field.onChange(checked ? "anonymous" : "");
                  }}
                />
                <label
                  htmlFor="alert-from-me"
                  className="text-label text-neutral-80"
                >
                  Anonymous
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-label text-neutral-20">
                Message
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Yooo, let's get this party started!"
                  autoComplete="off"
                  {...field}
                  rows={5}
                  className="border border-neutral-800 bg-neutral-900 text-neutral-20 rounded-lg py-6 font-inter text-body-sm not-focus:text-neutral-20 focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-label text-neutral-20">Or pay with</p>
            <Button variant="link" type="button" className="">
              <p className="text-neutral-20 text-label font-semibold">
                Other options
              </p>
            </Button>
          </div>

          <div className="flex flex-col w-full h-full items-center justify-start space-y-2">
            <WalletMethod />

            <Button
              className="w-full flex flex-row items-center justify-between rounded-lg p-7 cursor-pointer bg-neutral-800 text-neutral-20 hover:bg-neutral-700 focus:ring-1 focus:ring-violet-500 focus:ring-offset-0"
              type="button"
              disabled
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/icons/lifi-method.svg"
                    alt="LiFi"
                    fill
                    sizes="100%"
                    className="object-contain"
                  />
                </div>
                <p className="text-neutral-20 text-label font-semibold flex flex-row items-center justify-center space-x-2">
                  LiFi
                </p>
                <span className="text-label text-neutral-80">
                  (Coming Soon)
                </span>
              </div>
              <CaretRight className="w-8 h-8" />
            </Button>

            <Button
              className="w-full flex flex-row items-center justify-between rounded-lg p-7 cursor-pointer bg-neutral-800 text-neutral-20 hover:bg-neutral-700 focus:ring-1 focus:ring-violet-500 focus:ring-offset-0"
              type="button"
              disabled
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/icons/binance-method.svg"
                    alt="Binance Pay"
                    fill
                    sizes="100%"
                    className="object-contain"
                  />
                </div>
                <p className="text-neutral-20 text-label font-semibold flex flex-row items-center justify-center space-x-2">
                  Binance Pay
                </p>
                <span className="text-label text-neutral-80">
                  (Coming Soon)
                </span>
              </div>
              <CaretRight className="w-8 h-8" />
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <p className="w-full text-caption text-neutral-80 text-justify">
            By using our services, you agree to our{" "}
            <Link href="/terms" className="text-violet-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-violet-500">
              Privacy Policy
            </Link>
            . Please double-check and ensure that you are sending the correct
            amount and coin/token to the streamer.
          </p>
          <DialogAlertSupport
            disabled={!form.formState.isValid}
            support={support}
          />
        </div>
      </form>
    </Form>
  );
};

export default AlertForm;
