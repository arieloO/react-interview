import { useState } from "react";
import LikeButton from "./LikeButton.js";
import LikeGauge from "./LikeGauge.js";

const LikeDislike = ({ likes, dislikes, id, like, dislike }) => {
  // todo : block multiple votes
  const [voted, setVoted] = useState(false);

  return (
    <div className="like-dislike">
      {/* <meter min="0" max={likes + dislikes} value={likes}></meter> */}
      <LikeGauge likes={likes} dislikes={dislikes} />
      <LikeButton
        id={id}
        addVote={like}
        thumb={"up"}
        voted={false}
        disabled={voted}
        setVoted={setVoted}
      />
      <div>{likes + " / " + dislikes}</div>
      <LikeButton
        id={id}
        addVote={dislike}
        thumb={"down"}
        voted={false}
        disabled={voted}
        setVoted={setVoted}
      />
    </div>
  );
};

export default LikeDislike;
