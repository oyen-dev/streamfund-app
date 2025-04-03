import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import { getServerSession, Session } from "next-auth";
import { authConfig } from "@/config/auth";
import { headers } from "next/headers";
import Header from "@/components/layout/header";
import { signOut } from "next-auth/react";

const SpaceFont = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "700"],
  fallback: ["system-ui", "sans-serif"],
});
const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "StreamFund | Engage and Support Creators",
  description:
    "StreamFund is a platform that allows you to engage with your favorite creators and support them through donations.",
  keywords: [
    "StreamFund",
    "streaming",
    "donations",
    "support creators",
    "engage with creators",
    "creator economy",
    "live streaming",
    "content creation",
    "monetization",
    "community engagement",
    "fan support",
    "creator support",
    "live donations",
  ],
  creator: "StreamFund",
  authors: {
    name: "StreamFund",
    url: process.env.URL,
  },
  publisher: "StreamFund",
  applicationName: "StreamFund App",
  twitter: {
    card: "summary_large_image",
    title: "StreamFund | Engage and Support Creators",
    description:
      "StreamFund is a platform that allows you to engage with your favorite creators and support them through donations.",
    images: [
      {
        url: `${process.env.URL}/images/streamfund.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund | Engage and Support Creators",
      },
    ],
  },
  openGraph: {
    title: "StreamFund | Engage and Support Creators",
    description:
      "StreamFund is a platform that allows you to engage with your favorite creators and support them through donations.",
    url: process.env.URL,
    siteName: "StreamFund",
    images: [
      {
        url: `${process.env.URL}/images/streamfund.jpg`,
        width: 1200,
        height: 630,
        alt: "StreamFund | Engage and Support Creators",
        type: "image/jpeg",
      },
    ],
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

  if (!session) {
    await signOut();
  }

  return (
    <html lang="en">
      <body
        className={`${SpaceFont.variable} ${InterFont.variable} antialiased`}
      >
        <AuthProvider session={session} cookie={cookie}>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
