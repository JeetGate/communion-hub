import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>CommunionHub</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/events" style={styles.link}>Events</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#333", color: "#fff" },
  logo: { margin: 0 },
  navLinks: { listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 },
  link: { color: "#fff", textDecoration: "none", fontSize: "18px" }
};

export default Header;
