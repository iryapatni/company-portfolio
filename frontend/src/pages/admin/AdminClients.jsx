import { useState, useEffect } from "react";
import api from "../../services/api";

function AdminClients() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    const res = await api.get("/clients");
    setClients(res.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Saving client...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await api.post("/clients", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setStatus("Client added successfully");
      setName("");
      setDesignation("");
      setDescription("");
      setImage(null);

      fetchClients();
    } catch (err) {
      setStatus("Failed to add client");
    }
  }

  return (
    <div className="admin-page">
      <h1>Admin – Clients</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Designation / Company"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <textarea
          placeholder="Client feedback / description"
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

        <button type="submit">Add Client</button>
        {status && <p>{status}</p>}
      </form>

      <hr />

      <h2>Existing Clients</h2>
      {clients.map((c) => (
        <p key={c._id}>{c.name}</p>
      ))}
    </div>
  );
}

export default AdminClients;
