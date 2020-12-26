import React from 'react'
import ReactPlayer from "react-player";
import Tabbar from '../core/Tabbar';
// import GoBack from '../helpers/GoBack'
import '../style.css';


function VideoView(props) {
    return (
        <div className="container-fluid row">
            <div className="col-md-9" style={{borderRight:"1px solid black"}}>
                <div className="player-wrapper">
                    <ReactPlayer
                        url={props.location.state.url}
                        className="react-player"
                        width="100%"
                        height="75%"
                        controls
                        muted
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            }
                        }} />
                </div>
                <div>
                    <Tabbar />
                </div>
            </div>
                <div className="col-md-3">
                    <h1>It includes topic of same subject and class</h1>

                </div>
        </div>
    );
}

export default VideoView
