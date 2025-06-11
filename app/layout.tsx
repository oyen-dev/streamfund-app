import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import { getServerSession, Session } from "next-auth";
import { authConfig } from "@/config/auth";
import { headers } from "next/headers";
import Header from "@/components/layout/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/footer";

const SpaceFont = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});
const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "StreamFund | Real-Time Crypto Support for Creators",
  description:
    "StreamFund connects creators and viewers through direct crypto donations with instant payouts, real-time engagement, and cross-platform compatibility. Low fees, any cryptocurrency.",
  keywords: [
    "StreamFund",
    "crypto donations",
    "creator support",
    "instant payouts",
    "peer-to-peer",
    "real-time engagement",
    "cross platform",
    "content creators",
    "web3 streaming",
    "low fees",
    "cryptocurrency",
    "direct support",
    "stream monetization",
    "creator economy",
    "blockchain payments",
  ],
  creator: "StreamFund",
  authors: {
    name: "StreamFund",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  publisher: "StreamFund",
  applicationName: "StreamFund",
  category: "Web3 Creator Platform",
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamFund | Real-Time Crypto Support for Creators",
    description:
      "Direct P2P crypto donations with instant payouts, real-time engagement, and cross-platform compatibility. Low fees, any cryptocurrency.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund | Real-Time Crypto Support for Creators",
      },
    ],
    creator: "@streamfundlive",
    site: "@streamfundlive",
  },
  openGraph: {
    title: "StreamFund | Real-Time Crypto Support for Creators",
    description:
      "Direct P2P crypto donations with instant payouts, real-time engagement, and cross-platform compatibility. Low fees, any cryptocurrency.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "StreamFund",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/streamfund.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund | Real-Time Crypto Support for Creators",
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
  const session = (await getServerSession(authConfig)) as Session;
  const cookie = (await headers()).get("cookie") as string;

  return (
    <html lang="en">
      <body
        className={`${SpaceFont.variable} ${InterFont.variable} antialiased bg-background-base`}
      >
        <AuthProvider session={session} cookie={cookie}>
          <Header />
          {children}
          <Footer />
          <Toaster
            toastOptions={{
              duration: 3000,
              position: "top-center",
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
