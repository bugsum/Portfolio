"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { DURATION, EASE_OUT_SOFT } from "@/lib/motion";
import { cn } from "@/lib/cn";

const chunk: Variants = {
  hidden: { y: "110%" },
  show: { y: 0 },
};

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  by?: "word" | "line";
  delay?: number;
  className?: string;
};

export function TextReveal({
  text,
  as = "h2",
  by = "word",
  delay = 0,
  className,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const chunks = by === "line" ? text.split("\n") : text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
      className={className}
    >
      {chunks.map((part, index) => (
        <span
          key={index}
          aria-hidden
          className={cn(
            "inline-block overflow-hidden align-bottom",
            by === "line" && "block",
          )}
        >
          <motion.span
            variants={chunk}
            transition={{ duration: DURATION.slower, ease: EASE_OUT_SOFT }}
            className="inline-block"
          >
            {part}
          </motion.span>
          {by === "word" && index < chunks.length - 1 ? " " : null}
        </span>
      ))}
    </MotionTag>
  );
}
