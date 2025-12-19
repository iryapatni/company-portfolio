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
    </footer>
  );
}

export default Footer;
