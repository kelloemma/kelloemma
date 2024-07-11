import React, { useState, useEffect } from "react";
import axios from "axios";
import "../row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Rows = ({ title, fetchUrl, islargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
  console.log(movies);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);

          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        }
      );
    }
  };

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

  console.log(trailerUrl);
  return (
    <>
      <div className="rowOutterContainer">
        <h1>{title}</h1>
        <div className={` ${islargeRow ? "largeRowPoster" : "rowPoster"}`}>
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${baseUrl}${movie?.poster_path}`}
              alt=""
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
};

export default Rows;
