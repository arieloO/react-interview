import MovieCard from "./MovieCard";

const MovieGrid = ({ movies, deleteMovie }) => {
    return (
        <div className="movie-grid">
            {movies.map((movie, index) => {
                return (
                    <MovieCard
                        movie={movie}
                        index={index}
                        key={movie.id}
                        deleteMovie={deleteMovie}
                    />
                );
            })}
            <div className="movie-card-fill"></div>
            <div className="movie-card-fill"></div>
            <div className="movie-card-fill"></div>
        </div>
    );
};

export default MovieGrid;
