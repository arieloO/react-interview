const NoMovies = () => {
  console.log("NOOOO MOVIIIIES !");
  return (
    <div className="movie-card no-movie-card">
      <div className="card-headings">
        <h2>
          Hi there ! Seems like you've deleted all movies ! <br />
          Refresh the page to get all movies back !
        </h2>
      </div>

      <a href="http://localhost:3000/" alt="refresh">
        <button className="resfresh-button">REFRESH</button>
      </a>
    </div>
  );
};

export default NoMovies;
