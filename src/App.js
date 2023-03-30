import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieAdd from "./components/MovieAdd";
import './components/style.css';

function App() {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(1);
  
 
  const handleFilterTitleChange = (title) => {
    setFilterTitle(title);
  };

  const handleFilterRatingChange = (rating) => {
    setFilterRating(rating);
  };

  return (
    <div className="app">
      <Filter
        onFilterTitleChange={handleFilterTitleChange}
        onFilterRatingChange={handleFilterRatingChange}
      />
      <MovieList filterTitle={filterTitle} filterRating={filterRating} />
      <MovieAdd />
    </div>
  );
}

export default App;
