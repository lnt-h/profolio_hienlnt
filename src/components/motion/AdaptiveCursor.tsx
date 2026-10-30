"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

type CursorVariant = "default" | "interactive" | "hero" | "hidden";
type CursorTheme = "light" | "dark";

export function AdaptiveCursor() {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 850, damping: 48, mass: 0.18 });
  const y = useSpring(rawY, { stiffness: 850, damping: 48, mass: 0.18 });
  const [variant, setVariant] = useState<CursorVariant>("hidden");
  const [theme, setTheme] = useState<CursorTheme>("light");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const updateCapability = () => setEnabled(media.matches);
    updateCapability();
    media.addEventListener("change", updateCapability);

    const onMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      
      // Determine theme under cursor by checking element directly under cursor:
      const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);
      const target = (elementUnderCursor as HTMLElement) || (event.target as HTMLElement);
      
      const themedSection = target?.closest<HTMLElement>("[data-theme], .section-dark");
      const isDarkSection = themedSection?.dataset.theme === "dark" || themedSection?.classList.contains("section-dark");
      setTheme(isDarkSection ? "dark" : "light");
      
      if (target?.closest("[data-cursor='hero']")) setVariant("hero");
      else if (target?.closest("a, button, [data-cursor='interactive']")) setVariant("interactive");
      else setVariant("default");
    };
    const onLeave = () => setVariant("hidden");
    const onEnter = () => setVariant("default");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      media.removeEventListener("change", updateCapability);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("custom-cursor-ready", enabled);
    if (!enabled) return;

    const nativeCursorZones = document.querySelectorAll<HTMLElement>("[data-native-cursor]");
    const enterNativeZone = () => {
      root.classList.add("custom-cursor-native-zone");
      setVariant("hidden");
    };
    const leaveNativeZone = () => {
      root.classList.remove("custom-cursor-native-zone");
      setVariant("default");
    };

    nativeCursorZones.forEach((zone) => {
      zone.addEventListener("pointerenter", enterNativeZone);
      zone.addEventListener("pointerleave", leaveNativeZone);
    });

    return () => {
      nativeCursorZones.forEach((zone) => {
        zone.removeEventListener("pointerenter", enterNativeZone);
        zone.removeEventListener("pointerleave", leaveNativeZone);
      });
      root.classList.remove("custom-cursor-ready", "custom-cursor-native-zone");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`adaptive-cursor cursor-${variant} cursor-theme-${theme}`}
      style={{ x, y }}
      animate={{
        width: variant === "hero" ? 176 : variant === "interactive" ? 54 : 20,
        height: variant === "hero" ? 176 : variant === "interactive" ? 54 : 20,
        opacity: variant === "hidden" ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 310, damping: 25 }}
      aria-hidden="true"
    />
  );
}

