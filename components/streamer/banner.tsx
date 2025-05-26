import Image from "next/image";
import React from "react";

const StreamerBanner = () => {
  return (
    <div className="relative w-full h-40 max-w-2xl md:h-60 rounded-2xl">
      <Image
        src="/images/banner.jpg"
        fill
        loading="lazy"
        alt="Banner"
        sizes="100%"
        className="object-cover rounded-2xl"
      />
    </div>
  );
};

export default StreamerBanner;
