import React from 'react';
import logo from '../../assets/LOGO_footer.png'
import '../../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="footer-logo" />
      <h2 className="footer-text">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;