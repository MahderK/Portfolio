import { projects } from "./projects";

function ProjectsView() {
  return (
    <div className="projects">
      {projects.map((p) => (
        <div key={p.id} className="project-card">
          <div className="project-header">
            <span className="project-title">{p.title}</span>
            <span className="project-status">[{p.status}]</span>
          </div>
          <p className="project-desc">{p.description}</p>
          <div className="project-tags">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="project-links">
            {p.github && (
              <a href={p.github} target="_blank">
                GitHub
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank">
                Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsView;
