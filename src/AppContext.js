import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children, initialData }) => {
  const [currentUser, setCurrentUser] = useState(initialData.currentUser);
  const [comments, setComments] = useState(initialData.comments);

  // Function to add a comment or reply
  const addCommentOrReply = (parentId, newComment) => {
    // Recursive function to find the correct parent and add the new comment/reply
    const addItem = (items, parentId, newItem) => {
      return items.map((item) => {
        // Check if this item is the target parent
        if (item.id === parentId) {
          return {
            ...item,
            replies: [...(item.replies || []), newItem], // Add newItem to replies
          };
        }

        // If the item has replies, check them recursively
        if (item.replies && item.replies.length > 0) {
          return {
            ...item,
            replies: addItem(item.replies, parentId, newItem),
          };
        }

        return item; // Return unchanged if not the target parent
      });
    };

    if (parentId === null) {
      // Adding a new top-level comment
      setComments((prevComments) => [...prevComments, newComment]);
    } else {
      // Adding a reply to an existing comment or reply
      setComments((prevComments) =>
        addItem(prevComments, parentId, newComment)
      );
    }
  };

  // Remove comment or a reply
  const removeItem = (itemId) => {
    setComments((prevComments) => {
      // Check if the itemId exists in the comments
      const isComment = prevComments.some((comment) => comment.id === itemId);

      if (isComment) {
        // Remove  comment
        return prevComments.filter((comment) => comment.id !== itemId);
      }

      // Remove reply
      return prevComments.map((comment) => ({
        ...comment,
        replies: comment.replies.filter((reply) => reply.id !== itemId),
      }));
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        comments,
        setComments,
        removeItem,
        addCommentOrReply,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
