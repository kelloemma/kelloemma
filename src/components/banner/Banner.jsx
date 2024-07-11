import React,{useState,useEffect} from 'react';
import axios from 'axios'
import requests from '../../utils/request'
import './banner.css'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

const Banner = () => {

    const [movies,setMovies] = useState([])

   useEffect(() =>{
    (async() =>{
        try{
            const request = await axios.get(requests.fetchNetflixOriginals
              
            );
            console.log(request.data.results);
            setMovies(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
              ]
            );
            
          
        }
       
        catch(err){
            console.log('error',err);}
    })()
   },[])


console.log(movies);


    return (
      <>
        <div
          className="bannerOutterContainer"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="bannerTitel">
            <h1>{movies.name}</h1>
          </div>
          <div className="bannerDescription">
            <h3> {movies?.overview}</h3>
          </div>
          <div className="bannerButton">
            <button className="play">
              <PlayArrowIcon /> play
            </button>
            <button className="info">
              <InfoIcon /> More Info
            </button>
          </div>
          <div className="bannerFadeBottom"></div>
        </div>
      </>
    );
}

export default Banner;
