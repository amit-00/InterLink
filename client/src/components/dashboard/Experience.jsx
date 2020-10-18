import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { delExperience } from '../../actions/profile';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const Experience = ({ experience, delExperience }) => {
    return (
        <div>
            {experience.map(exp => (
                <div key={exp._id} className="profile-experience mb-2 bg-light p-2">
                    <span onClick={() => delExperience(exp._id) } className="delete-edu float-right"><i className="far fa-window-close"></i></span>
                    <p className='exp-title'> { exp.title }</p>
                    <p className="mb-2 exp-company" > { exp.company } </p>
                    <p className="text-muted exp-sub"> {exp.location} </p>
                    <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ exp.from }</Moment> - {' '}
                    { exp.to === null ? (
                        <p className="text-muted exp-sub d-inline"> Now </p>
                    ) : (
                        <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ exp.to }</Moment>
                    ) }
                    { exp.current && <span className="badge badge-primary align-middle float-right">Current</span>}
                </div>
            ))}
            <Link to='/add-experience' className="btn btn-light btn-sm rounded-0" ><i className="far fa-plus-square"></i> Add Experience</Link>
        </div>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    delExperience: PropTypes.func.isRequired
}

export default connect(null, { delExperience })(Experience);
