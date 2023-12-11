import React, { Suspense, useEffect, useState } from "react";
import AppliedFilters from "./AppliedFilters";
import MovieCard from "./MovieCard";
import { languageList } from "../Data/languages";
import dummyData from "../dummyData.json";
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [listItems, setListItems] = useState([]);
  // console.log(listItems)

  useEffect(() => {
    let moviesList = [];
    for (const key in dummyData.moviesData) {
      // console.log(key)
      let movie = dummyData.moviesData[key];
      moviesList.push(movie);
    }
    setListItems(moviesList);
    console.log(listItems);
  }, []);
  // useEffect(() => {
  //     fetch("dummyData.json")
  //     .then(res => res.json())
  //     .then(jsonData => {
  //         setListItems(jsonData.moviesData)
  //         console.log(jsonData)
  //     })
  //     console.log(listItems)
  //     // fetchList();
  // },[])

  // const fetchList = async () => {
  //     const response = await fetch('dummyData.json');
  //     const jsonData = await response.json();
  //     setListItems(jsonData.moviesData)
  //     console.log(listItems)
  // }
  return (
    <div className="dashboard">
      <AppliedFilters />
      <div className="movie-list">
        {listItems &&
          listItems.length > 0 &&
          listItems.map((movie) => (
            <div key={movie.EventCode} id={movie.EventCode}>
              <Suspense fallback={<div className="display-none"></div>}>
                <MovieCard key={movie.EventCode} movie={movie} />
              </Suspense>
            </div>
          ))}
        {!listItems ||
          (listItems.length === 0 && (
            <div className="margin-t-100">
              No data found for the applied filter.
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
