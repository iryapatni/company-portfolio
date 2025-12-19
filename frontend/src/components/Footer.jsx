import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Company</h3>
        <p>
          We are a digital-focused company delivering scalable and user-centric
          solutions for modern businesses.
        </p>
        <p className="footer-note">
          © {new Date().getFullYear()} Company. All rights reserved.
        </p>
      </div>

      {import.meta.env.DEV && (
        <div className="admin-links">
          <h4>Admin Panel</h4>
          <Link to="/admin/projects">Projects</Link>
          <Link to="/admin/clients">Clients</Link>
          <Link to="/admin/contacts">Contacts</Link>
          <Link to="/admin/subscribers">Subscribers</Link>
        </div>
      )}
    </footer>
  );
}

export default Footer;
