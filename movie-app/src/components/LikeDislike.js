import { useState } from "react";
import LikeButton from "./LikeButton.js";
import LikeGauge from "./LikeGauge.js";

const LikeDislike = ({ likes, dislikes, id, like, dislike }) => {
  // todo : block multiple votes
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="like-dislike">
      <LikeGauge likes={likes} dislikes={dislikes} />
      <LikeButton
        id={id}
        addVote={like}
        thumb={"up"}
        numberOfVotes={likes}
        disabled={hasVoted}
        setHasVoted={setHasVoted}
      />
      <LikeButton
        id={id}
        addVote={dislike}
        thumb={"down"}
        numberOfVotes={dislikes}
        disabled={hasVoted}
        setHasVoted={setHasVoted}
      />
    </div>
  );
};

export default LikeDislike;
