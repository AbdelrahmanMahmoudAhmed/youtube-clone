import React from "react";
import "./show-video.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DisplayHeader from "../../components/DisplayHeader/DisplayHeader";
import YouTubePlayer from "../../components/YoutubePlayer/YoutubePlayer";

function ShowVideo() {
  const navigate = useNavigate();
  return (
    <div className="display">
      <DisplayHeader />
      <div className="player-holder lg  container">
        <YouTubePlayer height="432" width="768" />
      </div>
      <div className="player-holder md container">
        <YouTubePlayer height="288" width="512" />
      </div>
      <div className="player-holder sm container">
        <YouTubePlayer height="180" width="320" />
      </div>
      <div className="button-holder">
        <Button variant="contained" color="error" onClick={() => navigate("/")}>
          Go To Search Page
        </Button>
      </div>
    </div>
  );
}

export default ShowVideo;
