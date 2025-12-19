import { useEffect, useState } from "react";
import api from "../services/api";
import { BASE_URL } from "../services/api";


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const response = await api.get("/projects");
      setProjects(response.data);
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-description">
            A selection of projects showcasing our technical expertise and creative work.
        </p>

      </div>

      {loading && <p>Loading projects...</p>}

      {error && <p>{error}</p>}

      {!loading && projects.length === 0 && (
        <p>No projects available right now.</p>
      )}

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <div className="project-image">
              <img
                src={`${BASE_URL}/${project.image}`}
                alt={project.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
   
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
