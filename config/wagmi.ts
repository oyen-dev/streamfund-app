import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  sepolia,
  bscTestnet,
  baseSepolia,
  arbitrumSepolia,
  polygonAmoy,
  avalancheFuji,
  optimismSepolia,
  sonicTestnet,
  berachainBepolia,
} from "viem/chains";
import { cookieStorage, createStorage, http } from "wagmi";

export const wagmiConfig = getDefaultConfig({
  appName: "StreamFund",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [
    sepolia,
    bscTestnet,
    baseSepolia,
    arbitrumSepolia,
    polygonAmoy,
    avalancheFuji,
    optimismSepolia,
    sonicTestnet,
    berachainBepolia,
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
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
    [sonicTestnet.id]: http(
      `https://sonic-blaze.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
    [berachainBepolia.id]: http(
      `https://berachain-bepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
    ),
  },
});
