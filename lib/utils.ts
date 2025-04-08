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
  const roundedValue = Math.ceil(value * 100) / 100;
  return parseFloat(roundedValue.toFixed(2));
}

export const fetchProxy = async ({ method, url, body }: FetchProxyProps) => {
  try {
    console.log(`${process.env.NEXT_PUBLIC_APP_URL}/api/proxy?target=${url}`);
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

    const result = await response.json();

    if (result.error) {
      const message = Array.isArray(result.message)
        ? result.message[0]
        : result.message;
      return Promise.reject(message);
    }
    return result;
  } catch (error) {
    console.log(error);
    console.error(`Error in ${method} ${url}:`, error);
    return error;
  }
};
