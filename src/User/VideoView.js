import React from 'react'
// import { Fragment } from 'react';
// import ReactPlayer from "react-player";
import TopicsBySubject from '../Admin/TopicsBySubject';
// import Tabbar from '../core/Tabbar';
// import GoBack from '../helpers/GoBack'
import '../style.css';
import App2 from '../components/App2';

const VideoView = props => {
    console.log(props.location.state.url.split("/")[3]);
    return (
        <div className="row">
            <div className="col-md-9" style={{border:"1px solid black",backgroundColor:"black",height:"70%"}}>
            {/* <div className="player-wrapper">
            <ReactPlayer
                url={props.location.state.url}
                className="react-player"
                width="100%"
                height="0%"
                controls
                muted
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    }
                }} />
        </div> */}
        <div class="video-container responsive-video" controls>
        <iframe src={`//www.youtube.com/embed/${props.location.state.url.split("/")[3]}`} frameborder="0" allowfullscreen></iframe>
      </div>
            </div>
            <div className="col-md-3" >
                {/* <h1>course-content-appear here</h1> */}
                <TopicsBySubject subject={props.location.state.subject} />
            </div>
            <div className="col-md-9">
                <App2 />
            </div>
        </div>

    );
}

export default VideoView
