import { skills } from "@/content/site";
import { DraggableSkillField } from "@/components/skills/DraggableSkillField";

export function SkillsSection() {
  return (
    <section id="skills" className="skills section-dark" data-theme="dark">
      <div className="site-shell">
        <div className="dark-heading-row">
          <div>
            <p className="section-eyebrow">04 / Skills &amp; tech</p>
            <h2>Engineering, from<br />code to cloud.</h2>
          </div>
          <p>I build software with the tools needed to develop, package, and deliver it—while growing practical cloud architecture knowledge.</p>
        </div>
        <DraggableSkillField skills={skills} />
      </div>
    </section>
  );
}

