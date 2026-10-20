"use client";

import { motion, type Variants } from "motion/react";
import { DURATION, EASE_OUT_SOFT } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: {},
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

type StaggerProps = {
  children: React.ReactNode;
  as?: "div" | "ul" | "ol" | "section";
  gap?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
};

export function Stagger({
  children,
  as = "div",
  gap = 0.07,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
}: StaggerProps) {
  const Tag = motion[as];

  return (
    <Tag
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: gap, delayChildren: delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  as?: "div" | "li";
  className?: string;
};

export function StaggerItem({
  children,
  as = "div",
  className,
}: StaggerItemProps) {
  const Tag = motion[as];

  return (
    <Tag
      variants={item}
      transition={{ duration: DURATION.base, ease: EASE_OUT_SOFT }}
      className={className}
    >
      {children}
    </Tag>
  );
}
