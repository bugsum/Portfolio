"use client";

import { motion } from "motion/react";
import { DURATION, EASE_OUT_SOFT } from "@/lib/motion";

type RevealTag = "div" | "section" | "li" | "span" | "article";

type RevealProps = {
  children: React.ReactNode;
  as?: RevealTag;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
  className?: string;
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 16,
  once = true,
  amount = 0.25,
  className,
}: RevealProps) {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT_SOFT, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
