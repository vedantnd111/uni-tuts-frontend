import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth'
import { useHistory } from 'react-router-dom';
import { addSubjects } from './apiAdmin';
import Layout from '../core/Layout';
import GoBack from '../helpers/GoBack';
import ShowLoading from '../helpers/ShowLoading';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';

function AddSubjects() {
    let history = new useHistory();
    const standardId = history.location.pathname.split('/')[3];
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: '',
        description: '',
        photo: '',
        error: '',
        success: '',
        loading: '',
        formData: new FormData(),
        createdSubject: ''
    });
    const { name, description, error, success, loading, formData, createdSubject } = values;


    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        formData.set('standard', standardId);
        setValues({ ...values, [name]: value });

    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, loading: true, error: false });
        addSubjects(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    setValues({
                        ...values,
                        error: '',
                        name: '',
                        description: '',
                        photo: '',
                        createdSubject: data.name,
                        loading: false,
                        formData: '',
                        success: true
                    })
                }
            })
    };

    const showLoading = () => (
        loading && <div className="alert alert-warning"><h3>loading...</h3></div>
    );
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            <h5>{error}</h5>
        </div>
    }

    const showSuccess = () => {
        return <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h3> Subject {createdSubject} is successfully created!!</h3>
        </div>
    }
    const newSubjectForm = () => {
        return (
            <form onSubmit={clickSubmit}>
                <div className="form-group">
                    <h6 className="text-muted">Select photo:</h6>
                    <label className="btn btn-secondary">
                        <input type="file" onChange={() => handleChange('photo')} name="photo" accept="image/*" />
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter Name:</label>
                    <input className="form-control" value={name} type="text" onChange={() => handleChange('name')} name="name" />
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter Description:</label>
                    <input className="form-control" value={description} type="text" onChange={() => handleChange('description')} name="description" />
                </div>
                <button className="btn btn-outline-primary">Add Subject</button>
            </form>
        );
    };

    return (
        <Layout title="Add subjects!!" description={`Hi ${user.name} you can add subjects!!`} className="container">
            <GoBack />
            <ShowLoading loading={loading} />
            <ShowSuccess success={success} msg={createdSubject} initial="Subject" />
            <ShowError error={error} />
            {newSubjectForm()}

        </Layout>
    )
}

export default AddSubjects
