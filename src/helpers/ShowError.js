import React from 'react'

function ShowError({error}) {
    return <div className="container alert alert-danger mt-2" style={{ display: error ? '' : 'none' }}>
            <h6 style={{textAlign:"center",fontWeight:"700"}}>{error}</h6>
        </div>
}

export default ShowError
