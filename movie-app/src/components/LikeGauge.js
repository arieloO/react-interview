const LikeGauge = ({ likes, dislikes }) => {
  const totalVotes = likes + dislikes;
  const likePercentage = likes / totalVotes;

  return (
    <div className="gauge-div">
      <div
        className="like-gauge"
        style={{ transform: `scaleX(${likePercentage})` }}
      ></div>
    </div>
  );
};

export default LikeGauge;
