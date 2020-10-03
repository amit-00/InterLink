import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import vid from '../../assets/Video.mp4';


import '../comp-css/home.css';

const Home = () => {
    return (
        <Fragment>
            <div className="showcase">
                <div className="video-container">
                    <video src={vid} autoPlay muted loop></video>
                </div>
                <div className="content">
                    <h1>Link with Developers</h1>
                    <h3>Sign up and start connecting now</h3>
                    <Link className="home-button home-button-primary mr-4">Login</Link>
                    <Link className="home-button home-button-secondary">Sign Up</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
