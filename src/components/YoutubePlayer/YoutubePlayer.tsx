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
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  //128 x 72
  //   896 x 504
  // 768 x 432	 640 x 360	960 x 540
  // 512 x 288	384 x 216
  const params = useParams();
  let videoId = params.videoId;

  const opts: YouTubeProps["opts"] = {
    height: props.height,
    width: props.width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters

      autoplay: true,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}

export default YoutubePlayer;
