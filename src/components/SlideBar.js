import React from 'react'
import { isActive } from '../helpers/Active';
import { Link } from 'react-router-dom';


function SlideBar({ history }) {
    return (
        <div style={{ width: "100%" }}>
            <ul className="nav nav-tabs mb-1" id="pills-tab" role="tablist">
                <li className="nav-item" style={{ width: "50%", textAlign: "center" }}> <Link className="nav-link text-dark" style={isActive(history, "/signin")} id="pills-signin-tab" data-toggle="pill" to="/signin" role="tab" aria-controls="pills-signin" aria-selected="true">Sign In</Link> </li>
                <li className="nav-item" style={{ width: "50%", textAlign: "center" }}> <Link className="nav-link text-dark" style={isActive(history, "/signup")} id="pills-signup-tab" data-toggle="pill" to="/signup" role="tab" aria-controls="pills-signup" aria-selected="false">Sign Up</Link> </li>
            </ul>
        </div>
    )
}

export default SlideBar
