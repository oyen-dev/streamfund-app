import Image from "next/image";
import React from "react";

interface FeaturesCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const FeaturesCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: FeaturesCardProps) => {
  return (
    <div
      className={
        "flex bg-gradient-to-br from-violet-500 via-background-base to-violet-500 p-1 rounded-lg"
      }
    >
      <div className="bg-background-base rounded-lg">
        <div className="flex flex-col p-5 space-y-3 w-full min-h-44 md:min-h-72 lg:min-h-80 bg-gradient-to-br gradient-violet-black from-0% to-60% rounded-lg">
          <h6 className="text-heading-6 font-space font-bold text-neutral-20 text-center w-full">
            {title}
          </h6>
          <p className="text-overline font-inter text-neutral-20 text-center w-full">
            {description}
          </p>

          <div className="flex relative w-full h-24 md:h-48 lg:h-56">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="100%"
              className="object-contain saturate-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
