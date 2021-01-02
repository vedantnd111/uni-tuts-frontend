import React from 'react';
import {API} from '../configure';
import '../style.css';

function ShowImage({item,url}) {
    return (
        <div className="card-image waves-effect waves-block waves-light">

            <img
             src={`${API}/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="activator" />
            
            </div>
    )
}

export default ShowImage
