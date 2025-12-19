import { useState, useEffect } from "react";
import api from "../../services/api";

function AdminProjects() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await api.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setStatus("Project added successfully");
      setName("");
      setDescription("");
      setImage(null);

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
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
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
