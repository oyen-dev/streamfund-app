import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const TestLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ConnectButton />

      <p className="font-inter text-lg text-violet-600 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae
        soluta adipisci vitae deserunt, cupiditate hic reprehenderit sunt quasi
        ad corporis eum! Illo, aut voluptatem similique animi laboriosam
        sapiente tempora.
      </p>
      <p className="font-space text-lg text-neutral-20 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae
        soluta adipisci vitae deserunt, cupiditate hic reprehenderit sunt quasi
        ad corporis eum! Illo, aut voluptatem similique animi laboriosam
        sapiente tempora.
      </p>
    </div>
  );
};

export default TestLogin;
