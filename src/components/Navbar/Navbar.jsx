import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import HamburgerMenu from './Hamburguesa';
import '../utils/Button.css'


const Navbar = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 });
    return (
        <header id="header" className="navbar">
            {/*Seccion del Logo*/}
           { <div className="logo">
                <Link to="/">
                <div className='harallelogram-container harallelogram-logo-container'>
                        <div className='harallelogram harallelogram-c harallelogram-entrance-left'></div>
                        <div className='harallelogram harallelogram-a harallelogram-entrance-left'></div>
                        <div className='harallelogram harallelogram-b harallelogram-entrance-top'></div>
                        <div className='harallelogram harallelogram-d harallelogram-entrance-top'></div>
                        <div className='harallelogram harallelogram-e harallelogram-entrance-right'></div>
                        <div className='harallelogram harallelogram-f harallelogram-entrance-right'></div>  
                </div>
                
                 
                </Link>
                <Link className='logo-text' to="/">
                <span>b</span>
                <span>e</span>
                <span>t</span>
                <span>o</span>
                <span>n</span>
                <span>m</span>
                <span>a</span>
                <span>c</span>
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