import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h1 className="text-4xl font-bold text-center">Welcome to StreamFund!</h1>
      <p className="mt-4 text-lg">
        Engage with your favorite creators and support them through donations.
      </p>
      <div className="flex flex-col items-center mt-8">
        <Image
          src="/images/streamfund.jpg"
          alt="StreamFund"
          className="rounded-lg shadow-lg"
          width={500}
          height={300}
        />
        <p className="mt-2 text-sm text-gray-500">
          StreamFund is a platform that allows you to engage with your favorite
          creators and support them through donations.
        </p>
      </div>
    </div>
  );
};

export default Home;
