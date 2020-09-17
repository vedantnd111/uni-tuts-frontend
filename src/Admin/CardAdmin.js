import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import ShowImage from '../User/ShowImage'
import '../style.css'

function Card({ standard, URL2, url }) {
    return (
        <div className="col-md-3 m-3">
            <div className="card">
                <h4 className="card-header">
                    <br />
                </h4>
                <div className="card-body">
                    <ShowImage item={standard} url={URL2} />
                    <br />
                    <h4>{URL2} : {standard.name}</h4>
                    <p>
                        {standard.description}
                    </p>

                </div>
                <Link to={`${url}/${standard._id}`} role="button" className="btn btn-outline-primary m-4" >
                    Go to {url}
                </Link>
            </div>
        </div>
    )
}

export default Card
