"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function MiniScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.35 });

  return (
    <div className="mini-progress" aria-hidden="true">
      <motion.span style={{ scaleX }} />
    </div>
  );
}

