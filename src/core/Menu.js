import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" }
    }
    return { color: "#ffffff" };
}

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 1 &&
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
    </div>
);

export default withRouter(Menu)