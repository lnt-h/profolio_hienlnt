import Image from "next/image";
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
            <p>Thoughtfully engineered applications, built to solve tangible problems for real users.</p>
          </div>
        </Reveal>
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <article className="project-card">
                  {project.image && (
                    <div className="project-visual">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-image"
                        sizes="(max-width: 900px) 100vw, 85vw"
                        priority
                      />
                    </div>
                  )}
                  <div className="project-card-copy">
                    <div className="project-meta-row">
                      <span className="project-status-badge">{project.status}</span>
                      <span className="project-role">{project.role}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-tags">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action-btn"
                          data-cursor="interactive"
                        >
                          {link.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
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

