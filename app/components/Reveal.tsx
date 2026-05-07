"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentProps, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
} & Omit<ComponentProps<typeof motion.div>, "children">;

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className,
  once = true,
  amount = 0.3,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion.create(as as ElementType);

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.9,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};
