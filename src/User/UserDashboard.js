import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'
// import { Link } from 'react-router-dom';

function UserDashboard() {
    const { user: { name, email, role } } = isAuthenticated();

    // const UserLinks = () => {
    //     return (
    //         <div className="card mb-5">
    //             <h2 className="card-header">
    //                 User Links
    //             </h2>
    //             <ul className="list-group">
    //                 <li className="list-group-item">
    //                     <Link to="/update/profile">
    //                         My Profile
    //                     </Link>
    //                 </li>
    //             </ul>

    //         </div>
    //     );
    // }

    const UserInfo = () => {
        return (
            <div className="card mb-5">
                <h2 className="card-header">
                    User information
                </h2>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role === 1 ? "Admin" : "Registered User"}</li>
                </ul>

            </div>
        );


    };

    return (
        <Layout title="Dashboard" description={`Good day ${name}`} className="container" >
            <div className="row">
                <div className="col-md-9">
                    <UserInfo />
                </div>
            </div>
        </Layout>
    )
}

export default UserDashboard
