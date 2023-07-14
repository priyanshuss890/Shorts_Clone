import React, { useRef, useState } from "react";
import { HiOutlinePlay, HiOutlinePause } from "react-icons/hi";
import { FiPlay } from "react-icons/fi";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="video" onClick={togglePlay}>
      <video
        className="video__player"
        ref={videoRef}
        src={url}
      ></video>
      <div className="video__content">
          <VideoSidebar likes={likes} messages={messages} shares={shares} />

        <div className="video__footer">
          <VideoFooter channel={channel} description={description} song={song} />
        </div>
        {playing ? (
          <HiOutlinePause className="video__pauseButton" />
        ) : (
          <FiPlay className="video__playButton" />
        )}
      </div>
    </div>
  );
}

export default Video;
