import React from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';

const Header = (props) => {
    return (
        <header data-test="header-comp">
            <div className="logo">
                <img data-test="logo-img" src={Logo} alt="Logo" />
            </div>      
        </header>
    )
};

export default Header;