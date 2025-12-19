import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminProjects() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const res = await api.get("/projects");
    setProjects(res.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Saving project...");

    try {
      await api.post("/projects", {
        name,
        description,
        image
      });

      setStatus("Project added successfully");
      setName("");
      setDescription("");
      setImage("");
      fetchProjects();
    } catch (err) {
      setStatus("Failed to add project");
    }
  }

  return (
    <div className="admin-page">
      <h1>Admin – Projects</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL (https://...)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">Add Project</button>
        {status && <p>{status}</p>}
      </form>

      <hr />

      <h2>Existing Projects</h2>
      {projects.map((p) => (
        <p key={p._id}>{p.name}</p>
      ))}
    </div>
  );
}

export default AdminProjects;
