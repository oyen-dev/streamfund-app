"use client";

import { wagmiConfig } from "@/config/wagmi";
import { useSession } from "next-auth/react";
import React from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import QueryProvider from "./QueryProvider";
import {
  RainbowKitAuthenticationProvider,
  RainbowKitProvider as NextRainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { siweAdapter } from "@/adapters/siwe";
import "@rainbow-me/rainbowkit/styles.css";

interface RainbowKitProviderProps {
  children: React.ReactNode;
  cookie: string;
}

const RainbowKitProvider = ({ children, cookie }: RainbowKitProviderProps) => {
  const { status } = useSession();
  const initialState = cookieToInitialState(wagmiConfig, cookie);
  const customTheme = {
    colors: {
      accentColor: "hsl(269 95% 83%)",
      accentColorForeground: "hsl(225, 0%, 0%)",
      actionButtonBorder: "hsl(228, 9%, 11%)",
      actionButtonBorderMobile: "hsl(228, 9%, 11%)",
      actionButtonSecondaryBackground: "hsl(225, 0%, 0%)",
      closeButton: "hsl(226, 11%, 64%)",
      closeButtonBackground: "hsl(228, 5%, 18%)",
      connectButtonBackground: "hsl(228, 9%, 11%)",
      connectButtonBackgroundError: "hsl(360,100%,64%)",
      connectButtonInnerBackground: "hsl(225, 4%, 21%)",
      connectButtonText: "hsl(0, 0%, 100%)",
      connectButtonTextError: "hsl(0,0%,100%)",
      error: "hsl(0,0%,100%)",
      generalBorder: "hsl(228, 5%, 18%)",
      generalBorderDim: "rgba(0, 0, 0, 0.03)",
      menuItemBackground: "hsl(229, 9%, 20%)",
      modalBackdrop: "rgba(0, 0, 0, 0.5)",
      modalBackground: "hsl(228, 9%, 11%)",
      modalBorder: "hsl(228, 5%, 18%)",
      modalText: "hsl(0, 0%, 100z%)",
      modalTextDim: "rgba(60, 66, 66, 0.3)",
      modalTextSecondary: "hsl(0, 0%, 60%)",
      profileAction: "hsl(218, 9%, 23%)",
      profileActionHover: "hsl(230, 7%, 31%)",
      profileForeground: "hsl(220, 8%, 15%)",
      selectedOptionBorder: "hsl(269 95% 83%)",
      downloadBottomCardBackground:
        '"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF"',
      downloadTopCardBackground:
        '"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF"',
      connectionIndicator: "hsl(107, 100%, 44%)",
      standby: "hsl(47, 100%, 63%)",
    },
    radii: {
      actionButton: "24px",
      connectButton: "12px",
      menuButton: "12px",
      modal: "24px",
      modalMobile: "24px",
    },
    shadows: {
      connectButton: "0px 8px 32px rgba(0, 0, 0, 0.32)",
      dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
      profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
      selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
      selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
      walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
    },
    blurs: {
      modalOverlay: "blur(0px)", // e.g. 'blur(4px)'
    },
    fonts: {
      body: "...", // default
    },
  };

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryProvider>
        <RainbowKitAuthenticationProvider adapter={siweAdapter} status={status}>
          <NextRainbowKitProvider theme={customTheme}>
            {children}
          </NextRainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </QueryProvider>
    </WagmiProvider>
  );
};

export default RainbowKitProvider;
