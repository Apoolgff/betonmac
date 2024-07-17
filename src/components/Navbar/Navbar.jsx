import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import HamburgerMenu from './Hamburguesa';


const Navbar = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 });
    return (
        <header id="header" className="navbar">
            {/*Seccion del Logo*/}
           { <div className="logo">
                <Link to="/">
                
                    <img src="https://betonmac.com/images/Imagenes/Logo/Logo.png" alt="logo betonmac" />
                </Link>
            </div>}
             {/*Seccion de Links*/}
             <div>
            {isDesktopOrLaptop ? <Menu /> : <HamburgerMenu />}
            </div>
        </header>
    );
};

export default Navbar;