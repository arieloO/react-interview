import LikeDislike from "./LikeDislike";

const MovieCard = ({ movie, index, deleteMovie }) => {
    return (
        <div className="movie-card">
            <div className="card-headings">
                <h2>{movie.title}</h2>
                <h3>#{movie.category}</h3>
            </div>
            <button
                className="remove-button"
                onClick={() => deleteMovie(movie.id)}
            >
                ✖︎
            </button>

            <LikeDislike
                likes={movie.likes}
                dislikes={movie.dislikes}
                id={movie.id}
            />
        </div>
    );
};

export default MovieCard;
