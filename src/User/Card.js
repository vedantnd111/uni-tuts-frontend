import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../style.css'
import { isAuthenticated } from '../auth'

function Card({ standard, url,URL }) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h4 className="card-header">
                    <br />
                </h4>
                <div className="card-body">
                    <ShowImage item={standard} url={url} />
                    <br />
                    <h4>{url} : {standard.name}</h4>
                    <p>
                        {standard.description}
                    </p>

                </div>
                <Link to={!isAuthenticated() ? "/signin" : `/subject/topic/${standard._id}`} role="button" className="btn btn-outline-primary m-4" >
                    Go to {URL}
                </Link>
            </div>
        </div>
    )
}

export default Card
