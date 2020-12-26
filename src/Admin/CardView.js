import React from 'react'
import {  Link } from 'react-router-dom'
import '../style.css';

function CardView({ topic }) {

    return (
        <Link className="list-group-item"
            role="button"
            style={{ textDecoration: 'none', color: 'black' }}
            to={{ pathname: '/show/video', state: topic }}>
            <h4>{topic.name}</h4>
            <h8>{topic.description}</h8>
        </Link>
    )
}

export default CardView
