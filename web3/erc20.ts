import { getStreamFundAddresses } from "@/constants/common";
import { ERC20_ABI } from "@/constants/erc20-abi";
import { Address } from "viem";
import { writeContract } from "@wagmi/core";
import { wagmiConfig } from "@/config/wagmi";

export const giveAllowance = async (
  user: Address,
  token: Address,
  chainId: number | undefined
) => {
  const maxAmount = BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  );
  try {
    const contractAddress = getStreamFundAddresses(chainId);
    const result = await writeContract(wagmiConfig, {
      abi: ERC20_ABI,
      address: token,
      functionName: "approve",
      args: [contractAddress, maxAmount],
      account: user,
      chainId: chainId as NetworkAvailableChainId,
    });

    return result;
  } catch (error) {
    console.error("Error giving allowance:", error);
    return false;
  }
};
