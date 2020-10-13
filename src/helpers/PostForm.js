import React, { Fragment } from 'react'

function PostForm({ name, description, photo, url, clickSubmit, handleChange }) {
    return (
        <Fragment>
            <form onSubmit={clickSubmit}>
                <div className="form-group" style={{ display: photo === '' ? 'none' : '' }}>
                    <h6 className="text-muted">Select photo:</h6>
                    <label className="btn btn-secondary">
                        <input type="file" onChange={() => handleChange('photo')} name="photo" accept="image/*" />
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter Name:</label>
                    <input className="form-control" value={name} type="text" onChange={handleChange('name')} name="name" />
                </div>
                <div className="form-group">
                    <label className="text-muted font-weight-bold">Enter Description:</label>
                    <input className="form-control" value={description} type="text" onChange={handleChange('description')} name="description" />
                </div>
                <div className="form-group" style={{ display: url === '' ? 'none' : '' }}>
                    <label className="text-muted font-weight-bold">Enter URL:</label>
                    <input className="form-control" value={url} type="text" onChange={handleChange('url')} name="url" />
                </div>

                <button className="btn btn-outline-primary">Add Topic</button>
            </form>

        </Fragment>
    )
}

export default PostForm
