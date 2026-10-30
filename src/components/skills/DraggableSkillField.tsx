"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { Skill } from "@/content/site";

export function DraggableSkillField({ skills }: { skills: readonly Skill[] }) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="skill-field" ref={constraintsRef} aria-hidden="true">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className={`skill-bubble bubble-${index + 1}`}
            drag={!reduceMotion}
            dragConstraints={constraintsRef}
            dragElastic={0.18}
            dragMomentum={!reduceMotion}
            whileHover={reduceMotion ? undefined : { scale: 1.08, y: -5 }}
            whileDrag={{ scale: 1.1, zIndex: 4, cursor: "grabbing" }}
            data-cursor="interactive"
          >
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
        <p className="skill-instruction">Poke · Drag · Flick</p>
      </div>
      <ul className="skill-list" aria-label="Technology used to build this portfolio">
        {skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}</strong>
            <span>{skill.context}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

