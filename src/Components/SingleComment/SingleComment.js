import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <article className="flex gap-5 bg-white p-5  rounded-md shadow-sm">
      <div className="bg-[#F5F6FA] w-10 self-start rounded-md items-center flex flex-col gap-1">
        <button className="cursor-pointer p-2">
          <img src="./images/icon-plus.svg" alt="icon_plus" />
        </button>
        <strong style={{ color: "hsl(238, 40%, 52%)" }}>{comment.score}</strong>
        <button className="cursor-pointer p-2">
          <img src="./images/icon-minus.svg" alt="icon_minus" />
        </button>
      </div>
      <div className="w-full flex flex-col gap-2">
        <header className="flex gap-5 justify-between w-full">
          <div className="flex gap-3 items-center">
            <img
              src={comment.user.image.webp}
              alt={`${comment.user.username}_image`}
              className="w-8"
            />
            <strong style={{ color: "hsl(212, 24%, 26%)" }}>
              {comment.user.username}
            </strong>
            <p style={{ color: "hsl(211, 10%, 45%)" }}>{comment.createdAt}</p>
          </div>
          <button className="flex gap-2 items-center text-[#5358B6]">
            <img src="./images/icon-reply.svg" alt="icon_reply" />
            <strong>Reply</strong>
          </button>
        </header>
        <p className="pr-5" style={{ color: "hsl(211, 10%, 45%)" }}>
          {comment.content}
        </p>
      </div>
    </article>
  );
};

export default SingleComment;
