import React, { useState } from 'react';
import '../style.css';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { addStandards } from './apiAdmin';
import GoBack from '../helpers/GoBack';
import ShowLoading from '../helpers/ShowLoading';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';

function AddStandards() {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: '',
        description: '',
        photo: '',
        error: false,
        success: false,
        loading: false,
        formData: new FormData(),
        createdStandard: ''
    });

    const { name, description, photo, error, success, loading, formData, createdStandard } = values;

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, loading: true, error: false });
        addStandards(user._id, token, formData)
            .then(data => {
                console.log(`data ${data}`)
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false });
                }
                else {
                    setValues({
                        ...values,
                        name: ''
                        , description: ''
                        , photo: '',
                        error: false,
                        loading: false,
                        formData: '',
                        success: true,
                        createdStandard: data.name
                    });
                }
            })

    };
    const standardForm = () => {
        return (
            <form className="mb-3" onSubmit={clickSubmit}>
                <div className="form-group">
                    <h6 className="text-muted"> Select photo</h6>
                    <label className="btn btn-secondary">
                        <input type="file" onChange={handleChange('photo')} name="photo" accept="image/*" />
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter name:</label>
                    <input className="form-control" onChange={handleChange('name')} type="text" name="name" value={name} />
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter description:</label>
                    <textarea className="form-control" onChange={handleChange('description')} name="description" value={description} />
                </div>
                <button className="btn btn-outline-primary">Create Product</button>

            </form>

        )

    };
    return (
        <Layout title="Add new Standards!!" description={`Hi, ${user.name} you can add new Standards here!!`} className="container">
            <GoBack />
            <ShowLoading loading={loading} />
            <ShowSuccess success={success} msg={createdStandard} initial="Standard" />
            <ShowError error={error} />
            {standardForm()}

        </Layout>
    );


}

export default AddStandards
