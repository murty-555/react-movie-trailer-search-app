import React from "react";
import LazyImage from "../utils/LazyImage";
import startBtnImage from "../images/start-btn.png";
import { MdThumbUp } from "react-icons/md";
import "../styles/MovieCard.css";

let showPlay = true;
const MovieCard = ({ movie }) => {
    const movieImageStyle = showPlay ? {curosr: "pointer"} : {curosr: "default"}
  return (
    <div key={movie.EventCode} className="movie">
      <div className="movie-image" style={movieImageStyle}>
        <div className="movie-date">
          <span className="month">Mar</span>
          <span className="year">2018</span>
        </div>
        <LazyImage
          imageSrc={movie.EventImageUrl}
          className="image"
          alt={movie.EventTitle}
        />

        {showPlay && (
          <img src={startBtnImage} alt="play" className="start-btn" />
        )}

        <div className="movie-rating">
          <div className="flex-evenly">
            <MdThumbUp className="thumbsup-ico" />
            <div>{movie.ratings.wtsPerc}%</div>
          </div>
          <div className="flex-evenly">
            <div className="vote-count">{movie.ratings.wtsCount} votes</div>
          </div>
        </div>
      </div>
      <div key={movie.EventCode} className="movie-name">
        {movie.EventTitle}
      </div>
    </div>
  );
};

export default MovieCard;
