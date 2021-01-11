import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from '../User/ShowImage'
import '../style.css'
// import {isAuthenticated} from "../auth";

function Card({ standard, URL2, url }) {
    return (
    <div class="col-md-4">
    <Link class="card medium" to={`/${url}/${standard._id}`}  style={{textDecoration:"none"}}>
            <ShowImage item={standard} url={url} />
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{standard.name}</span>
        </div>
        {/* <div class="card-action grey">
            <Link to={`${url}/${standard._id}`} role="button" class="white-text" style={{ fontWeight: "500" }}>Go to {url}</Link>
        </div> */}
        {/* <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>{standard.description}</p>
        </div> */}
    </Link>
</div>


     );
}

export default Card
