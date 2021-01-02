import React from 'react'
// import { Fragment } from 'react';
import ReactPlayer from "react-player";
// import Tabbar from '../core/Tabbar';
// import GoBack from '../helpers/GoBack'
import '../style.css';


// function VideoView(props) {
//     return (
//         <div className="container-fluid">
//             <div className="player-wrapper">
//                 <ReactPlayer
//                     url={props.location.state.url}
//                     className="react-player"
//                     width="60%"
//                     height="50%"
//                     controls
//                     muted
//                     config={{
//                         youtube: {
//                             playerVars: { showinfo: 1 }
//                         }
//                     }} />
//             </div>
//             <div className="container-fluid">
//                 <Tabbar />
//             </div>
//          </div>
//     );
// }

const VideoView = props => {
    return (

        <div className="container h-60 w-50" style={{height:"200px"}}>

            <div className="player-wrapper">
                <ReactPlayer
                    url={props.location.state.url}
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls
                    muted
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 }
                        }
                    }} />
            </div>
        </div>
    );
}

export default VideoView
