import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import '../../comp-css/login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <div className="register-page">
            <div className="card login-card rounded-0 p-4 shadow">
                <h1 className="heading mb-5">Sign In</h1>
                <form className="form" >
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

export default Login;
