import React from 'react';
import {API} from '../configure';

function ShowImage({item,url}) {
    return (
        <div className="product-img">
            <img src={`${API}/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{maxHeight:'100%' , maxWidth:"100%"}} />
            
        </div>
    )
}

export default ShowImage
