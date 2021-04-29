import LikeSvg from "./LikeSvg.js";

const LikeDislike = ({
  id,
  addVote,
  thumb,
  numberOfVotes,
  disabled,
  setHasVoted,
}) => {
  const style = `${
    thumb === "up" ? "like-button" : "like-button dislike-button"
  }`;

  const handleClick = () => {
    addVote(id);
    setHasVoted(true);
  };

  return (
    <button
      className={style}
      disabled={disabled}
      onClick={(e) => handleClick()}
    >
      <LikeSvg />
      <div>{numberOfVotes}</div>
    </button>
  );
};

export default LikeDislike;
