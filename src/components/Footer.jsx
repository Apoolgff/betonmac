import React from 'react';
import './Footer.css';

const socialLinks = [
  { url: 'https://instagram.com', icon: '/images/icons/instagram.png' },
  { url: 'https://linkedin.com', icon: '/images/icons/linkedin.png' },
  { url: 'https://web.whatsapp.com/', icon: '/images/icons/whatsapp.png' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src='https://betonmac.com/images/Imagenes/Logo/Logo.png' alt="Company Logo" className="footer-logo" />
        <a href='https://betonmac.com/index.php/legal' className="footer-legal">Aviso Legal</a>
      </div>
      <div className="footer-center">
        <div className="footer-socials">
          {socialLinks.map((link, index) => (
            <img key={index} href={link.url} className="footer-social-link" src={link.icon}  />
          ))}
        </div>
      </div>
      <div className="footer-right">
        <img className="footer-location-icon" src='/images/icons/ubicacion.png' />
        <p className="footer-address">Av. Circunvalación Y Camino San Carlos Km 4,5.
          5000 Córdoba - Argentina -</p>
        <p className="footer-phone">(+54 - 351) 569-3100 / (+54 - 351) 464-2107</p>
      </div>
    </footer>
  );
};

export default Footer;
