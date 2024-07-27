import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";

// Components
import ScoreButtons from "./Buttons/ScoreButtons";
import Button from "./Buttons/Button";
import CreateComment from "../CreateComment";
import EditComment from "./EditComment";
import RemoveConfirm from "./Buttons/RemoveConfirm";

const SingleComment = ({ comment, parentId }) => {
  const { currentUser } = useContext(AppContext);
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  return (
    <div className="flex flex-col w-full gap-2">
      {deleteConfirm && (
        <RemoveConfirm id={comment.id} setDeleteConfirm={setDeleteConfirm} />
      )}
      <article className="flex gap-5 bg-white p-5 rounded-md shadow-sm">
        <div className="hidden sm:block">
          <ScoreButtons comment={comment} />
        </div>
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
            <div className="hidden sm:flex gap-5">
              {comment.user.username === currentUser.username ? (
                <>
                  <Button
                    remove
                    color="#ED6468"
                    setDeleteConfirm={setDeleteConfirm}
                  />
                  <Button setEdit={setEdit} edit />
                </>
              ) : (
                <Button id={comment.id} setReply={setReply} reply />
              )}
            </div>
          </header>
          <div className="pr-5" style={{ color: "hsl(211, 10%, 45%)" }}>
            {!edit ? (
              <p>
                {comment.replyingTo && (
                  <strong className="text-[#5358B6]">
                    @{comment.replyingTo}{" "}
                  </strong>
                )}
                {comment.content}
              </p>
            ) : (
              <EditComment comment={comment} setEdit={setEdit} />
            )}
            {/* Buttons */}
            <div className="flex sm:hidden gap-5 justify-between pt-5">
              <ScoreButtons comment={comment} />
              {comment.user.username === currentUser.username ? (
                <div className="flex gap-5">
                  <Button
                    setDeleteConfirm={setDeleteConfirm}
                    id={comment.id}
                    remove
                    color="#ED6468"
                  />
                  <Button setEdit={setEdit} edit />
                </div>
              ) : (
                <Button id={comment.id} setReply={setReply} reply />
              )}
            </div>
          </div>
        </div>
      </article>
      {reply && (
        <CreateComment
          reply
          setReply={setReply}
          parentId={parentId !== undefined ? parentId : comment.id}
          replyingTo={comment.user.username}
        />
      )}
    </div>
  );
};

export default SingleComment;
