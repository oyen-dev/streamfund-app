import type { Metadata } from "next";
import DashboardLayout from "./_components/layout";

export const metadata: Metadata = {
  title: "Dashboard | StreamFund",
  description:
    "Manage your streaming activities and view donation statistics. Access powerful tools to engage with your audience and grow your streaming career on StreamFund.",
  keywords: [
    "Streaming dashboard",
    "Creator platform",
    "Stream donations",
    "Content creator tools",
    "Streamer analytics",
    "Audience engagement",
    "Streaming statistics",
    "Donation management",
    "Creator dashboard",
    "StreamFund platform",
    "Stream monetization",
    "Creator support",
    "Viewer engagement",
    "Live streaming tools",
    "Donation tracking",
  ],
  creator: "StreamFund",
  authors: {
    name: "StreamFund",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  publisher: "StreamFund",
  applicationName: "StreamFund",
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | StreamFund",
    description:
      "Manage your streaming activities and view donation statistics. Access powerful tools to engage with your audience and grow your streaming career on StreamFund.",
    creator: "streamfund",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/assets/icons/536.svg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    title: "Dashboard | StreamFund",
    description:
      "Manage your streaming activities and view donation statistics. Access powerful tools to engage with your audience and grow your streaming career on StreamFund.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    siteName: "StreamFund",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/assets/icons/536.svg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
