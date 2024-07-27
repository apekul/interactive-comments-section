import React, { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";

const EditComment = ({ comment, setEdit }) => {
  const { setComments } = useContext(AppContext);

  const textareaRef = useRef(null);
  const readonlyPrefix = `@${comment.replyingTo} `;
  const [text, setText] = useState(readonlyPrefix + comment.content);

  const onChangeText = (event) => {
    const { value } = event.target;
    if (!value.startsWith(readonlyPrefix)) {
      setText(readonlyPrefix + value.slice(readonlyPrefix.length));
    } else {
      setText(value);
    }
  };

  const updateContent = (comments, id, newContent) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, content: newContent };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: updateContent(comment.replies, id, newContent),
        };
      }
      return comment;
    });
  };

  const updateText = () => {
    setComments((prevComments) =>
      updateContent(prevComments, comment.id, text.slice(readonlyPrefix.length))
    );
    setEdit(false);
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
    <div className="h-auto text-end">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={onChangeText}
        placeholder="Add a comment..."
        className="border-2 rounded-md px-5 py-2 w-full h-full resize-none overflow-hidden"
      />
      <button
        className="bg-[#5358B6] text-white px-5 py-2 rounded-md"
        onClick={updateText}
      >
        UPDATE
      </button>
    </div>
  );
};

export default EditComment;
