import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../AppContext";

const CreateComment = ({
  parentId = null,
  reply,
  setReply,
  edit,
  replyingTo,
}) => {
  const { currentUser, addCommentOrReply } = useContext(AppContext);
  const textareaRef = useRef(null);
  const [text, setText] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") return;

    // Create a new comment object
    const newComment = {
      id: Date.now(), // Use a unique ID for the new comment/reply
      content: text,
      createdAt: "Just now", // Placeholder timestamp
      score: 0,
      replyingTo,
      user: currentUser,
      replies: [], // Replies are empty initially
    };

    // Call the context function to add the comment or reply
    addCommentOrReply(parentId, newComment);

    setText(""); // Clear the textarea after submission

    // Close the reply form if it's open
    if (setReply) setReply(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      // Reset the height to 'auto' to correctly calculate the new height
      textareaRef.current.style.height = "auto";
      // Set the height to the scroll height to expand the textarea to fit the content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 flex flex-col sm:flex-row items-start gap-5 rounded-md shadow-sm relative"
    >
      <img
        src={currentUser.image.png}
        alt={`${currentUser.username}_image`}
        className="w-10 h-10 absolute sm:static bottom-6"
      />
      <textarea
        ref={textareaRef}
        value={text}
        onChange={onChange}
        rows={3}
        placeholder="Add a comment..."
        className="border-2 rounded-md px-5 py-2 w-full h-full resize-none overflow-hidden"
      />
      <button
        type="submit"
        className="bg-[#5358B6] text-white px-5 py-2 rounded-md self-end sm:self-start"
      >
        {reply ? "REPLY" : "SEND"}
      </button>
      {edit && (
        <button className="bg-[#5358B6] text-white px-5 py-2 rounded-md">
          UPDATE
        </button>
      )}
    </form>
  );
};

export default CreateComment;
