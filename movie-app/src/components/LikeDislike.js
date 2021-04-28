import { useState } from "react";
import LikeSvg from "./LikeSvg.js";

const LikeDislike = ({ likes, dislikes, id, like, dislike }) => {
  // todo : block multiple votes
  const [voted, setVoted] = useState(false);

  return (
    <div className="like-dislike">
      <meter min="0" max={likes + dislikes} value={likes}></meter>
      <button
        className="like-button"
        disabled={voted}
        onClick={() => {
          like(id);
          setVoted(true);
        }}
      >
        <LikeSvg />
      </button>
      <div>{likes + " / " + dislikes}</div>
      <button
        className="like-button dislike-button"
        disabled={voted}
        onClick={() => {
          dislike(id);
          setVoted(true);
        }}
      >
        <LikeSvg />
      </button>
    </div>
  );
};

export default LikeDislike;
