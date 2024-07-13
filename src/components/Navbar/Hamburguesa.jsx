import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './Hamburguesa.css'

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ fontSize: '34px', color: '#BC0A0A' }}
      >
        &#9776;
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/" className="burger-item">Inicio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/productos" className="burger-item">Productos</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/institucional" className="burger-item">Institucional</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/obras" className="burger-item">Obras</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contacto" className="burger-item">Contacto</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/calendario" className="burger-item">Calendario</Link></MenuItem>
      </Menu>
    </div>
  );
}