import React from 'react'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'
import { GoCalendar } from "react-icons/go";
import { BiQuestionMark } from "react-icons/bi";


const Trailer = ({movie}) => {
    const trailerID = 1234
  return (
    <div className='trailer-container'>
        <iframe
            id={trailerID}
            title={movie.EventTitle}
            className='trailer-iframe'
            src={"htttps:/www.youtueb.com/embed/" + trailerID + "?autoplay=1&mute=1&enablejsapi=1"}
            frameBorder="0"
            allowTransparency="true"
            allowFullScree="true"
        />
        <div className="movie-details">
                <div className="title"> {movie.EventTitle} </div>
                <div className="language">
                    {movie.EventLanguage} ({movie.EventDimension})
                </div>
                <div className="genre-list">
                    {movie.EventGenre.split("|").map(genre => (
                        <div className="genre">{genre}</div>
                    ))}
                </div>

                <div className="rate-date flex-row">
                    <MdThumbUp className="icon" />
                    <div className="rate flex-column">
                        <div className="big-text">{movie.ratings.wtsPerc}%</div>
                        <div className="small-text">{movie.ratings.wtsCount} votes</div>
                    </div>

                    <GoCalendar className="icon margin-l-20" />
                    <div className="date flex-column">
                        <div className="big-text">{day + " " + month} </div>
                        <div className="small-text">{year}</div>
                    </div>
                </div>

                <div className="watch-qstn flex-row">
                    <div className="flex-center">
                        <MdThumbUp className="yes icon" />
                        <div className="yes text">will watch</div>
                        <div className="yes text">({movie.ratings.wtsCount})</div>
                    </div>
                    <div className="flex-center">
                        <BiQuestionMark className="maybe icon" />
                        <div className="maybe text">maybe</div>
                        <div className="maybe text">({movie.ratings.maybe})</div>
                    </div>
                    <div className="flex-center">
                        <MdThumbDown className="no icon" />
                        <div className="no text">won't watch</div>
                        <div className="no text">({movie.ratings.dwtsCount})</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Trailer