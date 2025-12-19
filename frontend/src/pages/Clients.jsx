import { useEffect, useState } from "react";
import api from "../services/api";
import { BASE_URL } from "../services/api";


function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
    } catch (err) {
      setError("Failed to load clients");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="clients-page">
      <div className="page-header">
        <h1 className="page-title">Clients</h1>
        <p className="page-description">
        Trusted by clients who value quality, reliability, and long-term partnerships.
        </p>

      </div>

      {loading && <p>Loading clients...</p>}
      {error && <p>{error}</p>}

      {!loading && clients.length === 0 && (
        <p>No client data available.</p>
      )}

      <div className="projects-container">
        {clients.map((client) => (
          <div className="project-card" key={client._id}>
            <div className="client-avatar">
                <img
                    src={project.image}
                    alt={client.name}
                />
                </div>


            <div className="project-content">
              <h3 className="project-title">{client.name}</h3>
              <p className="project-description">
                {client.description}
              </p>
              <p style={{ fontSize: "13px", color: "#666" }}>
                {client.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
