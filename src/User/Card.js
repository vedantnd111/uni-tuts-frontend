import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../style.css'
// import { isAuthenticated } from '../auth';

function Card({ standard, url, URL }) {
    return (
        <div className="col-md-4">
            <Link className="card medium" to={`/${URL}/${standard._id}`} style={{ textDecoration: "none",border:"none" }}>
                <ShowImage item={standard} url={url} />
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{standard.name}
                        <span style={{ textDecoration: "none", float: "right", color: "orange" }}>&#8377; 10</span> </span>
                    <span className="grey-text">{standard.description}</span>
                    <div>
                        <h5><Link to="/pay" className="badge badge-primary text-white">Pay &#8377; 10</Link></h5>
                        <span className="grey-text text-4" style={{ fontFamily: "bold" }}>author comes here</span>
                    </div>
                </div>
                {/* <div className="card-action grey">
                <Link to={!isAuthenticated() ? "/signin" : `/subject/topic/${standard._id}`} role="button" className="white-text" style={{ fontWeight: "500" }}>View {URL}</Link>
            </div> */}
                {/* <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>{standard.description}</p>
            </div> */}
            </Link>
        </div>


    )
}

export default Card
