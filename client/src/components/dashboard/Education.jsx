import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { delEducation } from '../../actions/profile';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const Education = ({ education, delEducation }) => {
    return(
        <Fragment>
            {education.map(edu => (
                <div key={edu._id} className="profile-experience bg-light p-3 mb-2">
                    <span onClick={() => delEducation(edu._id)} className="delete-edu float-right"><i className="far fa-window-close"></i></span>
                    <p className='exp-title'> { edu.degree } { edu.current && <span className="badge badge-primary align-middle ml-5">Current</span>} </p>
                    <p className="mb-2 exp-company" > { edu.school } </p>
                    <p className="text-muted exp-sub mb-3"> { edu.fieldofstudy } </p>
                    <p className="text-muted exp-sub mb-1 d-inline" >From: </p>
                    <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ edu.from }</Moment>
                    <br/>
                    <p className="text-muted exp-sub d-inline" >To: </p>
                    { edu.to === null ? (
                        <p className="text-muted exp-sub d-inline"> Now </p>
                    ) : (
                        <Moment className="text-muted exp-sub" format='YYYY/MM/DD' >{ edu.to }</Moment>
                    ) }
                    <p className="text-muted exp-sub mt-3 mb-0">Description: { edu.description } </p>
                </div>
            ))}
            <Link to='/add-education' className="btn btn-light btn-sm rounded-0" ><i className="far fa-plus-square"></i> Add Education</Link>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    delEducation: PropTypes.func.isRequired
}

export default connect(null, { delEducation })(Education);