import React from "react";
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

const formSchema = z.object({
  address: z.string().refine((value) => ethers.isAddress(value), {
    message: "Invalid EVM address",
  }),
  amount: z.string().refine((value) => {
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
  }),
  token: z.string().refine((value) => ethers.isAddress(value), {
    message: "Invalid EVM address",
  }),
  message: z.string().optional(),
  from: z.string().optional(),
});

const AlertForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      address: "",
      token: "",
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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
                    className="border border-neutral-800 bg-neutral-900 text-neutral-20 rounded-lg py-10 font-inter text-input-amount focus-visible:text-neutral-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <TokenDialog />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};

export default AlertForm;
