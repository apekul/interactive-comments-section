import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";

// Components
import ScoreButtons from "./Buttons/ScoreButtons";
import Button from "./Buttons/Button";
import CreateComment from "../CreateComment";

const SingleComment = ({ comment }) => {
  const { currentUser } = useContext(AppContext);
  const [reply, setReply] = useState(false);

  return (
    <div className="flex flex-col w-full gap-2 ">
      <article className="flex gap-5 bg-white p-5 rounded-md shadow-sm">
        <ScoreButtons comment={comment} />
        <div className="w-full flex flex-col gap-4">
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
              {comment.user.username === currentUser.username && (
                <p className="text-white bg-[#5358B6] text-sm px-1.5 rounded-sm">
                  you
                </p>
              )}
              <p style={{ color: "hsl(211, 10%, 45%)" }}>{comment.createdAt}</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-5">
              {comment.user.username === currentUser.username ? (
                <>
                  <Button setReply={setReply} remove color="#ED6468" />
                  <Button setReply={setReply} update />
                </>
              ) : (
                <Button setReply={setReply} reply />
              )}
            </div>
          </header>
          <p className="pr-5" style={{ color: "hsl(211, 10%, 45%)" }}>
            {comment.replyingTo && (
              <strong className="text-[#5358B6]">@{comment.replyingTo} </strong>
            )}
            {comment.content}
          </p>
        </div>
      </article>

      {reply && <CreateComment reply />}
    </div>
  );
};

export default SingleComment;
