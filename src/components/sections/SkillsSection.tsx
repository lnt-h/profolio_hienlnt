import { skills } from "@/content/site";
import { DraggableSkillField } from "@/components/skills/DraggableSkillField";

export function SkillsSection() {
  return (
    <section id="skills" className="skills section-dark" data-theme="dark">
      <div className="site-shell">
        <div className="dark-heading-row">
          <div>
            <p className="section-eyebrow">04 / Skills &amp; tech</p>
            <h2>Tools in motion.</h2>
          </div>
          <p>The verified stack behind this portfolio. A broader personal skill inventory is pending owner review.</p>
        </div>
        <DraggableSkillField skills={skills} />
      </div>
    </section>
  );
}

