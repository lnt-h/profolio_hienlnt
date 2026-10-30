"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type CSSProperties } from "react";
import type { Skill } from "@/content/site";

const groupLabels: Record<Skill["group"], string> = {
  software: "Software Engineering",
  engineering: "Engineering Core",
  devops: "Delivery & DevOps",
  cloud: "Cloud",
};

export function DraggableSkillField({ skills }: { skills: readonly Skill[] }) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <>
      <div
        className={`skill-field${activeSkill ? " has-active-skill" : ""}`}
        ref={constraintsRef}
        aria-hidden="true"
      >
        <div className="skill-grid-glow" />
        <div className="skill-group-label label-software">Software Engineering</div>
        <div className="skill-group-label label-delivery">Delivery &amp; DevOps</div>
        <div className="skill-group-label label-cloud">Cloud</div>
        <svg className="skill-flow" viewBox="0 0 1000 590" preserveAspectRatio="none">
          <path d="M140 160 C300 90 390 250 500 260 S690 120 800 200 S870 360 900 420" />
          <path d="M220 420 C380 500 510 430 625 350 S775 315 875 455" />
        </svg>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className={`skill-bubble skill-${skill.group} accent-${skill.accent}${activeSkill === skill.id ? " is-active" : ""}`}
            style={{
              "--skill-x": `${skill.position.x}%`,
              "--skill-y": `${skill.position.y}%`,
              "--float-delay": `${index * -0.37}s`,
            } as CSSProperties}
            drag={!reduceMotion}
            dragConstraints={constraintsRef}
            dragElastic={0.12}
            dragMomentum={!reduceMotion}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 24, power: 0.18 }}
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={reduceMotion ? undefined : { duration: 5.5 + index * 0.18, repeat: Infinity, ease: "easeInOut", delay: index * -0.37 }}
            whileHover={reduceMotion ? undefined : { scale: 1.07, y: -5 }}
            whileDrag={{ scale: 1.08, zIndex: 8, cursor: "grabbing" }}
            onHoverStart={() => setActiveSkill(skill.id)}
            onHoverEnd={() => setActiveSkill(null)}
            onDragStart={() => setActiveSkill(skill.id)}
            onDragEnd={() => setActiveSkill(null)}
            data-cursor="interactive"
          >
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
        <p className="skill-instruction"><span>Code</span> → <span>Build</span> → <span>Deploy</span> → <span>AWS</span><br />Poke · Drag · Flick</p>
      </div>
      <ul className="skill-list" aria-label="Software engineering, DevOps, and cloud technology inventory">
        {skills.map((skill) => (
          <li key={skill.id}>
            <div className="skill-list-heading">
              <strong>{skill.name}</strong>
            </div>
            <span>{skill.context}</span>
            <small>{groupLabels[skill.group]}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

