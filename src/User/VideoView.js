import React from 'react'
import ReactPlayer from "react-player"
import GoBack from '../helpers/GoBack'


function VideoView(props) {
    return (
        <div
            className="d-flex justify-content-center align-items-center flex-column" >
            <div>
                <ReactPlayer
                    url={props.location.state.url}
                    className="react-player"
                    width="1200px"
                    height="650px"
                    style={{ borderRadius: '5px' }}
                />
            </div>

            <div className="mt-2">
                <h1>{props.location.state.name}</h1>
            </div>
            <div>
                <h5>
                    {props.location.state.description}
                </h5>
            </div>
            <GoBack />
        </div>
    );
}

export default VideoView
