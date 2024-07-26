import React from "react";

const Button = ({ setReply, reply, remove, update, color }) => {
  return (
    <button
      className="flex gap-2 items-center text-[#5358B6]"
      onClick={() => setReply((prev) => !prev)}
    >
      {reply && (
        <>
          <img src="./images/icon-reply.svg" alt="icon_reply" />
          <strong>Reply</strong>
        </>
      )}
      {remove && (
        <>
          <img src="./images/icon-delete.svg" alt="icon_delete" />
          <strong className="text-[#ED6468]">Delete</strong>
        </>
      )}
      {update && (
        <>
          <img src="./images/icon-edit.svg" alt="icon_edit" />
          <strong>Edit</strong>
        </>
      )}
    </button>
  );
};

export default Button;
