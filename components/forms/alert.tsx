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
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { QUICK_AMOUNTS } from "@/constants/common";
import Link from "next/link";
import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

const formSchema = z.object({
  address: z.string().refine((value) => ethers.isAddress(value), {
    message: "Invalid EVM address",
  }),
  amount: z.string().refine((value) => {
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
  }),
  quickAmount: z.number().optional(),
  token: z.string().refine((value) => ethers.isAddress(value), {
    message: "Invalid EVM address",
  }),
  message: z.string().min(1),
  from: z.string().min(1),
});

const AlertForm = () => {
  const [quickAmount, setQuickAmount] = useState<number>();
  const [isAnonymous, setIsAnonymous] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      address: "0x8844a5958178f0788a994ed19448e76a1f493248",
      quickAmount: 0,
      token: "0x8844a5958178f0788a994ed19448e76a1f493248",
      message: "",
      from: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
                <div className="mt-1 relative">
                  <Input
                    type="number"
                    autoComplete="off"
                    inputMode="decimal"
                    placeholder="0"
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === ",") {
                        e.preventDefault();
                      }
                    }}
                    className="border border-neutral-800 bg-neutral-900 text-neutral-20 not-focus:text-neutral-20 rounded-lg py-10 font-inter text-input-amount focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  {field.value && Number(field.value) !== 0 && (
                    <p className="absolute text-neutral-80 font-inter text-overline py-2">
                      Equivalent to{" "}
                      {new Intl.NumberFormat("en-US", {
                        currency: "USD",
                        style: "currency",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }).format(Number(field.value))}
                    </p>
                  )}
                  <TokenDialog />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quickAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-label text-neutral-20 pt-7">
                Quick Amount
              </FormLabel>
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
                      if (quickAmount === amount) {
                        setQuickAmount(undefined);
                        field.onChange("");
                      } else {
                        setQuickAmount(amount);
                        field.onChange(amount);
                      }
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
            <Button
              className="w-full flex flex-row items-center justify-between rounded-lg p-7 cursor-pointer bg-neutral-800 text-neutral-20 hover:bg-neutral-700 focus:ring-1 focus:ring-violet-500 focus:ring-offset-0"
              type="button"
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/icons/streamfund.svg"
                    alt="Streamfund"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-neutral-20 text-label font-semibold flex flex-row items-center justify-center space-x-2">
                  Connect Wallet
                </p>
              </div>
              <CaretRight className="w-8 h-8" />
            </Button>

            <Button
              className="w-full flex flex-row items-center justify-between rounded-lg p-7 cursor-pointer bg-neutral-800 text-neutral-20 hover:bg-neutral-700 focus:ring-1 focus:ring-violet-500 focus:ring-offset-0"
              type="button"
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/icons/streamfund.svg"
                    alt="Streamfund"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-neutral-20 text-label font-semibold flex flex-row items-center justify-center space-x-2">
                  LiFi
                </p>
              </div>
              <CaretRight className="w-8 h-8" />
            </Button>

            <Button
              className="w-full flex flex-row items-center justify-between rounded-lg p-7 cursor-pointer bg-neutral-800 text-neutral-20 hover:bg-neutral-700 focus:ring-1 focus:ring-violet-500 focus:ring-offset-0"
              type="button"
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/icons/streamfund.svg"
                    alt="Streamfund"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-neutral-20 text-label font-semibold flex flex-row items-center justify-center space-x-2">
                  Binance Pay
                </p>
              </div>
              <CaretRight className="w-8 h-8" />
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-row w-full h-full items-center justify-between p-7 bg-neutral-900 rounded-lg border border-neutral-800">
            <p className="text-body-sm font-semibold text-neutral-20">
              Total Amount :
            </p>
            <p className="text-body-sm font-semibold text-neutral-20">
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency",
                minimumFractionDigits: 0,
                maximumFractionDigits: 3,
              }).format(Number(form.watch("amount")))}
            </p>
          </div>

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
          <Button
            variant="default"
            type="submit"
            className="w-full rounded-lg p-7 cursor-pointer bg-violet-500 text-neutral-800 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            disabled={!form.formState.isValid}
          >
            Support
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AlertForm;
