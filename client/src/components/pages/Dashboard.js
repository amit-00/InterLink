import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/profile';

import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Dashboard = ({ getUserProfile, auth: { user } , profile: { loading, profile } }) => {
    useEffect(() => {
        getUserProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading && profile === null ? <Spinner /> : (

        <div className="container">
            <div className="profile-card">
                <h1>{ user && user.name }</h1>
                <img src={profile.user.avatar} alt=""/>
                
            </div>
        </div>
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
