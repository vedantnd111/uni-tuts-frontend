import React from 'react'

const ShowLoading = ({ loading }) =>
    loading &&
    <div className="container alert alert-warning">
        <h3>loading...</h3>
    </div>

export default ShowLoading
