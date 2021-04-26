const LikeDislike = ({ likes, dislikes, id, like, dislike }) => {
  return (
    <div className="like-dislike">
      <meter min="0" max={likes + dislikes} value={likes}></meter>
      <button onClick={() => like(id)}>like</button>
      <div>{likes}</div>
      <div>{dislikes}</div>
      <button onClick={() => dislike(id)}>dislike</button>
    </div>
  );
};

export default LikeDislike;
