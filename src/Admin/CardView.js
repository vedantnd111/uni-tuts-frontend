import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css';
import book1 from '../core/book1.jpg';

function CardView({ topic, isPic }) {

    return (
        <div>
            <Link className="list-group-item"
                // role="button"
                style={{ textDecoration: 'none', color: 'black' }}
                to={{ pathname: '/show/video', state: topic }}>
                <div style={{ fontWeight: "bold" }}>
                    {/* <div class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="card-panel grey lighten-5 z-depth-1"> */}
                    <div className="row valign-wrapper">
                        {isPic &&
                            <img src={book1} alt="img" style={{ height: "10%", width: "25%", border: "none" }} className="rounded float-left" />
                        }
                        <div className="col s4">
                            <span className="black-text" style={{ fontSize: "20px" }}>
                                {topic.name}
                            </span>
                            <div style={{ fontWeight: "500", color: "#666b68" }}>
                                {topic.description}
                            </div>
                        </div>
                    </div>
                    {/* </div>
                    </div> */}
                </div>
                {/* <h8>{topic.description}</h8> */}
            </Link>
        </div>
    )
}

export default CardView
