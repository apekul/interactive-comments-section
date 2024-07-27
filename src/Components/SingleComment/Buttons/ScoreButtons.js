import React, { useState } from "react";

const ScoreButtons = ({ comment }) => {
  const [score, setScore] = useState(comment.score);
  const [userVote, setUserVote] = useState(null);
  // Limit increment/decrement to 1 point

  const handleVote = (voteType) => {
    if (userVote === voteType) {
      // If the same vote is clicked again, remove the vote
      setUserVote(null);
      setScore((prevScore) =>
        voteType === "upvote" ? prevScore - 1 : prevScore + 1
      );
    } else {
      // Update vote state and score
      setUserVote(voteType);
      setScore((prevScore) =>
        voteType === "upvote"
          ? prevScore + (userVote === "downvote" ? 2 : 1)
          : prevScore - (userVote === "upvote" ? 2 : 1)
      );
    }
  };
  return (
    <div className="bg-[#F5F6FA] w-10 h-[6rem] self-start rounded-md items-center flex flex-col justify-between select-none">
      <button
        className={`cursor-pointer flex items-center justify-center h-[2rem] w-full rounded-t-md ${
          userVote === "upvote"
            ? "bg-[#5358B6] buttonLight-hover"
            : "button-hover"
        }`}
        onClick={() => handleVote("upvote")}
      >
        <svg
          width="11"
          height="11"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <title>Plus Icon</title>
          <path
            d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
            fill="#C5C6EF"
          />
        </svg>
      </button>
      <strong style={{ color: "hsl(238, 40%, 52%)" }}>{score}</strong>
      <button
        className={`cursor-pointer flex items-center justify-center h-[2rem] w-full transition-all duration-150 rounded-b-md ${
          userVote === "downvote"
            ? "bg-[#ED6468] buttonLight-hover"
            : "button-hover"
        }`}
        onClick={() => handleVote("downvote")}
      >
        <svg
          width="11"
          height="3"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <title>Minus Icon</title>
          <path
            d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
            fill="#C5C6EF"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScoreButtons;
