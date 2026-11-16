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
            <p>Projects I have built or am building, with the status and stack stated plainly.</p>
          </div>
        </Reveal>

        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.12}>
                <article className="project-card">
                  {project.image && (
                    <div
                      className="project-visual-wrapper"
                      style={project.brandColor ? { background: project.brandColor } : undefined}
                    >
                      <div className="project-visual-container">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1448}
                          height={1086}
                          sizes="(max-width: 900px) calc(100vw - 32px), 640px"
                          className="project-hd-image"
                          priority={index === 0}
                        />
                      </div>
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
                <p className="empty-kicker">More projects coming</p>
                <h3>Nothing listed yet.</h3>
              </div>
              <p>New work will appear here once it is ready to show.</p>
            </div>
          </Reveal>
        )}
      </div>
      <div className="projects-to-skills-grid" aria-hidden="true" />
    </section>
  );
}

