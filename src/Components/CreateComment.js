import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../AppContext";

const CreateComment = ({ reply, edit }) => {
  const { currentUser } = useContext(AppContext);
  const textareaRef = useRef(null);
  const [text, setText] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      // Reset the height to 'auto' to correctly calculate the new height
      textareaRef.current.style.height = "auto";
      // Set the height to the scroll height to expand the textarea to fit the content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  // Run the effect initially to adjust height based on initial text
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <form className="bg-white p-5 flex items-start gap-5 rounded-md shadow-sm">
      <img
        src={currentUser.image.png}
        alt={`${currentUser.username}_image`}
        className="w-10 h-10"
      />
      <textarea
        ref={textareaRef}
        value={text}
        onChange={onChange}
        placeholder="Add a comment..."
        className="border-2 rounded-md px-5 py-2 w-full h-full resize-none overflow-hidden"
      />
      <button className="bg-[#5358B6] text-white px-5 py-2 rounded-md">
        {reply ? "REPLY" : "SEND"}
        {edit && "UPDATE"}
      </button>
    </form>
  );
};

export default CreateComment;
