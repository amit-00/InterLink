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
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-3">
                            <img className="mb-4 profile-avatar" src={ user && profile.user.avatar } alt=""/>
                            <br/>
                            <small className="text-muted">Experiences</small> 
                            <hr className="mt-0" />
                            <div className="profile-experience">
                                <p className='exp-title'> Developer <span className="badge badge-primary align-middle float-right">Current</span> </p>
                                <p className="mb-2 exp-company" >Tesla</p>
                                <p className="text-muted exp-sub"> San Fransisco, CAL </p>
                                <p className="text-muted exp-sub"> From: 8-10-2018, To: present </p>
                            </div>
                            <br/>
                            <small className="text-muted">Skills</small> 
                            <hr className="mt-0" />
                            <ul className="profile-skills">
                                <li><span className="badge bg-black text-white" >JAVASCRIPT</span></li>
                                <li><span className="badge bg-black text-white" >HTML</span></li>
                                <li><span className="badge bg-black text-white" >CSS</span></li>
                                <li><span className="badge bg-black text-white" >PYTHON</span></li>
                                
                            </ul>
                            {/* {profile.experience.map(exp => (
                                <div className="experience">
                                    <h5>{ exp.title }</h5>
                                    <p className="mb-1" >{ exp.company }</p>
                                    <small className="text-muted"> {exp.location} </small>
                                    <small className="text-muted"> from:{exp.from}, to:{ exp.current ? 'present' : exp.to } </small>
                                </div>
                                
                            ))} */}
                        </div>
                        <div className="col-md-9">

                        </div>
                    </div>
                </div>
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
