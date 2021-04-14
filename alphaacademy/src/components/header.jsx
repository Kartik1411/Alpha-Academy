import React from 'react';
import '../styles/header.css'
import iconfront from "../image/logo.png";

function Header () {

    return(
    <nav>
        <div className="header-image">
            <img src={iconfront} alt="" className="icon-image"/>
        </div>
    </nav>
)
}

export default Header;