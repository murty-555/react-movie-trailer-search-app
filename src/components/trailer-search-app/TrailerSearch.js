import React from "react";
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

const TrailerSearch = () => {
    const [video, setVideo] = useState("animal");
    const [videoURL, setVideoURL] = useState("https://youtu.be/YD7b4gU0HWQ?si=DyyboyYhTzmVAhSr")
  
    const changeHandler = (e) => {
      setVideo(e.target.value)
    }

    const searchHandler = () => {
        movieTrailer(video).then(res => {
          setVideoURL(res)
          console.log(res)
        })
      }
  return (
    <div className="trailer">
      <div className="search-box">
        <label>Search for any movies/shows</label>
        <input type="text" onChange={changeHandler} />
        <button onClick={searchHandler}>Search</button>
      </div>
      <ReactPlayer url={videoURL} controls={true} />
    </div>
  );
};

export default TrailerSearch;
