"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export const AnimatedSection = ({
  children,
  ...props
}: AnimatedSectionProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};
