import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import Card from './Card';
import { fetchStandard, fetchSubjectsByStandard } from './apiUser';

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
        if (isAuthenticated()) {

            loadSubjects();
        }
    }, []);

    return (
        <div>
            <Layout title="Home" description="this is a home page" className="container-fluid">
                {!isAuthenticated() && (
                    <div className="mb-4">
                        <div className="row">

                            {standards.map((standard, i) => (
                                <Card key={i} standard={standard} />
                            ))}
                        </div>
                    </div>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 0 &&
                    (
                        <div className="mb-4">
                            <div className="row">
                                {subjects.map((subject, i) => (
                                    <Card key={i} standard={subject} />
                                ))}

                            </div>

                        </div>
                    )
                }

            </Layout>
        </div>
    )
}

export default Home
