import { getStreamFundAddresses } from "@/constants/common";
import { ERC20_ABI } from "@/constants/erc20-abi";
import { Address } from "viem";
import { writeContract } from "@wagmi/core";
import { wagmiConfig } from "@/config/wagmi";

export const giveAllowance = async (
  user: Address,
  token: Address,
  chainId: number
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
    });

    return result;
  } catch (error) {
    console.error("Error giving allowance:", error);
    return false;
  }
};

// export const readTokenBalance = async (
//   chainId: number,
//   address: Address,
//   token: Address
// ) => {
//   try {
//     console.log("CHain ID", chainId);
//     const publicClient = getPublicClient(chainId);
//     const result = await publicClient.readContract({
//       abi: ERC20_ABI,
//       address: token,
//       functionName: "balanceOf",
//       args: [address],
//     });

//     return result;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };

// export const readAllowance = async (
//   chainId: number,
//   address: Address,
//   token: Address
// ) => {
//   try {
//     const publicClient = getPublicClient(chainId);
//     const result = await publicClient.readContract({
//       abi: ERC20_ABI,
//       address: token,
//       functionName: "allowance",
//       args: [address, STREAMFUND_ADDRESS],
//     });

//     return result;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };
