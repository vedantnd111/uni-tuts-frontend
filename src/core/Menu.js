import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import '../style.css';
// import logo from './ut.png';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900", backgroundColor: "rgba(24, 108, 122, 0.575)" }
    }
    return { color: "#ffffff" };
}

const Menu = ({ history }) => (
    <div>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue-grey darken-3">
                    <Link to="/" className="brand-logo">Logo</Link>
                    <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link style={isActive(history, '/')} to="/" className="nav-item">Home</Link></li>
                        <li><Link to="/aboutus" style={isActive(history, '/aboutus')} className="nav-item">About us</Link></li>
                        {/* <li><Link to="/" className="nav-item">Shop</Link></li> */}
                        <li><Link to="/contactus" style={isActive(history, '/contactus')} className="nav-item">Contact us</Link></li>
                        {!isAuthenticated() && (<Link className="waves-effect waves-light btn" to="/signin"><i className="material-icons left">login</i>Log in</Link>)}
                        {isAuthenticated() && (<Link className="waves-effect waves-light btn"
                            onClick={() => {
                                signout(() => {
                                    history.push('/signin');
                                })
                            }}><i className="material-icons left">logout</i>Logout</Link>)}

                    </ul>
                </div>
            </nav>
        </div>

        <ul className="sidenav align-center" id="mobile-demo">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/aboutus" className="nav-item">About us</Link></li>
            <li><Link to="/contactus" className="nav-item">Contact us</Link></li>
            {!isAuthenticated() && (<li><Link to="/signin" className="waves-effect waves-light btn" style={{ textAlign: "center" }}><i className="material-icons left">login</i>login</Link></li>)}
            {isAuthenticated() && (<li><Link className="waves-effect waves-light btn" onClick={() => {
                signout(() => {
                    history.push('/signin');
                })
            }} style={{ textAlign: "center" }}><i className="material-icons left">logout</i>logout</Link></li>)}

        </ul>



    </div>
);

export default withRouter(Menu)