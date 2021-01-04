import React from 'react'

function ShowError({error}) {
    return <div className="alert alert-danger mt-2" style={{ display: error ? '' : 'none' }}>
            <h5 style={{textAlign:"center"}}>{error}</h5>
        </div>
}

export default ShowError
