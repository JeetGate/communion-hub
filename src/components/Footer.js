import React from "react";

const Footer = () => (
  <footer className="footer">
    <p>© 2025 EventHub. All rights reserved. | Developed by <strong>Jeet Gate</strong></p>
    <nav>
      <button onClick={() => alert('Privacy Policy Coming Soon!')} className="link-style">
        Privacy Policy
      </button>
      <button onClick={() => alert('Terms of Service Coming Soon!')} className="link-style">
        Terms of Service
      </button>
      <button onClick={() => alert('Contact Us Coming Soon!')} className="link-style">
        Contact Us
      </button>
    </nav>
  </footer>
);

export default Footer;
