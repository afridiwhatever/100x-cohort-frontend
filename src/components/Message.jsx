/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { upvoteMessage } = useContext(ChatContext);

  const handleUpvote = () => {
    upvoteMessage(message.id);
  };

  return (
    <div className="border rounded p-4 mb-2">
      <p className="text-white">{message.content}</p>
      <button
        onClick={handleUpvote}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 focus:outline-none hover:bg-blue-600"
      >
        Upvote
      </button>
      <span className="ml-2 text-white">{message.upvotes} Upvotes</span>
    </div>
  );
};

export default Message;
