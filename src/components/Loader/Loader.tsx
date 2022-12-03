import React from "react";
import "./loader.scss";
import { LinearProgress, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className="loader">
      <div className="linear-loader">
        <LinearProgress
          color="inherit"
          style={{ backgroundColor: "#c00", color: "#fca8a8" }}
        />
      </div>
      <div className="circular-loader">
        <CircularProgress sx={{ color: "#aaa" }} />
      </div>
    </div>
  );
}

export default Loader;
