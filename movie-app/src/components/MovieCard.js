




const MovieCard = ({movie, index, deleteMovie}) => {
    return (
        <div className="movie-card">
        <div className="card-headings">
            <h2>{movie.title}</h2>
            <h3>#{movie.category}</h3>
        </div>
        <button className="remove-button" onClick={() => deleteMovie(movie.id)}>
            ✖︎     
        </button>
            <div>likes : {movie.likes}</div>
            <div>dislikes : {movie.dislikes}</div>
            <meter
                min="0" max={movie.likes+movie.dislikes}            
                value={movie.likes}
            ></meter>
        </div>
    )
}

export default MovieCard;