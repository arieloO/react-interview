const LikeDislike = ({ likes, dislikes, id, like, dislike }) => {
  return (
    <div className="like-dislike">
      <meter min="0" max={likes + dislikes} value={likes}></meter>
      <button className="like-button" onClick={() => like(id)}>
        👍
      </button>
      <div>{likes + " / " + dislikes}</div>
      <button
        className="like-button dislike-button"
        onClick={() => dislike(id)}
      >
        👎
      </button>
    </div>
  );
};

export default LikeDislike;
