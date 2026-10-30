import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects section-light" data-theme="light">
      <div className="site-shell">
        <Reveal>
          <div className="projects-header">
            <div>
              <p className="section-eyebrow">03 / Featured projects</p>
              <h2>Work with a reason<br />to exist.</h2>
            </div>
            <p>Real project stories will appear here after their role, status, media, and links are verified.</p>
          </div>
        </Reveal>
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <article className="project-card">
                  <div className="project-visual" />
                  <div className="project-card-copy">
                    <span>{project.status}</span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.15}>
            <div className="projects-empty">
              <div className="empty-index">01—03</div>
              <div>
                <p className="empty-kicker">Project archive in preparation</p>
                <h3>No placeholder projects.<br />Only verified work.</h3>
              </div>
              <p>This section intentionally stays honest while project details are being prepared.</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

