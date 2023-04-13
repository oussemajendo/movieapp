import React from "react";
import { Link, useParams } from "react-router-dom";
import './style.css';
function MovieDetails({ movies }) {
  const { id } = useParams(); // Get the id parameter from the URL
  const movie = movies.find((m) => m.id === parseInt(id)); // Find the movie in the movies array

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-trailer">
     
       
      
      <h2 className="wess">{movie.title}</h2>
      <p className="viv" style={{ color: "white" }}>{movie.description}</p>
      <div  className="btnn">
      <iframe width="900" height="550"
       src={movie.posterURL}
       title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="">
       </iframe>
       <Link  className="home-link" style={{ color: "white" }} to="/">
        Go back to home page
      </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
