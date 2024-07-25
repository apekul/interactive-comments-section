import React, { useState } from "react";

// Components
import SingleComment from "./Components/SingleComment/SingleComment";

// Provided data
import data from "./data.json";

function App() {
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState(data.comments);

  return (
    <main className="bg-[#F5F6FA] min-h-screen flex items-center justify-center">
      {/* comments list */}
      <section className="w-[40rem] h-[30rem]">
        <ul>
          {comments.map((comment, index) => (
            <SingleComment key={index} comment={comment} />
          ))}
        </ul>
        {/* Input comment */}
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
            SEND
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
