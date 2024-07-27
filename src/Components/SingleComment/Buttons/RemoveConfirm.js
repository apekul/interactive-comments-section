import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";

const RemoveConfirm = ({ id, setDeleteConfirm }) => {
  const { removeItem } = useContext(AppContext);

  const handleDelete = () => {
    removeItem(id);
    setDeleteConfirm(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <div className="p-7 mx-2 w-[22rem] text-[#68727E] bg-white rounded-lg shadow-md ">
        <h1 className="text-xl font-bold pb-3 text-[#343F4B]">
          Delete comment
        </h1>
        <p className="text-[0.95rem]">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="mt-4 flex gap-2 justify-between">
          <button
            onClick={() => setDeleteConfirm(false)}
            className="bg-[#68727E] text-white px-6 py-2 rounded-md hover:brightness-150"
          >
            NO, CANCEL
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#EE6368] text-white px-6 py-2 rounded-md hover:brightness-150"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveConfirm;
