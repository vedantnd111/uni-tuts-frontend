import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Redirect } from 'react-router-dom';
import { signInFetch, authenticate, isAuthenticated } from '../auth';

const SignIn = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectReferrer: false
    });

    const { email, password, error, loading, redirectReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signInFetch({ email, password })
            .then((data) => {
                // console.log(`data ${data} and data.error ${data.error}`);
                if (data.error || data.error === null) {
                    setValues({ ...values, error: data.error, loading: false });
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectReferrer: true
                        })
                    });
                }

            })
    };

    const showLoading = () => loading && <div className="alert alert-danger">
        <h2>loading...</h2>
    </div>;

    const redirectUser = () => {
        if (redirectReferrer) {
            return <Redirect to="/" />
        }
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    };

    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    };


    const signInForm = () => (
        <form className="form-group">
            <div>
                <label className="text-muted font-weight-bold">Enter email:</label>
                <input type="email" value={email} onChange={handleChange("email")} className="form-control my-2 border-700" />
            </div>
            <div>
                <label className="text-muted font-weight-bold">Enter password:</label>
                <input type="password" value={password} onChange={handleChange('password')} className="form-control my-2 border-700" />
            </div>

            <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>Sign in</button>

        </form>
    )

    return (<div>
        <Layout title="Sign In" description="this is a signIn page" className="container col-md-8 my-4 offset-md-2">
            {showLoading()}
            {showError()}
            {redirectUser()}
            {signInForm()}


        </Layout>
    </div>
    );
}
export default SignIn;

