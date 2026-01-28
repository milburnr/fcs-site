"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

// FadeIn Component - Animates elements with a fade and slide up effect
interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  className,
  ...props
}: FadeInProps) {
  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// StaggerContainer - Container that staggers animation of children
interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants"> {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// StaggerItem - Child item for StaggerContainer
interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// AnimatedCounter - Animates a number counting up
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.span>
  );
}

// ScaleOnHover - Scales element on hover
interface ScaleOnHoverProps extends Omit<HTMLMotionProps<"div">, "whileHover" | "transition"> {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function ScaleOnHover({
  children,
  scale = 1.02,
  className,
  ...props
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// SlideIn - Slides element in from specified direction
interface SlideInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: SlideInProps) {
  const offsets = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offsets[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// BlurIn - Fades in with a blur effect
interface BlurInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: BlurInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
