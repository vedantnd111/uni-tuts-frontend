import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { fetchTopicsBySubject } from '../User/apiUser';
import { isAuthenticated } from '../auth';
import CardView from './CardView';
import ShowError from '../helpers/ShowError';

function TopicsBySubject({subject=null}) {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(false);
    const history = new useHistory();
    let isPic= subject===null?true:false;
    // console.log("subject: ",subject);
    let subjectId =subject === null ?history.location.pathname.split('/')[2]:subject;
    // subjectId=subject;
    // const { user, token } = isAuthenticated();

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
        <div className={subject===null? "container":""}>
            <ShowError error={error} />
            <div className="card1">
                <ul className="list-group" >
                    <li className="list-group-item mb-2" style={{backgroundColor:"skyblue",border:"2px solid black"}}>
                        <div className="" style={{fontWeight:"bolder",fontSize:"25px"}}>Course Content</div>
                    </li>
                    {topics.map((topic, i) => (
                        <CardView key={i} topic={topic} isPic={isPic} />
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
