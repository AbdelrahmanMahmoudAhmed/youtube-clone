import React from "react";
import "./youtube-video.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any;
}
function YoutubeVideo(props: Props) {
  const navigate = useNavigate();

  const goToDisplay = (videoId: string): void => {
    navigate(`/display/${videoId}`);
  };

  return (
    <div className="youtube-video">
      <div className="video-holder container">
        <div className="img">
          <img
            src={props.data?.snippet?.thumbnails?.high?.url}
            alt=""
            onClick={() => goToDisplay(props.data?.id?.videoId)}
          />
        </div>
        <div className="video-content">
          <div className="title">
            <h3 onClick={() => goToDisplay(props.data?.id?.videoId)}>
              {props.data?.snippet?.title}
            </h3>
            <p> {props.data?.snippet?.channelTitle} </p>
          </div>
          <div className="description">
            <p>{props.data?.snippet?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;
