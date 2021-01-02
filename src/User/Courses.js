import React from 'react'
import { isAuthenticated } from '../auth';
import ShowError from '../helpers/ShowError';
import Card from './Card';
import CardAdmin from '../Admin/CardAdmin';
import { Link } from 'react-router-dom';

function Courses({ error, standards, subjects }) {
    // let standards2 = [];
    // let subjects2 = [];
    // let error2 = "";
    // console.log("props ", props);
    // console.log("props.location ", props.standards);
    // if (props !== "undefined") {
    //     standards2 = props.standards;
    //     subjects2 = props.subjects;
    //     error2 = props.error;
    // }
    // else {

    //     standards2 = standards;
    //     error2 = error;
    //     subjects2 = subjects;
    // }

    return (
        <div>
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

        </div>
    )
}

export default Courses
