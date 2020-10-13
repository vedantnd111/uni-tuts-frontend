import React from 'react'
import '../style.css'
function Layout({ title = "Title", description = "Description", children, className }) {
    return (
        <div>

            <div className="jumbotron" >
                <h1>{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>

                {children}
            </div>
            <footer className="m-4" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "25px" }}>&#169;</span> United Tutorials.pvt.ltd ,2020-2022.</footer>
        </div>
    )
}

export default Layout
