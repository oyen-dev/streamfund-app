"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import React from "react";

const TestLogin = () => {
  const session = useSession();

  return (
    <>
      <ConnectButton />

      <div className="flex">
        <p className="text-2xl">
          {session.status === "authenticated"
            ? `Logged in as ${session.data?.user?.address}`
            : "Not logged in"}
        </p>
        <p className="text-2xl">{session.data?.accessToken}</p>
      </div>
    </>
  );
};

export default TestLogin;
