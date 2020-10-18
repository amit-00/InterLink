import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Education from './Education';

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
                    <Education education={ profile.education }/>
                </Fragment>
            ) }
            { active === 'repos' && <div>Repos</div> }
        </div>
    )
}

DashScroller.propTypes = {
    profile: PropTypes.object.isRequired
}

export default DashScroller;
