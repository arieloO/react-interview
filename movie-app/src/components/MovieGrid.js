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
        </div>
    );
};

export default MovieGrid;
