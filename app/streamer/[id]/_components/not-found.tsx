import React from "react";

const StreamerNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-6 text-white">
      <h1 className="text-2xl font-bold">Streamer Not Found</h1>
      <p className="text-lg">
        The streamer you are looking for does not exist.
      </p>
    </div>
  );
};

export default StreamerNotFound;
