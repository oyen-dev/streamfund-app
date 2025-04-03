"use client";

import { Session } from "next-auth";
import { SessionProvider, signOut } from "next-auth/react";
import React from "react";
import RainbowKitProvider from "./RainbowKitProvider";

interface AuthProviderProps {
  children: React.ReactNode;
  session: Session;
  cookie: string;
}

const AuthProvider = ({ children, session, cookie }: AuthProviderProps) => {
  if (!session) {
    if (typeof window !== "undefined") {
      signOut({ redirect: false });
    }
  }
  return (
    <SessionProvider baseUrl={process.env.NEXTAUTH_URL} session={session}>
      <RainbowKitProvider cookie={cookie}>{children}</RainbowKitProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
