import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const CreateComment = ({ reply, update }) => {
  const { currentUser } = useContext(AppContext);
  return (
    <form className="bg-white p-5 flex items-start gap-5 rounded-md shadow-sm">
      <img
        src={currentUser.image.png}
        alt={`${currentUser.username}_image`}
        className="w-10 h-10"
      />
      <textarea
        placeholder="Add a comment..."
        className="border-2 rounded-md px-5 w-full"
      />
      <button className="bg-[#5358B6] text-white px-5 py-2 rounded-md">
        {reply ? "REPLY" : "SEND"}
        {update && "UPDATE"}
      </button>
    </form>
  );
};

export default CreateComment;
