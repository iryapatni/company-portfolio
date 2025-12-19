import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminClients() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
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

    try {
      await api.post("/clients", {
        name,
        designation,
        description,
        image
      });

      setStatus("Client added successfully");
      setName("");
      setDesignation("");
      setDescription("");
      setImage("");

      fetchClients();
    } catch {
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
          placeholder="Client feedback"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
