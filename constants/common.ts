import { Address } from "viem";
import {
  baseSepolia,
  arbitrumSepolia,
  optimismSepolia,
  base,
  arbitrum,
  optimism,
} from "viem/chains";

export const QUICK_AMOUNTS = [1, 1.5, 5, 10];

export const NATIVE_TOKEN_ADDRESS =
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const getStreamFundAddresses = (chainId: number): Address => {
  const contracts = {
    0: "0x",
    [base.id]: "0xstr",
    [arbitrum.id]: "0xstr",
    [optimism.id]: "0xstr",
    [baseSepolia.id]: "0xf56FC21f3B799086099d74a9F7F505e6EA1f6fec",
    [arbitrumSepolia.id]: "0x4f346f17c50270E7A3Bfc859671D24eFAab0B1aF",
    [optimismSepolia.id]: "0x82EE3B66B125C0DED18035eC05fC2D2D3acAcAdB",
  };

  const contractAddress = Object.keys(contracts).find(
    (key) => Number(key) === chainId
  );

  if (!contractAddress) {
    throw new Error(`No contract address found for chain ID: ${chainId}`);
  }
  return contracts[
    contractAddress as unknown as keyof typeof contracts
  ] as Address;
};
