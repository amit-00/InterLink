import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import '../../comp-css/register.css';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const { name, email, password, cpassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <div className="register-page">
            <div className="card register-card rounded-0 p-4">
                <h1 className="heading">Register</h1>
                <form className="form" >
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

export default Register;
