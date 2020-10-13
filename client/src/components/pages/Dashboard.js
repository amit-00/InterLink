import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { getUserProfile } from '../../actions/profile';

import Spinner from '../layout/Spinner';
import DashScroller from '../dashboard/DashScroller';

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
                        <div className="col-lg-3">
                            <img className="mb-4 profile-avatar" src={ user && profile.user.avatar } alt=""/>
                            <Link to='/edit-profile' className="btn btn-primary btn-sm rounded-0 mb-3 non-mobile" >Edit Profile</Link>
                            <br/>
                            <small className="text-muted">Experience</small> 
                            <hr className="mt-0" />
                            {profile.experience.map(exp => (
                                <div key={exp._id} className="profile-experience mb-2 bg-light p-2">
                                    <p className='exp-title'> { exp.title } { exp.current && <span className="badge badge-primary align-middle float-right">Current</span>} </p>
                                    <p className="mb-2 exp-company" > { exp.company } </p>
                                    <p className="text-muted exp-sub"> {exp.location} </p>
                                    <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ exp.from }</Moment> - {' '}
                                    { exp.to === null ? (
                                        <p className="text-muted exp-sub d-inline"> Now </p>
                                    ) : (
                                        <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ exp.to }</Moment>
                                    ) }
                                </div>
                            ))}
                            <Link to='/add-experience' className="btn btn-light btn-sm rounded-0" ><i className="far fa-plus-square"></i> Add Experience</Link>
                            <br/>
                            <small className="text-muted">Skills</small> 
                            <hr className="mt-0" />
                            <ul className="profile-skills">
                                { profile.skills.map((skill, index) => <li key={index} ><span className="badge bg-black text-white" >{ skill }</span></li>) }
                            </ul>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <h1 className="title-slim d-inline mr-3" >{ user && profile.user.name }</h1>
                            <small className="text-muted"><i className="fas fa-map-marker-alt mr-1"></i>{ profile.location }</small>
                            <p className="text-primary mb-4">{ profile.status }</p>
                            <h5 className="title-slim">Social</h5>
                            { profile.social && (
                                <div className="social-links d-flex mb-4 justify-content-around">
                                    { profile.social.youtube && <a href={profile.social.youtube}><i className="fab fa-youtube fa-2x" style={{ color: "#FF0000" }}></i></a> }
                                    { profile.social.twitter && <a href={profile.social.twitter}><i className="fab fa-twitter fa-2x" style={{ color: "#00acee" }}></i></a> }
                                    { profile.social.linkedin && <a href={profile.social.linkedin}><i className="fab fa-linkedin fa-2x" style={{ color: "#0e76a8" }}></i></a> }
                                    { profile.social.facebook && <a href={profile.social.facebook}><i className="fab fa-facebook-square fa-2x" style={{ color: "#3b5998" }}></i></a> }
                                    { profile.social.instagram && <a href={profile.social.instagram}><i className="fab fa-instagram fa-2x text-warning"></i></a> }
                                </div>
                            )}
                            <h5 className="title-slim">Bio</h5>
                            <p className="bio-box" >{ profile.bio }</p>
                            <DashScroller profile={profile} />
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
