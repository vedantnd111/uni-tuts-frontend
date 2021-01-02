import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../style.css'
import { isAuthenticated } from '../auth';

function Card({ standard, url,URL }) {
    return (
        <div className="col-md-4">
        <div className="card medium">
             <ShowImage item={standard} url={url} />
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{standard.name}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-action grey">
                <Link to={!isAuthenticated() ? "/signin" : `/subject/topic/${standard._id}`} role="button" className="white-text" style={{ fontWeight: "500" }}>View {URL}</Link>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>{standard.description}</p>
            </div>
        </div>
    </div>


  )
}

export default Card
