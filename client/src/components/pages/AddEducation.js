import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

import PropTypes from 'prop-types';


const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDisable, toggleDisable] = useState(false);

    const{
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history);
    }

    return (
        <div className="container my-5">
            <div className="card shadow rounded-0 p-4">
                <h1 className="title-slim">Add Education</h1>
                <small className="text-muted mb-3">* is required field</small>
                <form onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="* School" name="school" required value={school} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="* Degree or Certificate" name="degree" required value={degree} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="* Field of Study" name="fieldofstudy" required value={fieldofstudy} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="* From date" name="from" required value={from} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group form-check">
                        <p><input type="checkbox" className="form-check-input" name="current" checked={current} value={current} onChange={() => {
                            setFormData({ ...formData, current: !current })
                            toggleDisable(!toDisable);
                        }} />{'  '} Currently Enrolled</p>
                    </div>
                    <div className="form-group">
                            <input type="date" className="form-control" placeholder="To date" name="to" value={to} onChange={e => onChange(e)} disabled={toDisable ? 'disabled' : ''} />
                        </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" placeholder="Program Description" name="description" required value={description} onChange={e => onChange(e)}></textarea>
                    </div>
                    <button className="btn btn-primary rounded-0 float-right" type="submit">Add Education</button>
                </form>
            </div>
        </div>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation));
