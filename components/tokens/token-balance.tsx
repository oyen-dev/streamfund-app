"use client";

import { NATIVE_TOKEN_ADDRESS } from "@/constants/common";
import { ERC20_ABI } from "@/constants/erc20-abi";
import { simplifyNumber } from "@/lib/utils";
import React from "react";
import { Address } from "viem";
import { useAccount, useBalance, useReadContract } from "wagmi";
import { Skeleton } from "../ui/skeleton";

interface TokenBalanceProps {
  token: Token;
}

const TokenBalance = ({ token }: TokenBalanceProps) => {
  const { address } = useAccount();
  const { data: tokenBalance, isLoading: isTokenBalanceLoading } =
    useReadContract({
      address: token.address as Address,
      abi: ERC20_ABI,
      functionName: "balanceOf",
      args: [address as Address],
      chainId: token.chain.chain_id,
      query: {
        enabled: !!address && token.address !== NATIVE_TOKEN_ADDRESS,
        staleTime: 0,
        refetchInterval: 30 * 1000, // 30 seconds
      },
    });
  const { data: nativeBalance, isLoading: isNativeBalanceLoading } = useBalance(
    {
      address: address as Address,
      chainId: token.chain.chain_id,
      query: {
        enabled: !!address && token.address === NATIVE_TOKEN_ADDRESS,
        staleTime: 0,
        refetchInterval: 30 * 1000, // 30 seconds
      },
    }
  );

  return (
    <div>
      {token.address === NATIVE_TOKEN_ADDRESS ? (
        isNativeBalanceLoading ? (
          <div className="flex flex-col items-end justify-end space-y-2">
            <Skeleton className="w-24 h-6 bg-neutral-800" />
            <Skeleton className="w-16 h-6 bg-neutral-800" />
          </div>
        ) : (
          nativeBalance !== undefined &&
          nativeBalance.value !== BigInt(0) && (
            <div className="flex flex-col items-end justify-end space-y-0">
              <p className="text-neutral-20 group-hover:text-violet-500 font-inter text-body-sm font-semibold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(
                  Number(
                    simplifyNumber(
                      Number(nativeBalance.value) /
                        10 ** nativeBalance.decimals,
                      nativeBalance.decimals
                    )
                  ) * token.price
                )}
              </p>
              <p className="text-neutral-80 font-inter text-overline">
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 18,
                }).format(
                  // @ts-expect-error no types yet
                  simplifyNumber(
                    Number(nativeBalance.value) / 10 ** nativeBalance.decimals,
                    nativeBalance.decimals
                  )
                )}{" "}
                {token.symbol}
              </p>
            </div>
          )
        )
      ) : isTokenBalanceLoading ? (
        <div className="flex flex-col items-end justify-end space-y-2">
          <Skeleton className="w-24 h-6 bg-neutral-800" />
          <Skeleton className="w-16 h-6 bg-neutral-800" />
        </div>
      ) : (
        tokenBalance !== undefined &&
        tokenBalance !== BigInt(0) && (
          <div className="flex flex-col items-end justify-end space-y-0">
            <p className="text-neutral-20 group-hover:text-violet-500 font-inter text-body-sm font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(
                (Number(tokenBalance) / 10 ** token.decimal) * token.price
              )}
            </p>
            <p className="text-neutral-80 font-inter text-overline">
              {simplifyNumber(
                Number(tokenBalance) / 10 ** token.decimal,
                token.decimal
              )}{" "}
              {token.symbol}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default TokenBalance;
