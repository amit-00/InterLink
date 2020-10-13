import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateUserProfile, getUserProfile } from '../../actions/profile';
import PropTypes from 'prop-types';

import '../comp-css/create-profile.css';

const EditProfile = ({ profile: { profile, loading }, updateUserProfile, getUserProfile, history })=> {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const [showSocial, setShowSocial] = useState(false);

    useEffect(() => {
        getUserProfile();

        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(','),
            githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social.twitter ? '' : profile.social.twitter,
            facebook: loading || !profile.social.facebook ? '' : profile.social.facebook,
            linkedin: loading || !profile.social.linkedin ? '' : profile.social.linkedin,
            youtube: loading || !profile.social.youtube ? '' : profile.social.youtube,
            instagram: loading || !profile.social.instagram ? '' : profile.social.instagram,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[loading]);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const toggleSocial = e => {
        e.preventDefault();
        setShowSocial(!showSocial);
    };

    const onSubmit = e => {
        e.preventDefault();
        updateUserProfile(formData, history, true);
    }

    return (
        <div className="create-profile-page">
            <div className="container">
                <div className=" create-card mb-0">
                    <h1 className="mb-4" >Create Profile</h1>
                    <small className="text-muted">*required-field</small>
                    <form className="mt-4" onSubmit={e => onSubmit(e)} >
                        <div className="form-group">
                            <select className="form-control rounded-0" name="status" value={status} onChange={e => onChange(e)}>
                                <option value="0">* Select professional status</option>
                                <option value="Developer">Developer</option>
                                <option value="Junior Developer">Junior Developer</option>
                                <option value="Senior Developer">Senior Developer</option>
                                <option value="Manager">Manager</option>
                                <option value="Student or Learning">Student or Learning</option>
                                <option value="Instructor">Instructor</option>
                                <option value="Intern">Intern</option>
                                <option value="Other">Other</option>
                            </select>
                            <small className="form-text text-muted">Select current professional status</small>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control rounded-0" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
                            <small className="form-text text-muted">Name of current company</small>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control rounded-0" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} /> 
                            <small className="form-text text-muted">City and State/Province you reside (ex. Toronto, ON)</small>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control rounded-0" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} /> 
                            <small className="form-text text-muted">Personal website url</small>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control rounded-0" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} /> 
                            <small className="form-text text-muted">Use commas to separate skills (ex. HTML, CSS, JAVASCRIPT, ...)</small>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control rounded-0" placeholder="Github Username" name="githubusername" value={githubusername} onChange={e => onChange(e)} />
                            <small className="form-text text-muted">Github username to show repos</small>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control rounded-0" rows="3" placeholder="Bio" name="bio" value={bio} onChange={e => onChange(e)} ></textarea>
                            <small className="form-text text-muted">Bio about yourself</small>
                        </div>
                        <button className="btn bg-black text-white rounded-0 mb-4" onClick={e => toggleSocial(e)} >Add Social Media Links</button>

                        { showSocial && (
                        <Fragment>
                            <div className="form-group social-group">
                            <i className="fab fa-twitter fa-2x social-logo" style={{ color: "#00acee"}}></i>
                            <input type="text" className="form-control rounded-0" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} /> 
                            </div>
                            <div className="form-group social-group">
                                <i className="fab fa-facebook-square fa-2x social-logo" style={{ color: "#3b5998" }}></i>
                                <input type="text" className="form-control rounded-0" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} /> 
                            </div>
                            <div className="form-group social-group">
                                <i className="fab fa-linkedin fa-2x social-logo" style={{ color: "#0e76a8" }}></i>
                                <input type="text" className="form-control rounded-0" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} /> 
                            </div>
                            <div className="form-group social-group">
                                <i className="fab fa-youtube fa-2x social-logo" style={{ color: "#FF0000" }}></i>
                                <input type="text" className="form-control rounded-0" placeholder="Youtube URL" name="youtube" value={youtube} onChange={e => onChange(e)} /> 
                            </div>
                            <div className="form-group social-group">
                                <i className="fab fa-instagram fa-2x text-warning social-logo"></i>
                                <input type="text" className="form-control rounded-0" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} /> 
                            </div>
                        </Fragment> )}
                        <button type="submit" className="btn btn-primary rounded-0 float-right mb-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditProfile.propTypes = {
    updateUserProfile: PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { updateUserProfile, getUserProfile })(withRouter(EditProfile));
