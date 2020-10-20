import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../actions/profile';

import Spinner from '../layout/Spinner';
import DevItem from '../developers/DevItem';

import PropTypes from 'prop-types';

import '../comp-css/developers.css'


const Developers = ({ profile: { loading, profiles } , getAllProfiles }) => {
    useEffect(() => {
        getAllProfiles();
    }, [getAllProfiles]);

    return (
        <div className="container my-4" >
            <h1 className="title-slim">Developers</h1>
            <p className="title-slim">View and link with other developers</p>
            { loading ? <Spinner /> : (
                <div className="dev-grid">
                    { profiles.map(profile => <DevItem key={ profile._id } profile={ profile } /> ) }
                </div>
            )}
        </div>
    )
}

Developers.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getAllProfiles })(Developers);
