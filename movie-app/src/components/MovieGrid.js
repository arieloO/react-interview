import MovieCard from "./MovieCard"





const MovieGrid = ({movies}) => {

    return (
        <div className="movie-grid">
        { movies.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />
        }) }
        </div>
    )
}

export default MovieGrid;