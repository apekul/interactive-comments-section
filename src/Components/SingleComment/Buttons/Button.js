import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";

const Button = ({ ...props }) => {
  const { removeItem } = useContext(AppContext);

  const handleEdit = () => {
    props.setEdit((prev) => !prev);
  };
  const handleReply = () => {
    props.setReply((prev) => !prev);
  };
  const handleRemove = () => {
    removeItem(props.id);
  };
  return (
    <>
      {props.reply && (
        <button
          className="flex gap-2 items-center text-[#5358B6] hover:opacity-50"
          onClick={handleReply}
        >
          <>
            <img src="./images/icon-reply.svg" alt="icon_reply" />
            <strong>Reply</strong>
          </>
        </button>
      )}
      {props.remove && (
        <button
          className="flex gap-2 items-center text-[#5358B6] hover:opacity-50"
          onClick={handleRemove}
        >
          <>
            <img src="./images/icon-delete.svg" alt="icon_delete" />
            <strong className="text-[#ED6468]">Delete</strong>
          </>
        </button>
      )}
      {props.edit && (
        <button
          className="flex gap-2 items-center text-[#5358B6] hover:opacity-50"
          onClick={handleEdit}
        >
          <>
            <img src="./images/icon-edit.svg" alt="icon_edit" />
            <strong>Edit</strong>
          </>
        </button>
      )}
    </>
  );
};

export default Button;
