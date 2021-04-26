const LikeDislike = ({ likes, dislikes, id }) => {
    return (
        <div className="like-dislike">
            <div>likes : {likes}</div>
            <div>dislikes : {dislikes}</div>
            <meter min="0" max={likes + dislikes} value={likes}></meter>
        </div>
    );
};

export default LikeDislike;
