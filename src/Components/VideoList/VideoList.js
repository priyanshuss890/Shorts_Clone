import React, { useState, useEffect } from "react";
import VideoThumbnail from "./VideoThumbnail";
import Pagination from "../Pagination/Pagination";
import "./VideoList.css";

const VideoList = ({ handleVideoClick }) => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(3);

  useEffect(() => {
    fetchVideos(currentPage)
      .then((data) => {
        if (data && data.data && data.data.posts) {
          setVideos(data.data.posts);
          console.log(data.data.totalPages)
          // setTotalPages(data.data.totalPages);
        }
      })
      .catch((error) => {
        console.log("Error fetching videos:", error);
      });
  }, []);

  const fetchVideos = async (page) => {
    console.log("Fetching videos for page:", page);
    const response = await fetch(
      `https://internship-service.onrender.com/videos?page=${page}`
    );
    const data = await response.json();
    console.log("Fetched videos:", data);
    return data;
  };

  const handleVideoClickInternal = (video) => {
    handleVideoClick(video);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchVideos(pageNumber)
      .then((data) => {
        if (data && data.data && data.data.posts) {
          setVideos(data.data.posts);
        }
      })
      .catch((error) => {
        console.log("Error fetching videos:", error);
      });
  };

  return (
    <div>
    <div className="videoList">
      {videos.map((video) => (
        <VideoThumbnail
          key={video.postId}
          video={video}
          handleVideoClick={handleVideoClick}
        />
      ))} </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
   
    </div>
  );
};

export default VideoList;
