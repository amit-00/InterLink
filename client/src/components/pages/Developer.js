import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';
import DashScroller from '../dashboard/DashScroller';
import Experience from '../dashboard/Experience';

const Developer = ({ match, profile: { profile, loading }, auth, getProfileById }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id])

    return loading || profile === null ? <Spinner /> : (
        <Fragment>
            <div className="container">
                <div className="d-flex mt-3">
                    <Link to='/developers' className="btn bg-black rounded-0 text-white mr-3">Go Back</Link>
                    { auth.isAuthenticated && auth.loading === false && 
                        auth.user._id === profile.user._id && 
                        <Link to='/edit-profile' className="btn btn-primary rounded-0 non-mobile" >Edit Profile</Link> }
                </div>
                <div className="row my-4">
                    <div className="col-lg-3">
                        <img className="mb-4 profile-avatar" src={ profile.user.avatar } alt=""/>
                        <br/>
                        <small className="text-muted">Experience</small> 
                        <hr className="mt-0" />
                        <Experience experience={ profile.experience } auth={ false } />
                        <br/>
                        <small className="text-muted">Skills</small> 
                        <hr className="mt-0" />
                        <ul className="profile-skills">
                            { profile.skills.map((skill, index) => <li key={index} ><span className="badge bg-black text-white" >{ skill }</span></li>) }
                        </ul>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        <h1 className="title-slim d-inline mr-3" >{ profile.user.name }</h1>
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
                        <DashScroller profile={ profile } auth={ false } />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Developer.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Developer);
