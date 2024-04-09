import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../Assets/college-video.mp4'

function Videoplayer({VideoPlay, SetVideoPlay}) {
 
    const player = useRef(null);
 
    const closePlayer = (e)=>{
        if(e.target === player.current){
            SetVideoPlay(false);
        }
    }

    return (
    <div className={`videoplayer ${VideoPlay ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
