import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Education from './Education';
import Repos from '../developers/Repos';

const DashScroller = ({ profile: { githubusername, education }, auth }) => {
    const [active, setActive] = useState('education');

    return (
        <div className="dash-scroller">
            <div className="scroll-btns d-flex mb-3">
                <p className={`title-slim scroll-btn mb-0 ${ active === 'education' && 'scroll-btn-active' }`} name="education" onClick={() => setActive('education')} >Education</p>
                { githubusername && <p className={`title-slim scroll-btn mb-0 ${ active === 'repos' && 'scroll-btn-active' }`} name="repos" onClick={() => setActive('repos')} >Repos</p>}
                
                
            </div>
            { active === 'education' && (
                <Fragment>
                    <Education education={ education } auth={ auth } />
                </Fragment>
            ) }
            { active === 'repos' && githubusername && (
                <Fragment>
                    <Repos username={ githubusername } />
                </Fragment>
            )}
        </div>
    )
}

DashScroller.propTypes = {
    profile: PropTypes.object.isRequired
}

export default DashScroller;
