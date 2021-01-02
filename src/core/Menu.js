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
        {/* <ul className="nav nav-tabs bg-secondary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 &&
                <li>
                    <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">
                        Dashboard
            </Link>
                </li>
            }

            {isAuthenticated() && isAuthenticated().user.role === 1 &&
                <li>
                    <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">
                        Dashboard
            </Link>
                </li>
            }

            {!isAuthenticated() &&
                (<li>
                    <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
                        signup
                </Link>
                </li>
                )}
            {!isAuthenticated() && <li>
                <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">
                    signin
                </Link>
            </li>
            }
            {isAuthenticated() && <li>
                <span className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => {
                    signout(() => {
                        history.push('/signin');
                    })
                }}>
                    signout
                </span>
            </li>}




        </ul>
     */}

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

            <ul className="sidenav align-center" id="mobile-demo">
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/aboutus" className="nav-item">About us</Link></li>
                <li><Link to="/contactus" className="nav-item">Contact us</Link></li>
                {!isAuthenticated() && (<li><Link to="/signin" className="waves-effect waves-light btn" style={{ textAlign: "center" }}><i className="material-icons left">login</i>login</Link></li>)}
                {isAuthenticated() && (<li><Link className="waves-effect waves-light btn"onClick={() => {
                                signout(() => {
                                    history.push('/signin');
                                })
                            }} style={{ textAlign: "center" }}><i className="material-icons left">logout</i>logout</Link></li>)}
                
                {/* <Link className="waves-effect waves-light btn"><i className="material-icons left">login</i>Login</Link> */}
            </ul>

        </div>

    </div>
);

export default withRouter(Menu)