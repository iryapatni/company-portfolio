import { Link } from "react-router-dom";

function AdminLinks() {
  return (
    <div className="admin-links">
      <p>Admin Panel</p>

      <Link to="/admin/projects">Projects</Link>
      <Link to="/admin/clients">Clients</Link>
      <Link to="/admin/contacts">Contacts</Link>
      <Link to="/admin/subscribers">Subscribers</Link>
    </div>
  );
}

export default AdminLinks;
