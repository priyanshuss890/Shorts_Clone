import React, { useState } from "react";
import "./App.css";
import { IoArrowBackCircle } from "react-icons/io5";

import VideoList from "./Components/VideoList/VideoList";
import Video from "./Components/Video/Video";


function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo((prevSelectedVideo) => {
      if (prevSelectedVideo && prevSelectedVideo.postId === video.postId) {
        return null; // Deselect the video if it is already selected
      } else {
        return video; // Set the clicked video as the new selected video
      }
    });
  };

  const handleBackClick = () => {
    setSelectedVideo(null);
  };

  return (
    <div className={`app ${selectedVideo ? "app--fullscreen" : ""}`}>
      {!selectedVideo ? (
        <div className="app__videoList">
          <VideoList handleVideoClick={handleVideoClick} />
        </div>
      ) : (
        <div className="app__videoPlayer">
         <div className="back-button" onClick={handleBackClick}>
            <IoArrowBackCircle className="backButtonIcon" />
          </div>
          <Video
            url={selectedVideo.submission.mediaUrl}
            channel={selectedVideo.creator.handle}
            description={selectedVideo.submission.description}
            song={selectedVideo.submission.title}
            likes={selectedVideo.reaction.count}
            messages={selectedVideo.comment.count}
            shares={selectedVideo.reaction.count}
          />
        </div>
      )}
    </div>
  );
}

export default App;
