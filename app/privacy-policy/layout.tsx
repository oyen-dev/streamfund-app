import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | StreamFund",
  description:
    "Learn how StreamFund collects, uses, and protects your personal information. Our Privacy Policy ensures transparency and security for donors and streamers.",
  keywords: [
    "StreamFund privacy policy",
    "data protection",
    "privacy policy",
    "blockchain privacy",
    "web3 privacy",
    "data security",
    "user privacy",
    "donor anonymity",
    "streamer data",
    "privacy compliance",
  ],
  creator: "StreamFund",
  authors: [
    {
      name: "StreamFund",
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  publisher: "StreamFund",
  applicationName: "StreamFund",
  category: "Web3 Creator Platform",
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | StreamFund",
    description:
      "Understand how StreamFund safeguards your data with our transparent Privacy Policy, covering data collection, usage, and blockchain security.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/privacy-policy.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund Privacy Policy",
      },
    ],
    creator: "@streamfundlive",
    site: "@streamfundlive",
  },
  openGraph: {
    title: "Privacy Policy | StreamFund",
    description:
      "StreamFund’s Privacy Policy details how we handle your data, ensuring secure and transparent processing for all users on our web3 platform.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
    siteName: "StreamFund",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/privacy-policy.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund Privacy Policy",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Fragment>{children}</Fragment>;
}
