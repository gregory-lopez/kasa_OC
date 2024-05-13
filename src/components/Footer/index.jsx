import React from 'react';
import logo from '../../assets/LOGO_footer.png'
import '../../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;