import React from "react";
import "./VideoThumbnail.css";

const VideoThumbnail = ({ video, handleVideoClick, selectedVideo }) => {
    const { postId, submission,creator } = video;
    const {name}=creator;
    const { handle, thumbnail } = submission;
  
    const isSelected = selectedVideo && selectedVideo.postId === postId;

  
    const handleClick = () => {
      handleVideoClick(video);
    };
  
    return (
      <div
        className={`videoThumbnail ${isSelected ? "selected" : ""}`}
        onClick={handleClick}
      >
        <img src={thumbnail} alt={handle} className="videoThumbnail__image" />
        <div className="videoThumbnail__title">{name}</div>
      </div>
    );
  };
  

export default VideoThumbnail;
