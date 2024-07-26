import React, { useContext } from "react";
import { AppContext } from "./AppContext";

// Components
import SingleComment from "./Components/SingleComment/SingleComment";

// Task: https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9

function App() {
  const { comments, currentUser } = useContext(AppContext);
  return (
    <main className="bg-[#F5F6FA] min-h-screen flex items-center justify-center">
      {/* comments list */}
      <section className="w-[45rem] h-auto">
        <ul className="flex flex-col gap-5">
          {comments.map((comment, index) => (
            <li className="flex flex-col gap-5" key={index}>
              {/* Single Comment */}
              <SingleComment key={index} comment={comment} />
              {/* Replies Section */}
              {!!comment.replies.length && (
                <div className="flex border-l-2 pl-9 ml-9">
                  <div className="flex-1 flex flex-col gap-5">
                    {comment.replies.map((reply, replyIndex) => (
                      <SingleComment key={replyIndex} comment={reply} />
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Input comment */}
        <form className="bg-white p-5 flex items-start gap-5 rounded-md shadow-sm mt-5">
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
