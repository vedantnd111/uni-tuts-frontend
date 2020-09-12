import React from 'react'
import '../style.css'
function Layout({ title = "Title", description = "Description", children, className }) {
    return (
        <div>

            <div className="jumbotron">
                <h1>{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>

            {children}
            </div>
        </div>
    )
}

export default Layout
