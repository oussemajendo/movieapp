import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieAdd from "./components/MovieAdd";
import './components/style.css';
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [movies] = useState([
    { id: 1, title: "The Shawshank Redemption" , posterURL:"https://www.youtube.com/embed/NmzuHjWmXOc", description:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."},
    { id: 2, title: "The Godfather",posterURL:"https://www.youtube.com/embed/UaVTIH8mujA", description:
    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."},
    { id: 3, title: "You",posterURL:"https://www.youtube.com/embed/ga1m0wjzscU",description:
    "The clever manager of a bookstore relies on his computer skills to make the woman of his dreams fall in love with him."},
    { id: 4, title: "The Bay",posterURL:"https://www.youtube.com/embed/ldKbY_9z0Hs" ,description:
    "Detective Sergeant Lisa Armstrong investigates the disappearance of a person in Morecambe Bay."},

    // Add more movies as needed
  ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(1);
  
  const handleFilterTitleChange = (title) => {
    setFilterTitle(title);
  };

  const handleFilterRatingChange = (rating) => {
    setFilterRating(rating);
    
  };

  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Filter
              onFilterTitleChange={handleFilterTitleChange}
              onFilterRatingChange={handleFilterRatingChange}
            />
            <MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} />
            <MovieAdd /> 
        </Route>

            <Route path="/movie/:id">
            <MovieDetails movies={movies} />
            </Route>


        </Switch>
    </Router>
  );
}

export default App;
