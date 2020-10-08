import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/profile';

import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

import '../comp-css/dashboard.css';

const Dashboard = ({ getUserProfile, auth: { user } , profile: { loading, profile } }) => {
    useEffect(() => {
        getUserProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading && profile === null ? <Spinner /> : (

        <Fragment>
        { profile !== null ? (
            
            <Fragment>
                <h1>{ user && user.name }</h1>
            </Fragment>

        ) : (
            <div className="no-profile">
                <div className="card shadow rounded-0 no-profile-card">
                    <p>You have not setup a profile</p>
                    <Link className="btn btn-primary rounded-0" to="/create-profile">Create Profile</Link>
                </div>
            </div>
        )}
        </Fragment>
    )
}

Dashboard.prototypes = {
    getUserProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getUserProfile })(Dashboard);
