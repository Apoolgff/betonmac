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
                        <div className='harallelogram harallelogram-c harallelogram-logo'></div>
                        <div className='harallelogram harallelogram-a harallelogram-logo'></div>
                        <div className='harallelogram harallelogram-b harallelogram-logo'></div>
                        <div className='harallelogram harallelogram-d harallelogram-logo'></div>
                        <div className='harallelogram harallelogram-e harallelogram-logo'></div>
                        <div className='harallelogram harallelogram-f harallelogram-logo'></div>  
                </div>
                
                 
                </Link>
                <Link className='logo-text' to="/"><span>b</span>
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