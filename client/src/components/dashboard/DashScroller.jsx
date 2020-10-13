import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Education = ({ profile }) => {
    return(
        <Fragment>
            {profile.education.map(edu => (
                <div key={edu._id} className="profile-experience bg-light p-3 mb-2">
                    <p className='exp-title'> { edu.degree } { edu.current && <span className="badge badge-primary align-middle float-right">Current</span>} </p>
                    <p className="mb-2 exp-company" > { edu.school } </p>
                    <p className="text-muted exp-sub mb-3"> { edu.fieldofstudy } </p>
                    <p className="text-muted exp-sub mb-1 d-inline" >From: </p>
                    <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ edu.from }</Moment>
                    <br/>
                    <p className="text-muted exp-sub d-inline" >To: </p>
                    <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ edu.current ? 'current' : edu.to }</Moment>
                    <p className="text-muted exp-sub mt-3 mb-0">Description: { edu.description }</p>
                </div>
            ))}
        </Fragment>
    )
}

const GithubRepos = ({ profile }) => {
    return(
        <Fragment>
            Github
        </Fragment>
    )
};

const DashScroller = ({ profile }) => {
    const [active, setActive] = useState('education');

    return (
        <div className="dash-scroller">
            <div className="scroll-btns d-flex mb-3">
                <p className={`title-slim scroll-btn mb-0 ${ active === 'education' && 'scroll-btn-active' }`} name="education" onClick={() => setActive('education')} >Education</p>
                <p className={`title-slim scroll-btn mb-0 ${ active === 'repos' && 'scroll-btn-active' }`} name="repos" onClick={() => setActive('repos')} >Repos</p>
                
                
            </div>
            { active === 'education' && (
                <Fragment>
                    <Education profile={ profile }/>
                    <Link to='/add-education' className="btn btn-light btn-sm rounded-0" ><i className="far fa-plus-square"></i> Add Education</Link>
                </Fragment>
            ) }
            { active === 'repos' && <GithubRepos profile={ profile } /> }
        </div>
    )
}

export default DashScroller;
