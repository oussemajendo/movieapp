import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { useHistory } from "react-router-dom";


function MovieList({ filterTitle, filterRating }) {
 
  const [movies, setMovies] = useState([]);
  const history = useHistory();


  useEffect(() => {
    setMovies([
      {
        id:1,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg",
        title: "The Shawshank Redemption",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterURL:
          "https://www.youtube.com/watch?v=RGcgh13iEOg",
        rating: 9.3,
      },
      {
        id:2,
        img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        title: "The Godfather",
        description:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        posterURL:
          "https://www.youtube.com/watch?v=RGcgh13iEOg",
        rating: 7,
      },
      {
        id:3,
        img:"https://fr.web.img6.acsta.net/pictures/22/11/25/09/18/2999342.jpg",
        title: "You",
        description:
          "The clever manager of a bookstore relies on his computer skills to make the woman of his dreams fall in love with him.",
        posterURL:
          "https://www.youtube.com/embed/ga1m0wjzscU",
        rating: 6.5,
      },
      {
        id:4,
        img:"https://m.media-amazon.com/images/M/MV5BZmFlNWY0NjktNDU1Yy00YjU4LTg3YTEtNjE5YmYzOGMzNTc0XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
        title: "The Bay",
        description:
          "Detective Sergeant Lisa Armstrong investigates the disappearance of a person in Morecambe Bay.",
        posterURL:
          "https://www.imdb.com/title/tt8425404/mediaviewer/rm2980353281/?ref_=tt_ov_i",
        rating: 4,
      },
    ]);
  }, []);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );
  const handleMovieClick = (movie) => {
    history.push(`/movie/${movie.id}`, {
      state: { movie },
    });
  };
  return (
    <div className="movie-list"  >
      
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.title} movie={movie}  onClick={() => handleMovieClick(movie)}/>
      ))}
    </div>
  );
}

export default MovieList;
