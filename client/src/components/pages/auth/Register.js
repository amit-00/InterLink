import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

import Alert from '../../layout/Alert';


import '../../comp-css/register.css';

const Register = ({ setAlert }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const { name, email, password, cpassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(password !== cpassword){
            setAlert('Passwords do not match', 'danger');
        }

    }

    return (
        <div className="register-page">
            <div className="card register-card rounded-0 p-4 shadow">
                <h1 className="heading mb-5">Register</h1>
                <form className="form" onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input type="text" className="form-control rounded-0" placeholder="Full Name" value={name} name="name" onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control rounded-0" placeholder="Email" value={email} name="email" onChange={e => onChange(e)} required/>
                        <small className="form-text text-muted">This site uses Gravatar for profile pictures</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-0" placeholder="Password" minLength="6" value={password} name="password" onChange={e => onChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-0" placeholder="Confirm Password" minLength="6" value={cpassword} name="cpassword" onChange={e => onChange(e)}/>
                    </div>
                    <input type="submit" className="btn btn-primary rounded-0 btn-block" value="Sign Up" />
                </form>
                <small className="form-text text-muted">Aleady have an account? <Link to="/login" >Sign in</Link> </small>
            </div>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
