import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

import PropTypes from 'prop-types';


const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDisable, toggleDisable] = useState(false);

    const{
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    }

    return (
        <div className="container my-5">
            <div className="card shadow rounded-0 p-4">
                <h1 className="title-slim">Add Work Experience</h1>
                <small className="text-muted mb-3">* is required field</small>
                <form onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="* Job Title" name="title" required value={title} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="* Company" name="company" required value={company} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="* From date" name="from" required value={from} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group form-check">
                        <p><input type="checkbox" className="form-check-input" name="current" checked={current} value={current} onChange={() => {
                            setFormData({ ...formData, current: !current })
                            toggleDisable(!toDisable);
                        }} />{'  '} Current Job</p>
                    </div>
                    <div className="form-group">
                            <input type="date" className="form-control" placeholder="To date" name="to" value={to} onChange={e => onChange(e)} disabled={toDisable ? 'disabled' : ''} />
                        </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" placeholder="Job Description" name="description" required value={description} onChange={e => onChange(e)}></textarea>
                    </div>
                    <button className="btn btn-primary rounded-0 float-right" type="submit">Add Experience</button>
                </form>
            </div>
        </div>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(withRouter(AddExperience));
