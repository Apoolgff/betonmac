import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const socialLinks = [
  { url: 'https://instagram.com', icon: '/images/icons/instagram.png' },
  { url: 'https://facebook.com/', icon: '/images/icons/facebook.png' },
  { url: 'https://linkedin.com', icon: '/images/icons/linkedin.png' },
  { url: 'https://web.whatsapp.com/', icon: '/images/icons/whatsapp.png' },
  { url: 'https://facebook.com/', icon: '/images/icons/google-maps.png' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-layer">
      <div className="footer-right">
          <div className="footer-socials">
            {socialLinks.map((link, index) => (
              <img key={index} href={link.url} className="footer-social-link" src={link.icon}  />
            ))}
          </div>
        </div>
       
      
      <div className='farallelogram-container scale'>
         
          <div className='farallelogram farallelogram-c'></div>
          <div className='farallelogram farallelogram-a'></div>
          <div className='farallelogram farallelogram-b'></div>
          <div className='farallelogram farallelogram-d'></div>
          <div className='farallelogram farallelogram-e'></div>
          <div className='farallelogram farallelogram-f'></div>  
  </div>
      
        <div className="footer-center">
        <nav className='nav-links-footer '>
           
            <Link to="/productos" className="nav-item-footer">Productos</Link>
            <Link to="/institucional" className="nav-item-footer">Institucional</Link>
            <Link to="/obras" className="nav-item-footer">Obras</Link>
            <Link to="/contacto" className="nav-item-footer">Contacto</Link>
            <Link to="/calendario" className="nav-item-footer">Calendario</Link>
        </nav>
   
        </div>
        
    
      <div>
        
       
      </div>

      </div>
      <a href='https://betonmac.com/index.php/legal' className="footer-legal">Aviso Legal</a>
    </footer>
  );
};

export default Footer;
