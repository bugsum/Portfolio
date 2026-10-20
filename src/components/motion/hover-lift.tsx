"use client";

import { motion } from "motion/react";
import { SPRING_SNAPPY } from "@/lib/motion";

type HoverLiftProps = {
  children: React.ReactNode;
  lift?: number;
  press?: number;
  className?: string;
};

export function HoverLift({
  children,
  lift = 4,
  press = 0.985,
  className,
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      whileTap={{ scale: press }}
      transition={SPRING_SNAPPY}
      className={className}
    >
      {children}
    </motion.div>
  );
}
