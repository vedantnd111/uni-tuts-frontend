import React from 'react'

function showSuccess({success,msg,initial}) {
    return <div className="container alert alert-info" style={{ display: success ? '' : 'none' }}>
        <h5> {initial} {msg} is successfully created!!</h5>
    </div>
}

export default showSuccess
