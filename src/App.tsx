import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Search from "./pages/Search/Search";
import ShowVideo from "./pages/ShowVideo/ShowVideo";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/display/:videoId" element={<ShowVideo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
