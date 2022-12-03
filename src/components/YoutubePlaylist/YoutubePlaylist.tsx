import React from "react";
import "./youtube-playlist.scss";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
interface Props {
  data: any;
}
function YoutubePlaylist(props: Props) {
  return (
    <div className="youtube-playlist">
      <div className="playlist-holder container">
        <div className="img">
          <div className="overlay">
            <div className="overlay-content">
              <SubscriptionsTwoToneIcon
                sx={{ color: "#f1f3f4" }}
                style={{ fontSize: "18px" }}
              />
              <span>117</span>
            </div>
          </div>
          <img src={props.data?.snippet?.thumbnails?.high?.url} alt="" />
        </div>
        <div className="playlist-content">
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

export default YoutubePlaylist;
