import { getStreamFundAddresses } from "@/constants/common";
import { Address } from "viem";
import { writeContract } from "@wagmi/core";
import { wagmiConfig } from "@/config/wagmi";
import { STREAMFUND_ABI } from "@/constants/streamfund-abi";
import { AbiCoder } from "ethers";

export const supportWithNative = async (
  amount: number,
  streamer: Address,
  data: string,
  chainId: number
) => {
  const encodedMessage = new AbiCoder().encode(
    ["string"],
    [data]
  ) as `0x${string}`;
  try {
    const contractAddress = getStreamFundAddresses(chainId);
    const result = await writeContract(wagmiConfig, {
      abi: STREAMFUND_ABI,
      address: contractAddress,
      functionName: "supportWithETH",
      value: BigInt(amount),
      args: [streamer, encodedMessage],
      chainId: chainId as 84532 | 421614 | 11155420 | 656476 | undefined,
    });

    return result;
  } catch (error) {
    console.error("Error giving allowance:", error);
    throw error;
  }
};

export const supportWithToken = async (
  amount: number,
  streamer: Address,
  token: Address,
  data: string,
  chainId: number
) => {
  const encodedMessage = new AbiCoder().encode(
    ["string"],
    [data]
  ) as `0x${string}`;
  try {
    const contractAddress = getStreamFundAddresses(chainId);
    const result = await writeContract(wagmiConfig, {
      abi: STREAMFUND_ABI,
      address: contractAddress,
      functionName: "supportWithToken",
      args: [streamer, token, BigInt(amount), encodedMessage],
      chainId: chainId as 84532 | 421614 | 11155420 | 656476 | undefined,
    });

    return result;
  } catch (error) {
    console.error("Error giving allowance:", error);
    throw error;
  }
};
