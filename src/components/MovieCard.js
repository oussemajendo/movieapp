import React from "react";


  function MovieCard({ movie }) {
    return (
     
    
      <div className="movie">
       
             <>
          <img src={movie.img} alt={movie.title} />
          <div className="movie-details">
           <div className="box">
              <h2 className="title">{movie.title}</h2>
              <p className="rating">{movie.rating}</p>
          </div>
              <div className="overview">
                  <h1>Overview</h1>
                  {movie.description}
              </div>
        </div>
            </>
          
      </div>
    
    );
}

export default MovieCard;
