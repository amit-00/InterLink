import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems, AuthMenuItems } from './MenuItems';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = ({ isAuthenticated }) => {
    const [clicked, setClicked] = useState(false);
    const [] = useState();

    const handleClick = () => {
        setClicked(!clicked);

    }

    const menu = () => {
        if(isAuthenticated){
            return AuthMenuItems;
        }
        else{
            return MenuItems;
        }
    };


    return (
        <Fragment>
            <nav className="bg-black">
                <div className="container-fluid navbar-items">
                    <h1 className="navbar-logo text-white" > <i className="fas fa-link"></i> InterLink</h1>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times text-white" : "fas fa-bars text-white"}></i>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        { menu().map((item, index) => {
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

Navbar.prototypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Navbar);
