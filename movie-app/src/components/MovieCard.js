




const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <h3>{movie.category}</h3>
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