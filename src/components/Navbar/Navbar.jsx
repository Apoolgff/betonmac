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
                <div className='parallelogram-container'>
                        <div className='parallelogram parallelogram-c'></div>
                        <div className='parallelogram parallelogram-a'></div>
                        <div className='parallelogram parallelogram-b'></div>
                        <div className='parallelogram parallelogram-d'></div>
                        <div className='parallelogram parallelogram-e'></div>
                        <div className='parallelogram parallelogram-f'></div>  
                </div>
                
                 
                </Link>
                <Link className='logo-text' to="/">betonmac</Link>
                
            </div>}
             {/*Seccion de Links*/}
             <div>
            {isDesktopOrLaptop ? <Menu /> : <HamburgerMenu />}
            </div>
        </header>
    );
};

export default Navbar;