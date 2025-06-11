declare module "next-auth" {
  interface User {
    accessToken: string;
    address: string;
    chainId: number;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken: string;
    chainId: number;
    user: {
      address: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    address: string;
  }
}

import { readCookieFromStorageServerAction } from "@/utils/actions/cookie";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";

interface User {
  id: string;
  accessToken: string;
  address: string;
  chainId: number;
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        message: { label: "message", type: "text" },
        signature: { label: "signature", type: "text" },
      },
      authorize: async (
        credentials: Record<"message" | "signature", string> | undefined
      ): Promise<User | null> => {
        if (!credentials) {
          console.error("No credentials provided");
          return null;
        }

        try {
          const siweMessage = new SiweMessage(credentials.message);
          const nonce = await readCookieFromStorageServerAction();

          if (nonce !== siweMessage.nonce) {
            console.error("Nonce mismatch");
            throw new Error("Nonce mismatch");
          }

          const payload = {
            message: credentials.message,
            signature: credentials.signature,
          };

          const response = await fetch(
            `${process.env.BACKEND_BASEURL}/api/v1/auth/sign-in`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );

          const result = (await response.json()) as APISignInResponse;
          console.log("Authorization result:", result);

          if (!response.ok) {
            console.error("Error during authorization:", result);
            throw new Error(
              Array.isArray(result.message)
                ? result.message.join(", ")
                : result.message
            );
          }
          return {
            id: siweMessage.address,
            address: siweMessage.address,
            accessToken: result.data.token,
            chainId: siweMessage.chainId,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  session: {
    maxAge: 1 * 24 * 60 * 60, // 1 day
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.address = user.address;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.address = token.address;
      return session;
    },
  },
};
