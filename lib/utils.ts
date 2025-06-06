import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface FetchProxyProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown>;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateWalletAddress(address: string | undefined) {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function truncateUsernameOrWalletAddress(content: string | undefined) {
  if (!content) return "";
  if (content.length < 15) return content;
  return `${content.slice(0, 6)}...${content.slice(-4)}`;
}

export const simplifyNumber = (
  value: number,
  tokenDecimals: number
): string => {
  // Determine display decimals based on token decimals
  let displayDecimals;
  if (tokenDecimals >= 18) {
    displayDecimals = 5; // High precision for tokens like ETH
  } else if (tokenDecimals >= 8) {
    displayDecimals = 4; // Medium precision for tokens like BTC
  } else {
    displayDecimals = 2; // Low precision for tokens like USDC
  }

  const factor = Math.pow(10, displayDecimals);
  const truncatedValue = Math.floor(value * factor) / factor;

  return truncatedValue.toFixed(displayDecimals).replace(/\.?0+$/, ""); // Remove trailing zeros
};

export function roundToTwoDigits(value: number): number {
  const roundedValue = Math.round(value * 100) / 100;
  return parseFloat(roundedValue.toFixed(2));
}

export const fetchProxy = async ({ method, url, body }: FetchProxyProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/proxy?target=${url}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: method !== "GET" ? JSON.stringify(body) : undefined,
      }
    );

    return await response.json();
  } catch (error) {
    console.error(`Error in ${method} ${url}:`, error);
    return error;
  }
};
