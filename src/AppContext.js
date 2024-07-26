import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children, initialData }) => {
  const [currentUser, setCurrentUser] = useState(initialData.currentUser);
  const [comments, setComments] = useState(initialData.comments);

  return (
    <AppContext.Provider
      value={{ currentUser, setCurrentUser, comments, setComments }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
