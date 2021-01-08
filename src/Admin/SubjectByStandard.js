import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import ShowError from '../helpers/ShowError';
import { fetchSubjectsByStandard } from '../User/apiUser';
import CardAdmin from './CardAdmin';
import '../style.css';
import Card from '../User/Card';
import ShowImage from '../User/ShowImage'

const SubjectByStandard = () => {
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(false);
    const history = new useHistory();
    const standardId = history.location.pathname.split('/')[2];
    const { user, token } = isAuthenticated();

    const loadSubjects = () => {

        fetchSubjectsByStandard(standardId)
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setSubjects(data);
                    setError(false);
                }
            })
    };

    useEffect(() => {
        loadSubjects();
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <ShowError error={error} />

                {subjects.map((subject, i) => (
                    <Card key={i} standard={subject} url="subject" URL="topic" />
                ))}
                {isAuthenticated() && isAuthenticated().user.role === 1 && (<Link to={`/subject2/create/${standardId}`} className="card m-4" role="button" >
                    <div className="card-body">
                        <i class="material-icons">add</i>
                        <h1 style={{ color: 'black' }}>Add subjects</h1>
                    </div>
                </Link>)}

            </div>
        </div>
    )
};

export default SubjectByStandard
