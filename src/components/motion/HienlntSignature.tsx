"use client";

import { motion, useReducedMotion } from "motion/react";

type HienlntSignatureProps = {
  compact?: boolean;
  progress?: number;
};

const strokes = [
  "M18 118 C27 88 35 42 43 23 C48 12 57 11 60 20 C65 34 52 63 35 86 C52 64 68 57 79 63 C90 70 74 99 79 113 C83 124 95 114 105 101",
  "M109 69 C106 83 100 107 105 116 C111 126 126 113 137 99",
  "M137 91 C155 95 176 81 174 69 C172 58 156 60 146 72 C133 87 136 109 150 116 C166 124 187 110 198 98",
  "M199 66 C195 82 187 109 195 116 C202 123 211 83 225 69 C235 59 246 61 246 72 C246 84 235 104 239 113 C243 122 256 112 268 98",
  "M271 105 C285 83 303 44 306 24 C308 12 301 9 295 18 C283 37 274 76 276 101 C277 116 286 123 302 110 C308 105 312 100 315 96",
  "M318 66 C314 82 306 109 314 116 C321 123 330 83 344 69 C354 59 365 61 365 72 C365 84 354 104 358 113 C362 122 375 112 387 98",
  "M421 35 C417 57 405 99 412 113 C419 127 441 109 454 92 C469 72 477 60 484 48 M394 68 C418 68 444 64 468 57 M454 92 C480 112 518 116 558 99",
] as const;

function revealFor(progress: number, index: number) {
  const start = index * 12;
  const end = start + 22;
  return Math.max(0, Math.min(1, (progress - start) / (end - start)));
}

export function HienlntSignature({ compact = false, progress }: HienlntSignatureProps) {
  const reduceMotion = useReducedMotion();
  const isLoader = typeof progress === "number";
  const shouldAnimate = !compact && !reduceMotion && !isLoader;
  const strokeWidth = compact ? 4.2 : isLoader ? 6 : 5.2;

  return (
    <svg
      className={`hienlnt-signature${compact ? " is-compact" : ""}${isLoader ? " is-loader" : ""}`}
      viewBox="0 0 580 150"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {strokes.map((stroke, index) => {
        const reveal = isLoader ? revealFor(progress, index) : 1;
        return isLoader || compact || reduceMotion ? (
          <path
            key={stroke}
            d={stroke}
            className="signature-stroke"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - reveal}
          />
        ) : (
          <motion.path
            key={stroke}
            d={stroke}
            className="signature-stroke"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.15, ease: [0.42, 0, 0.2, 1] }}
          />
        );
      })}
      <motion.circle
        className="signature-dot"
        cx="116"
        cy="47"
        r="5"
        initial={shouldAnimate ? { scale: 0, opacity: 0 } : false}
        whileInView={{ scale: isLoader ? (progress >= 96 ? 1 : 0) : 1, opacity: isLoader ? (progress >= 96 ? 1 : 0) : 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.2, delay: shouldAnimate ? (strokes.length * 0.15 + 0.1) : 0 }}
      />
    </svg>
  );
}
