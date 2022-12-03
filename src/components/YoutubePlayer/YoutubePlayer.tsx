import React from "react";
import "./youtube-player.scss";
import YouTube, { YouTubeProps } from "react-youtube";
import { useParams } from "react-router-dom";

interface Props {
  width: any;
  height: any;
}
function YoutubePlayer(props: Props) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const params = useParams();
  let videoId = params.videoId;

  const opts: YouTubeProps["opts"] = {
    height: props.height,
    width: props.width,
    playerVars: {
      autoplay: true,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

export default YoutubePlayer;
