import LikeSvg from "./LikeSvg.js";

const LikeDislike = ({ id, addVote, thumb, setVoted, disabled }) => {
  const style = `${
    thumb === "up" ? "like-button" : "like-button dislike-button"
  }`;

  const handleClick = () => {
    addVote(id);
    setVoted(true);
  };

  return (
    <button
      className={style}
      disabled={disabled}
      onClick={(e) => handleClick()}
    >
      <LikeSvg />
    </button>
  );
};

export default LikeDislike;
