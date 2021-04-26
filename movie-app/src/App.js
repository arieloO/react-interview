import './App.css';
import {useState, useEffect} from "react";
import {movies$} from "./data/movies.js";
import MovieGrid from "./components/MovieGrid";




function App() {

const [movies, setMovies] = useState([]);

useEffect(()=> {
  movies$.then(data => setMovies(data))
  console.log(movies);
}, [movies])



  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="app-wrapper">
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
}

export default App;
