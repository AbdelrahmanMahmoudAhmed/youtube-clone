import React, { useState, useRef, useEffect } from "react";
import "./search.scss";

import type { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { turnOn, turnOff } from "../../store/reducers/global";
import { Button } from "@mui/material";
import api from "../../api/search";
import Header from "../../components/Header/Header";
import YoutubeChannel from "../../components/YoutubeChannel/YoutubeChannel";
import Loader from "../../components/Loader/Loader";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";
import YoutubePlaylist from "../../components/YoutubePlaylist/YoutubePlaylist";
import { AxiosResponse } from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Search() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [pageToken, setPageToken] = useState<String>("");
  const [prevPageToken, setPrevPageToken] = useState<String>("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.global.value);
  // const key = "AIzaSyAauIdmko8mUbrwBjdRzSgccFk0X73cKCU";
  // const key = "AIzaSyCEAvuKsmu42QESPGVUUhyoPGI_dFKVy0A";
  const key = "AIzaSyCW2eeoBhNiTqWqgNtfOoeEu5FO6ldiRAQ";

  const kinds = {
    video: "youtube#video",
    channel: "youtube#channel",
    playlist: "youtube#playlist",
  };
  const fetchVideos = async (word: string) => {
    console.log("word", word);
    dispatch(turnOn());
    try {
      const response: AxiosResponse = await api.get(
        `/search?key=${key}&q=${word}&part=snippet&maxResults=5`
      );
      setItems(response?.data?.items);
      setPageToken(response?.data?.nextPageToken);
      dispatch(turnOff());
    } catch (err: any) {
      dispatch(turnOff());
      toast.error(err?.message);
    }
  };
  const getNewResults = async () => {
    dispatch(turnOn());

    try {
      const response: AxiosResponse = await api.get(
        `/search?key=${key}&q=${search}&part=snippet&maxResults=10&pageToken=${pageToken}`
      );
      setItems(response?.data?.items);
      setPageToken(response?.data?.nextPageToken);
      setPrevPageToken(response?.data?.prevPageToken);
      window.scrollTo({
        top: 0,
        left: 0,
      });
      dispatch(turnOff());
    } catch (err: any) {
      dispatch(turnOff());
      toast.error(err?.message);
    }
  };

  const getLastResults = async () => {
    dispatch(turnOn());
    window.scrollTo({
      top: 0,
      left: 0,
    });
    try {
      const response: AxiosResponse = await api.get(
        `/search?key=${key}&q=${search}&part=snippet&maxResults=10&pageToken=${prevPageToken}`
      );
      setItems(response?.data?.items);
      setPageToken(response?.data?.nextPageToken);
      setPrevPageToken(response?.data?.prevPageToken);

      dispatch(turnOff());
    } catch (err: any) {
      dispatch(turnOff());
      toast.error(err?.message);
    }
  };

  return (
    <div className="search-page">
      {isLoading && <Loader />}

      <Header fetchVideos={fetchVideos} />

      {items.map((item: any, index) =>
        item?.id?.kind === kinds.video ? (
          <YoutubeVideo data={item} key={index} />
        ) : item?.id?.kind === kinds.channel ? (
          <YoutubeChannel data={item} key={index} />
        ) : (
          <YoutubePlaylist data={item} key={index} />
        )
      )}
      {items?.length ? (
        <div className="button-holder">
          <Button
            variant="contained"
            color="error"
            disabled={!prevPageToken}
            onClick={getLastResults}
          >
            Last 10 results
          </Button>
          <Button
            variant="contained"
            color="error"
            disabled={!pageToken}
            onClick={getNewResults}
          >
            New 10 results
          </Button>
        </div>
      ) : (
        <> {!isLoading && <p className="no-results"> No results found </p>}</>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Search;
