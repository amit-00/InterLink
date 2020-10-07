import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'

import vid from '../../assets/Video.mp4';


import '../comp-css/landing.css';

const Landing = ({ isAuthenticated }) => {

    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }

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
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
