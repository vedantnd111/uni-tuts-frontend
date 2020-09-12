import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../style.css'

function Card({ standard }) {
    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <h4 className="card-header">
                    <br />
                </h4>
                <div className="card-body">
                    <ShowImage item={standard} url="standard" />
                    <br />
                    <h4>Standard : {standard.name}</h4>
                    <p>
                        {standard.description}
                    </p>

                </div>
                <Link to="/signin" role="button" className="btn btn-outline-primary m-4" >
                    Go to Topics
                </Link>
            </div>
        </div>
    )
}

export default Card
