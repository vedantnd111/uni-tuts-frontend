import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { fetchTopicsBySubject } from '../User/apiUser';
import { isAuthenticated } from '../auth';
import CardView from './CardView';
import ShowError from '../helpers/ShowError';

function TopicsBySubject() {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(false);
    const history = new useHistory();
    const subjectId = history.location.pathname.split('/')[2];
    const { user, token } = isAuthenticated();

    const loadTopics = () => {

        fetchTopicsBySubject(subjectId)
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setTopics(data);
                    setError(false);
                }
            })
    };


    useEffect(() => {
        loadTopics();
    });

    return (
        <div className="container">
            <ShowError error={error} />
            <div className="card m-4">
                <ul className="list-group list-group-flush" >
                    {topics.map((topic, i) => (
                        <CardView key={i} topic={topic} />
                    ))}
                    {isAuthenticated() && isAuthenticated().user.role === 1 && (<li className="list-group-item">
                        <Link to={`/topic/create/${subjectId}`}
                            role="button"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            {/* <i class="material-icons">add</i> */}
                            <h1 style={{ color: 'black' }}>Add Topics</h1>
                        </Link>
                    </li>)}

                </ul>
            </div>
        </div>
    )
}

export default TopicsBySubject
