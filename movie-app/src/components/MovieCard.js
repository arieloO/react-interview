import LikeDislike from "./LikeDislike";

const MovieCard = ({ movie, deleteMovie, like, dislike }) => {
  return (
    <div className="movie-card">
      <div className="card-headings">
        <h2>{movie.title}</h2>
        <h3>#{movie.category}</h3>
      </div>
      <button className="remove-button" onClick={() => deleteMovie(movie.id)}>
        delete
      </button>

      <LikeDislike
        likes={movie.likes}
        dislikes={movie.dislikes}
        id={movie.id}
        like={like}
        dislike={dislike}
      />
    </div>
  );
};

export default MovieCard;
