import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
// import { Link } from 'react-router-dom';
import { signUpFetch, isAuthenticated } from '../auth';
import { fetchStandard } from './apiUser';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';


const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
        standards: [],
        standard: ''

    });

    const { name, email, password, error, success, standard, standards } = values;
    const { user, token } = isAuthenticated();

    const init = () => {
        fetchStandard()
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, standards: data });
                }
            })
            .catch()
    };

    useEffect(() => {
        init();
    }, []);


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, });
        signUpFetch({ name, email, password,standard }, user._id, token)
            .then((data) => {

                if (data.error) {
                    console.log(data);
                    setValues({ ...values, error: data.error, success: false });
                }
                else {
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true,
                        standards: [],
                        standard: ''
                    });
                }

            })
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
            <div className="form-group">
                <label className="text-muted font-weight-bold">Select standard:</label>
                <select className="form-control" onChange={handleChange('standard')} value={standard} >
                    <option>please select standard</option>

                    {standards &&
                        standards.map((c, i) => (
                            <option key={i} value={c._id}>{c.name}</option>
                        )
                        )}
                </select>
            </div>

            <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>Sign up</button>

        </form>
    )

    return (<div>
        <Layout title="Sign up" description="this is a signup page" className="container col-md-8 my-4 offset-md-2">
           <ShowError error={error} />
           <ShowSuccess initial="new" msg="account" />
            {signupForm()}

        </Layout>
    </div>
    );
}
export default Signup;