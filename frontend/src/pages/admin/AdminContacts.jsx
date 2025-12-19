import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const res = await api.get("/contact");
    setContacts(res.data);
  }

  return (
    <div className="admin-page">
      <h1>Admin – Contact Messages</h1>

      {contacts.length === 0 && <p>No messages yet.</p>}

      {contacts.map((c) => (
        <div key={c._id} className="admin-card">
          <p><strong>Name:</strong> {c.name}</p>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Message:</strong> {c.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminContacts;
