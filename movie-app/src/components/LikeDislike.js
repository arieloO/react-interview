const LikeDislike = ({ likes, dislikes, id }) => {
    return (
        <div className="like-dislike">
            <meter min="0" max={likes + dislikes} value={likes}></meter>
            <div>likes : {likes}</div>
            <div>dislikes : {dislikes}</div>
        </div>
    );
};

export default LikeDislike;
