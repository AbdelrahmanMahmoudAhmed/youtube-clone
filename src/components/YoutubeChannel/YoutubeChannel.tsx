import React from "react";
import "./youtube-channel.scss";

interface Props {
  data: any;
}
function YoutubeChannel(props: Props) {
  return (
    <div className="youtube-channel">
      <div className="channel-holder container">
        <div className="img">
          <img src={props.data?.snippet?.thumbnails?.high?.url} alt="" />
        </div>
        <div className="channel-content">
          <div className="title">
            <h3>{props.data?.snippet?.title}</h3>
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

export default YoutubeChannel;
