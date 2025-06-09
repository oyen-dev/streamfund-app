import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  sepolia,
  bsc,
  bscTestnet,
  base,
  baseSepolia,
  arbitrum,
  arbitrumSepolia,
  polygon,
  polygonAmoy,
  avalanche,
  avalancheFuji,
  optimism,
  optimismSepolia,
  sonic,
  sonicBlazeTestnet,
  berachain,
  berachainBepolia,
} from "viem/chains";
import { cookieStorage, createStorage, http } from "wagmi";

const MODE = process.env.NEXT_PUBLIC_WEB3_MODE as "mainnet" | "testnet";

export const wagmiConfig = getDefaultConfig({
  appName: "StreamFund",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains:
    MODE === "mainnet"
      ? [
          mainnet,
          bsc,
          base,
          arbitrum,
          polygon,
          avalanche,
          optimism,
          sonic,
          berachain,
        ]
      : [
          sepolia,
          bscTestnet,
          baseSepolia,
          arbitrumSepolia,
          polygonAmoy,
          avalancheFuji,
          optimismSepolia,
          sonicBlazeTestnet,
          berachainBepolia,
        ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports:
    MODE === "mainnet"
      ? {
          [mainnet.id]: http(
            `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [bsc.id]: http(
            `https://bnb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [base.id]: http(
            `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [arbitrum.id]: http(
            `https://arb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [polygon.id]: http(
            `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [avalanche.id]: http(
            `https://avax-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [optimism.id]: http(
            `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [sonic.id]: http(
            `https://sonic-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [berachain.id]: http(
            `https://berachain-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
        }
      : {
          [sepolia.id]: http(
            `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [bscTestnet.id]: http(
            `https://bnb-testnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [baseSepolia.id]: http(
            `https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [arbitrumSepolia.id]: http(
            `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [polygonAmoy.id]: http(
            `https://polygon-amoy.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [avalancheFuji.id]: http(
            `https://avax-fuji.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [optimismSepolia.id]: http(
            `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [sonicBlazeTestnet.id]: http(
            `https://sonic-blaze.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
          [berachainBepolia.id]: http(
            `https://berachain-bepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
          ),
        },
});
