import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | StreamFund",
  description:
    "Review StreamFund's Terms of Service to understand the rules for using our platform, including eligibility, donations, user content, and legal responsibilities.",
  keywords: [
    "StreamFund terms of service",
    "terms and conditions",
    "user agreement",
    "donation rules",
    "streamer terms",
    "web3 platform terms",
    "blockchain transactions",
    "user content policy",
    "platform eligibility",
    "legal terms",
  ],
  robots: "index, follow",
  creator: "StreamFund Team",
  authors: [
    {
      name: "StreamFund Team",
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  publisher: "StreamFund",
  applicationName: "StreamFund",
  formatDetection: {
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | StreamFund",
    description:
      "Explore StreamFund's Terms of Service, covering user eligibility, donation processes, content rules, and legal terms for a secure web3 experience.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/terms-of-service.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund Terms of Service",
      },
    ],
  },
  openGraph: {
    title: "Terms of Service | StreamFund",
    description:
      "StreamFund’s Terms of Service outline the rules for using our platform, ensuring clarity on donations, user content, and legal obligations for all users.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/terms-of-service`,
    siteName: "StreamFund",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/terms-of-service.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund Terms of Service",
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
