import React, { useContext } from "react";
import { AppContext } from "./AppContext";

// Components
import SingleComment from "./Components/SingleComment/SingleComment";
import CreateComment from "./Components/CreateComment";

// Task: https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9

function App() {
  const { comments, currentUser } = useContext(AppContext);
  return (
    <main className="bg-[#F5F6FA] min-h-screen flex items-start justify-center">
      {/* comments list */}
      <section className="w-[45rem] my-20">
        <ul className="">
          {comments.map((comment, index) => (
            <li className="mb-5" key={index}>
              {/* Single Comment */}
              <SingleComment key={index} comment={comment} />
              {/* Replies Section */}
              {!!comment.replies.length && (
                <div className="border-l-2 pl-9 ml-9 mt-5">
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
        <CreateComment />
      </section>
    </main>
  );
}

export default App;
