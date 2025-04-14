import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrumSepolia,
  baseSepolia,
  optimismSepolia,
  eduChainTestnet,
} from "viem/chains";
import { cookieStorage, createStorage, http } from "wagmi";

export const wagmiConfig = getDefaultConfig({
  appName: "StreamFund",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [baseSepolia, arbitrumSepolia, optimismSepolia, eduChainTestnet],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [baseSepolia.id]: http(
      `https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
    [arbitrumSepolia.id]: http(
      `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
    [optimismSepolia.id]: http(
      `https://opt-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
    [eduChainTestnet.id]: http("https://rpc.open-campus-codex.gelato.digital"),
  },
});
