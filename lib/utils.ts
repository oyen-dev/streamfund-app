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
