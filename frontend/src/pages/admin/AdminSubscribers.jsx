import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminSubscribers() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  async function fetchSubscribers() {
    const res = await api.get("/newsletter");
    setEmails(res.data);
  }

  return (
    <div className="admin-page">
      <h1>Admin – Newsletter Subscribers</h1>

      {emails.length === 0 && <p>No subscribers yet.</p>}

      <ul>
        {emails.map((e) => (
          <li key={e._id}>{e.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSubscribers;
