import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import { signUpFetch } from '../auth';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, });
        signUpFetch({ name, email, password })
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false });
                }
                else {
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    });
                }

            })
    };

    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    };

    const showSuccess = () => {
        return <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account. created please <Link to='/signin'>sign in</Link>
        </div>
    };

    const signupForm = () => (
        <form className="form-group">
            <div>
                <label className="text-muted font-weight-bold">Enter name:</label>
                <input type="text" value={name} onChange={handleChange("name")} className="form-control my-2 border-700" />
            </div>
            <div>
                <label className="text-muted font-weight-bold">Enter email:</label>
                <input type="email" value={email} onChange={handleChange("email")} className="form-control my-2 border-700" />
            </div>
            <div>
                <label className="text-muted font-weight-bold">Enter password:</label>
                <input type="password" value={password} onChange={handleChange('password')} className="form-control my-2 border-700" />
            </div>

            <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>Sign up</button>

        </form>
    )

    return (<div>
        <Layout title="Sign up" description="this is a signup page" className="container col-md-8 my-4 offset-md-2">
            {showError()}
            {showSuccess()}
            {signupForm()}

        </Layout>
    </div>
    );
}
export default Signup;