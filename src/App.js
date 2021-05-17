import './App.css';
import React ,{ useState } from 'react'
import MovieData from "./components/MovieData"
import Nav from "./components/Nav"
import MovieList from "./components/MovieList"
import SearchMovie from "./components/SearchMovie";
import AddMovie from './components/AddMovie';

function App() {
    const [moviesList, setMoviesList] = useState(MovieData);
    const [nameSearch, setNameSearch] = useState("");
    const [ratingSearch, setRatingSearch] = useState(1);
    
  
    const addNewMovie = (e, newMovie) => {
      e.preventDefault();
      setMoviesList([...moviesList, newMovie]);
    };
  return (
    <div className="App">
          <Nav/>
          <SearchMovie
                setNameSearch={setNameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}
              />
          <MovieList  moviesList={moviesList}
                nameSearch={nameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}/>
         <AddMovie
                addNewMovie={addNewMovie}
                setRatingSearch={setRatingSearch}
         /> 
    </div>
  );
}

export default App;
