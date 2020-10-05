import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { login } from '../../../actions/auth';

import '../../comp-css/login.css';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        
        login({ email, password });

    };

    if(isAuthenticated){
       return <Redirect to="/dashboard" />
    }

    return (
        <div className="register-page">
            <div className="card login-card rounded-0 p-4 shadow">
                <h1 className="heading mb-5">Sign In</h1>
                <form className="form" onSubmit={e => onSubmit(e)} >
                    <div className="form-group mb-4">
                        <input type="email" className="form-control rounded-0" placeholder="Email" value={email} name="email" onChange={e => onChange(e)} required/>
                    </div>
                    <div className="form-group mb-5">
                        <input type="password" className="form-control rounded-0" placeholder="Password" minLength="6" value={password} name="password" onChange={e => onChange(e)}/>
                    </div>
                    <input type="submit" className="btn btn-primary rounded-0 btn-block" value="Login" />
                    <small className="form-text text-muted">Don't have an account? <Link to="/register" >Sign up</Link> </small>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
