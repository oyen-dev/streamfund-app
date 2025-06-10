import { Address } from "viem";
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

interface QnA {
  title: string;
  description: string;
}

export const QUICK_AMOUNTS = [1, 1.5, 5, 10];

export const NATIVE_TOKEN_ADDRESS =
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const getStreamFundAddresses = (
  chainId: number | undefined
): Address => {
  const contracts = {
    [mainnet.id]: "0xstr",
    [bsc.id]: "0xstr",
    [base.id]: "0xstr",
    [arbitrum.id]: "0xstr",
    [polygon.id]: "0xstr",
    [avalanche.id]: "0xstr",
    [optimism.id]: "0xstr",
    [sonic.id]: "0xstr",
    [berachain.id]: "0xstr",
    [sepolia.id]: "0xFe8029Bbde8be491FbF345530F3991Bdc40e7f86",
    [bscTestnet.id]: "0x4B2C2fAD09eD8ACF54fF882d2236d023A4b92086",
    [baseSepolia.id]: "0xC157df69E2484Adc6d94e651758400E19e85fDfe",
    [arbitrumSepolia.id]: "0x1a0DD23D7525F40af391d1EF17CF90667123397b",
    [polygonAmoy.id]: "0x82EE3B66B125C0DED18035eC05fC2D2D3acAcAdB",
    [avalancheFuji.id]: "0x4B2C2fAD09eD8ACF54fF882d2236d023A4b92086",
    [optimismSepolia.id]: "0xA5dd89e5369b2319d5CE2E742872bEf8B07344e4",
    [sonicBlazeTestnet.id]: "0x3780bf16e667e8b7f12cD818Db4831C6d9Ab490F",
    [berachainBepolia.id]: "0x11fEB7694e03420032caEeEE4e508d1Ed3983166",
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

export const DASHBOARD_MENUS = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Alert",
    href: "/dashboard/alert",
  },
  {
    name: "QR Code",
    href: "/dashboard/qr",
  },
  {
    name: "Marquee",
    href: "/dashboard/marquee",
  },
  {
    name: "Media",
    href: "/dashboard/media",
  },
  {
    name: "Soundboard",
    href: "/dashboard/soundboard",
  },
];

export const FEATURES = [
  {
    title: "Peer-to-Peer Support",
    description:
      "Straight cash from viewers to your wallet - no sus middlemen taxing your vibe",
    image: "/images/peer-to-peer.png",
  },
  {
    title: "Any Cryptocurrency",
    description:
      "Take whatever crypto is hot rn - stablecoins, ETH, literally anything that slaps",
    image: "/images/any-crypto.png",
  },
  {
    title: "Real-Time Engagement",
    description:
      "Let the squad drop messages, vids, and ads mid-stream for max hype",
    image: "/images/real-time.png",
  },
  {
    title: "Cross Platform Compatibility",
    description:
      "Works everywhere - TikTok, Twitch, YouTube, whatever platform you're yapping on",
    image: "/images/cross-platform.png",
  },
  {
    title: "Low Transaction Fees",
    description:
      "Only 2.5% on support and 5% on ads - we're not here to steal your bag",
    image: "/images/low-fees.png",
  },
  {
    title: "Instant Payouts",
    description:
      "Get paid immediately - no waiting, no minimum withdrawal. It's giving financial freedom",
    image: "/images/instant-payouts.png",
  },
];

export const QUESTIONS: QnA[] = [
  {
    title: "So like... what's StreamFund all about?",
    description:
      "StreamFund is this super fire Web3 platform where streamers can get crypto support in real-time, no cap! It's literally giving creators secure blockchain vibes while viewers slide in with custom messages that pop up during streams. Lowkey the best way to connect with your audience fr fr.",
  },
  {
    title: "Why is StreamFund setup so easy tho?",
    description:
      "It's actually insane - just drop in a stream key and boom! You're connected to tools like OBS and the bread starts hitting your wallet immediately. Doesn't matter if you're just starting or you've been in the game forever, the setup is stupid simple, no lie.",
  },
  {
    title: "Which coins can I use on this thing?",
    description:
      "We're vibing with all the good stuff - USDT, USDC, and like, basically any crypto that's popping rn. Makes it mad easy for you to get your bag, and your viewers can support using whatever crypto they're hodling. Pretty sick ngl!",
  },
  {
    title: "How do viewers slide you money without the drama?",
    description:
      "It's giving direct transfer vibes! Your fans send funds straight to you with no locked coins or waiting periods - just a tiny 2.5% fee that's so worth it, fr fr. The whole process is dummy fast and works for everyone, even if they're watching from across the globe. No minimum amounts or shady withdrawal delays - just instant cash flow, no cap! That's the whole tea!",
  },
  {
    title: "What's the deal with all these themes and layouts?",
    description:
      "Bruh, we've got HUNDREDS of absolutely cracked designs that make your stream look professional AF without hiring some expensive designer. Just pick your vibe and you're set - it's literally that easy!!",
  },
  {
    title: "Can I make my StreamFund setup hit different?",
    description:
      "100%! Start with one of our templates and then customize EVERYTHING. Colors, layouts, designs - whatever you're feeling. You can even add your own special features to make your stream stand out fr. It's giving main character energy!",
  },
  {
    title: "How long before I'm up and running?",
    description:
      "Bestie, we're talking MINUTES not hours! Our setup is so easy, you'll be secured and ready to collect that sweet viewer support before your Starbucks order is even ready. No cap - it's actually that quick. The vibes are immaculate from day one!",
  },
];
