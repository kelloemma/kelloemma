import React from "react";
import Rows from "../rows/Rows";
import requests from "../../../utils/request";

const RowLists = () => {
  return (
    <>
      <Rows title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} islargeRow ={true} />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Rows title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowLists;
