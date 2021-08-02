import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const { user: { name, email, role } } = isAuthenticated();

    const AdminLinks = () => {
        return (
            <div className="card mb-5">
                <h2 className="card-header">
                    Admin Links
                </h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/standard">
                            Create Standard
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/topic">
                            Create Topic
                        </Link>
                    </li>
                </ul>

            </div>
        );
    }

    const AdminInfo = () => {
        return (
            <div className="mx-4">
                <div className="card">
                    <h2 className="card-header">
                        Admin information
                    </h2>
                    <ul className="list-group">
                        <li className="list-group-item">Name:{name}</li>
                        <li className="list-group-item">email:{email}</li>
                        <li className="list-group-item  ">role:{role === 1 ? "Admin" : "Registered User"}</li>
                    </ul>

                </div>
            </div>
        );


    };

    return (
        <Layout title="Admin Dashboard" description={`Good day ${name}`} className="container-fluid" >
            <div className="row">
                <div className="col-md-3">
                    <AdminLinks />
                </div>
                <div className="col-md-9">
                    <AdminInfo />
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard
