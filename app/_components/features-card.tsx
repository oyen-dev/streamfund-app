"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex bg-gradient-to-br from-violet-500 via-background-base to-violet-500 p-1 rounded-lg"
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="bg-background-base rounded-lg w-full">
        <motion.div
          className="flex flex-col p-5 space-y-3 w-full min-h-44 md:min-h-72 lg:min-h-80 bg-gradient-to-br gradient-violet-black from-0% to-60% rounded-lg"
          whileHover={{
            background:
              "linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(106, 64, 134, 0.8) 60%)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h6
            className="text-heading-6 font-space font-bold text-neutral-20 text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h6>

          <motion.p
            className="text-overline font-inter text-neutral-20 text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex relative w-full h-24 md:h-48 lg:h-56"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1, rotateZ: 2 }}
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              fill
              sizes="100%"
              className="object-contain saturate-0 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
