import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import Card from './Card';
import CardAdmin from '../Admin/CardAdmin';
import { fetchStandard, fetchSubjectsByStandard } from './apiUser';
import { Link } from 'react-router-dom';
import ShowError from '../helpers/ShowError';

function Home() {
    const { user, token } = isAuthenticated();
    const [standards, setStandards] = useState([]);
    const [error, setError] = useState(false);
    const [subjects, setSubjects] = useState([]);

    const loadStandards = () => {
        fetchStandard()
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setStandards(data);
                }
            })
    };
    const loadSubjects = () => {
        fetchSubjectsByStandard(user.standard, user._id, token)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setSubjects(data);
                }
            })

    };

    useEffect(() => {
        loadStandards();
        if (isAuthenticated() && isAuthenticated().user.role === 0) {

            loadSubjects();
        }
    });

    return (
        <div>
            <Layout title="Home" description="Welcome to UNITED TUTORIALS!!" className="container-fluid">
                {!isAuthenticated() && (
                    <div className="mb-4">
                        <ShowError error={error} />
                        <div className="row">

                            {standards.map((standard, i) => (
                                <Card key={i} standard={standard} url="standard" URL="subject" />
                            ))}
                        </div>
                    </div>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 0 &&
                    (
                        <div className="mb-4">
                            <ShowError error={error} />
                            <div className="row">
                                {subjects.map((subject, i) => (
                                    <Card key={i} standard={subject} url="subject" URL="topics" />
                                ))}

                            </div>

                        </div>
                    )
                }
                {isAuthenticated() && isAuthenticated().user.role === 1 &&
                    (
                        <div className="mb-4">
                            <div className="row">

                                {standards.map((standard, i) => (
                                    <CardAdmin key={i} standard={standard} URL2="standard" url="subject" />
                                ))}
                                <Link to="/standard/create" className="card m-4" role="button" >
                                    <div className="card-body">
                                        <i className="material-icons">add</i>
                                        <h1 style={{ color: 'black' }}>Add Standards</h1>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    )
                }

            </Layout>
        </div>
    )
}

export default Home
