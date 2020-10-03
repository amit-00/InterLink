import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [] = useState();

    const handleClick = () => {
        setClicked(!clicked);

    }


    return (
        <Fragment>
            <nav className="bg-black">
                <div className="container-fluid navbar-items">
                    <h1 className="navbar-logo text-white" > <i className="fas fa-link"></i> InterLink</h1>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times text-white" : "fas fa-bars text-white"}></i>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        { MenuItems.map((item, index) => {
                            return(
                                <li key={index}><Link className={item.cNames} to={item.link} >{item.title}</Link></li>
                            );
                        }) }
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;
