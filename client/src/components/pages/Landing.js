import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import vid from '../../assets/Video.mp4';


import '../comp-css/landing.css';

const Landing = () => {
    return (
        <Fragment>
            <div className="showcase">
                <div className="video-container">
                    <video src={vid} autoPlay muted loop></video>
                </div>
                <div className="content">
                    <h1>Link with Developers</h1>
                    <h3>Sign up and start connecting now</h3>
                    <Link className="land-button land-button-primary mr-4" to='/login'>Login</Link>
                    <Link className="land-button land-button-secondary" to='/register'>Sign Up</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;
