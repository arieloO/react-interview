const LikeGauge = ({ likes, dislikes }) => {
  const totalVotes = likes + dislikes;
  const likePercentage = likes / totalVotes;

  return (
    <div className="gauge-div">
      <div
        className="like-gauge"
        style={{ transform: `scaleX(${likePercentage / 2})` }}
      ></div>
      {/* <div>{likes + " / " + dislikes}</div> */}
    </div>
  );
};

export default LikeGauge;
