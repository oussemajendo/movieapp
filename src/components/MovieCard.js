import React from "react";


function MovieCard(props) {
  const { movie, onClick } = props;

  
  return (
    
<div className="movie" onClick={onClick}>    

      <img src={movie.img} alt={movie.title} />
      <div className="movie-details">
        <div className="box">
          <h2 className="title">{movie.title}</h2>
        </div>
        <div className="overview">
          <h1>Overview</h1>
          {movie.description}
        </div>
      </div>

    </div>
  );
}

export default MovieCard;
