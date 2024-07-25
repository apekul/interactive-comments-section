import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <article className="flex gap-5 bg-white p-5 mb-5 rounded-md shadow-sm">
      <div className="bg-[#F5F6FA] self-start rounded-md w-10 items-center flex flex-col gap-1">
        <button>+</button>
        <p>{comment.score}</p>
        <button>-</button>
      </div>
      <div className="w-full flex flex-col gap-2">
        <header className="flex gap-5 justify-between w-full">
          <div className="flex gap-3 items-center">
            <img
              src={comment.user.image.webp}
              alt={`${comment.user.username}_image`}
              className="w-8"
            />
            <strong>{comment.user.username}</strong>
            <p>{comment.createdAt}</p>
          </div>
          <button>
            <span>Reply</span>
          </button>
        </header>
        <p>{comment.content}</p>
      </div>
    </article>
  );
};

export default SingleComment;
