"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";

const watchedSections = ["home", "about", "projects", "skills", "more", "contact"];

export function FloatingGlassNav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      let secondFrame = 0;
      const firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
        });
      });
      return () => {
        cancelAnimationFrame(firstFrame);
        cancelAnimationFrame(secondFrame);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -55%", threshold: [0.05, 0.2, 0.5] },
    );

    watchedSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeOnOutside(event: PointerEvent) {
      if (menuOpen && !navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const isActive = (item: (typeof navigation)[number]) => item.matchSectionIds.includes(active);

  return (
    <nav ref={navRef} className="glass-nav" aria-label="Primary navigation">
      <a className="nav-brand" href="#home" aria-label="Hien Le, home">H.</a>
      <div className="nav-desktop">
        {navigation.map((item) =>
          item.parentMenu ? (
            <div className="more-wrap" key={item.label}>
              <button
                ref={menuButtonRef}
                className={`nav-item ${isActive(item) ? "is-active" : ""}`}
                type="button"
                aria-expanded={menuOpen}
                aria-haspopup="menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {isActive(item) && <motion.span className="active-pill" layoutId="nav-active" />}
                <span>More</span><span aria-hidden="true" className="chevron">⌄</span>
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    className="more-menu"
                    role="menu"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  >
                    <a role="menuitem" href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a role="menuitem" href="#more" onClick={() => setMenuOpen(false)}>Behind the curtains</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item ${item.label === "Contact" ? "nav-contact" : ""} ${isActive(item) ? "is-active" : ""}`}
            >
              {isActive(item) && item.label !== "Contact" && <motion.span className="active-pill" layoutId="nav-active" />}
              <span>{item.label}</span>
            </a>
          ),
        )}
      </div>
      <button
        ref={menuButtonRef}
        className="mobile-menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

