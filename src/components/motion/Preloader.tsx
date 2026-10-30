"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { HienlntSignature } from "@/components/motion/HienlntSignature";

type LoaderState = "running" | "done" | "skipped";
const INTRO_SESSION_KEY = "hienlnt-signature-intro-v2";

export function Preloader() {
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<LoaderState>("running");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const shouldBypass =
      reduceMotion ||
      window.location.hash.length > 0 ||
      window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";

    if (shouldBypass) {
      const bypassFrame = requestAnimationFrame(() => setState("done"));
      return () => cancelAnimationFrame(bypassFrame);
    }

    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const ratio = Math.min(elapsed / 1550, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.round(eased * 100));
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
        window.setTimeout(() => setState("done"), 100);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  const skip = () => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    setProgress(100);
    setState("skipped");
  };

  return (
    <AnimatePresence>
      {state !== "done" && state !== "skipped" && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Portfolio introduction"
        >
          <div className="preloader-center" aria-hidden="true">
            <HienlntSignature progress={progress} />
            <div className="preloader-meta">
              <p>Drawing the signature</p>
              <div className="preloader-number"><span>{progress}</span><sup>%</sup></div>
            </div>
            <div className="preloader-track"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
          </div>
          <button type="button" onClick={skip}>Skip intro</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

