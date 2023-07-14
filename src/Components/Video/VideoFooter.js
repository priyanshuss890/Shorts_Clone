import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./VideoFooter.css";

function VideoFooter({ channel, description }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        
          <strong> { "@ "+channel}</strong>
        
        <p>
          {showMore ? description : description.substring(0, 100)}
          {description.length > 100 && (
            <span onClick={toggleShowMore}>
              <strong>{ showMore ? " Show less " : " Show more "}</strong>
              <MdExpandMore className="videoFooter__icon" />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default VideoFooter;
