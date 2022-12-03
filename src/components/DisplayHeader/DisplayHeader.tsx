import React from "react";
import "./display-header.scss";

import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";

function DisplayHeader() {
  return (
    <header className="search-display-header">
      <div className="display-header-holder container">
        <div className="logo-holder">
          <YouTubeIcon sx={{ color: "#cc0000" }} style={{ fontSize: "62px" }} />
          <div className="text-logo">
            <p>
              YouTube <span>EG</span>
            </p>
          </div>
        </div>
        <div className="page-title">
          <p>Display Video</p>
        </div>
      </div>
      <div className="display-header-holder-media container">
        <div className="logo">
          <YouTubeIcon sx={{ color: "#fff" }} style={{ fontSize: "60px" }} />
        </div>
        <div className="page-title">
          <p>Display Video</p>
        </div>
      </div>
    </header>
  );
}

export default DisplayHeader;
