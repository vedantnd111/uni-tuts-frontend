import React, { useState } from 'react'
import { isAuthenticated } from '../auth'
// import { fetchStandard, fetchSubjectsByStandard } from '../User/apiUser';
import { useHistory } from 'react-router-dom'
import {  addTopics } from './apiAdmin';
import Layout from '../core/Layout';
import GoBack from '../helpers/GoBack';
import ShowSuccess from '../helpers/ShowSuccess';
import ShowError from '../helpers/ShowError';
import ShowLoading from '../helpers/ShowLoading';

function AddTopics() {
    const history = new useHistory();
    const { user, token } = isAuthenticated();
    const subjectId = history.location.pathname.split('/')[3];
    // let photo = '';

    const [values, setValues] = useState({
        name: '',
        description: '',
        url: "",
        error: '',
        subject: '',
        success: '',
        loading: '',
        formData: new FormData(),
        createdTopic: ''
    });
    const { name, description, url, error, success, loading, formData, createdTopic } = values;

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        formData.set('subject', subjectId);
        setValues({ ...values, [name]: value });

    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, loading: true, error: false });
        addTopics(user._id, token, formData)
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
                        url: "",
                        subject: '',
                        createdTopic: data.name,
                        loading: false,
                        formData: '',
                        success: true
                    })
                }
            })
    };
    const newSubjectForm = () => {
        return (
            <form onSubmit={clickSubmit}>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter Name:</label>
                    <input className="form-control" value={name} type="text" onChange={handleChange('name')} name="name" />
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter Description:</label>
                    <input className="form-control" value={description} type="text" onChange={handleChange('description')} name="description" />
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter URL:</label>
                    <input className="form-control" value={url} type="text" onChange={handleChange('url')} name="url" />
                </div>

                <button className="btn btn-outline-primary">Add Topic</button>
            </form>
        );
    };

    return (
        <Layout title="Add Topics!!" description={`Hi ${user.name} you can add topics in this subject!!`} className="container">
            <GoBack />
            <ShowLoading loading={loading} />
            <ShowSuccess success={success} msg={createdTopic} initial="Topic" />
            <ShowError error={error} />
            {newSubjectForm()}

        </Layout>
    )
}

export default AddTopics
